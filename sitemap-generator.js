const express = require('express');
const fs = require('fs');
const axios = require('axios');

const { keys, kebabCase, orderBy, each, groupBy } = require('lodash');

const writer = fs.createWriteStream(__dirname + '/static/sitemap.xml');

let fetchNewsAndConfiguration = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('http://api.news-me.net/public/today-news')
      .then(apiNewsAndConfiguration => {
        console.log('**** Configuration Fetched ****');

        newsCategories = apiNewsAndConfiguration.data['newsCategories'];
        each(newsCategories, category => {
          category.news = orderBy(
            each(
              category.news,
              n => (n.timestamp = new Date('publishedAt').getTime())
            ),
            ['timestamp'],
            ['desc']
          );
        });

        console.log('**** Creating Sitemap ****');

        writer.write(creteSitemapString(newsCategories), (err, res) => {
          if (err) {
            console.error(err);
            return;
          }

          console.log('*** Sitemap created ****');
          resolve(true);
        });
      });
  });
};

let creteSitemapString = newsCategories => {
  const date = new Date();
  let sitemapString = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        <url>
            <loc>https://news-me.net/</loc>
            <lastmod>${date.toISOString()}</lastmod>
            <priority>1.00</priority>
        </url>
    `;

  each(newsCategories, ({ categoryName }) => {
    sitemapString += `
        <url>
            <loc>https://news-me.net/today-news/${categoryName}</loc>
            <lastmod>${date.toISOString()}</lastmod>
            <priority>0.80</priority>
        </url>
        `;
  });

  each(newsCategories, ({ categoryName, news }) => {
    let sources = groupBy(news, 'source');
    each(keys(sources), source => {
      sitemapString += `
        <url>
            <loc>https://news-me.net/today-news/${categoryName}/${kebabCase(
        source
      )}</loc>
            <lastmod>${date.toISOString()}</lastmod>
            <priority>0.70</priority>
        </url>
        `;
    });
  });

  each(newsCategories, ({ categoryName, news }) => {
    each(news, ({ newsTitleSlug, source }) => {
      sitemapString += `
        <url>
            <loc>https://news-me.net/today-news/${categoryName}/${kebabCase(
        source
      )}/${newsTitleSlug}</loc>
            <lastmod>${date.toISOString()}</lastmod>
            <priority>0.60</priority>
        </url>
        `;
    });
  });

  sitemapString += `
    </urlset>`;

  return sitemapString;
};

let scheduleNewsAndConfigurationRefresh = () =>
  setInterval(() => fetchNewsAndConfiguration(), 100000);

fetchNewsAndConfiguration().then(scheduleNewsAndConfigurationRefresh);
