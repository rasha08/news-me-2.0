const express = require("express");
const next = require("next");
const axios = require("axios");
const { get, map, filter, find, startCase, toUpper, uniqBy, kebabCase, reverse, remove, cloneDeep } = require('lodash');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandle = nextApp.getRequestHandler();

let websiteConfiguration;
let newsCategories;
let navigation;

nextApp.prepare()
    .then(() => {
      fetchNewsAndConfiguration().then(() => {
        scheduleNewsAndConfigurationRefresh()
        const server = express();

        server.get("/", (req, res) => {
          console.log('Requesting Home page')
          nextApp.render(req, res, '/news-category', prepareResponseForCategory());
        });
        server.get('/today-news/:category', (req, res) => {
          console.log(`Requesting ${req.params.category} category page`)
          nextApp.render(req, res, '/news-category', prepareResponseForCategory(req.params.category));
        });

        server.get('/today-news/:category/:source', (req, res) => {
          console.log(`Requesting ${req.params.source} source page`)
          const { category, source } = req.params;
          nextApp.render(req, res, '/news-category', prepareResponseForSource(category, source));
        });

        server.get('/today-news/:category/:source/:newsSlug', (req, res) => {
          const { category, source, newsSlug } = req.params;
          console.log(`Requesting news page `,  category, source, newsSlug)
          
          nextApp.render(req, res, '/news-category', prepareSingleNewsResponse(category, newsSlug));
        });

        server.get("*", (req, res) => {
          return nextHandle(req, res)
        });

        server.listen(port, (err) => {
          if (err) {
            throw err;
          }
          console.log(`> Ready on http://localhost:${port}`)
        });
      });
  });


let fetchNewsAndConfiguration = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://api-news-me.ml/public/today-news').then(apiNewsAndConfiguration => {
      websiteConfiguration = apiNewsAndConfiguration.data['clientConfiguration'];
      newsCategories = apiNewsAndConfiguration.data['newsCategories'];
      navigation = reverse(remove(map(newsCategories, formatNavigationItems), removeTopHeadlinesFromNavigation));

      console.log('**** news and configuration fetched and ready ***')
      resolve(true);
    })
  })
}


let scheduleNewsAndConfigurationRefresh = () => setInterval(() => fetchNewsAndConfiguration(), 3600000);

let removeTopHeadlinesFromNavigation = category => category.slug !== 'top-headlines';

let formatNavigationItems = category => {
  return {
    slug: get(category, 'categoryName'),
    name: toUpper(startCase(get(category, 'categoryName')))
  }
}

let prepareNewsSource = singleNews => {
  return {
    title: get(singleNews, 'source'),
    slug: kebabCase(get(singleNews, 'source'))
  }
}

let prepareResponseForCategory = (categorySlug = 'top-headlines') => {
  let newsCategory = findCategoryBySlug(categorySlug)
  let sources = getUniqueSourcesForCategory(newsCategory)
  
  return formatResponseObject(websiteConfiguration, newsCategory, navigation, sources)
}

let prepareResponseForSource = (categorySlug, source) => {
  let newsCategory = findCategoryBySlug(categorySlug);
  let sources = getUniqueSourcesForCategory(newsCategory)

  if (newsCategory) {
    newsCategory['news'] = filter(get(newsCategory, 'news'), singleNews => kebabCase(get(singleNews, 'source')) === source);
  } else {
    newsCategory = getCategoryDefaultObject();
  }

  return formatResponseObject(websiteConfiguration, newsCategory, navigation, sources);
}

let findCategoryBySlug = (categorySlug) => {
  return cloneDeep(find(newsCategories, category => get(category, 'categoryName') === categorySlug));
}

let getUniqueSourcesForCategory = (newsCategory) => {
  return uniqBy(map(get(newsCategory, 'news'), prepareNewsSource), 'slug')
}

let formatResponseObject = (websiteConfiguration, newsCategory, navigation, sources, currentNews = null) => {
  return {
    websiteConfiguration,
    newsCategory,
    navigation,
    sources,
    currentNews
  }
}

let getCategoryDefaultObject = () => {
  return {
    categoryName: '',
    news: []
  }
}

let prepareSingleNewsResponse = (categorySlug, newsSlug) => {
  let newsCategory = findCategoryBySlug(categorySlug);
  let sources = getUniqueSourcesForCategory(newsCategory);
  let currentNews = findSingleNewsBySlug(newsCategory, newsSlug);
 
  return formatResponseObject(websiteConfiguration, newsCategory, navigation, sources, currentNews);
}

let findSingleNewsBySlug = (newsCategory, newsSlug) => {
  return find(get(newsCategory, 'news'), singleNews => get(singleNews, 'newsTitleSlug') === newsSlug)
}