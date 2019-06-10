import { kebabCase } from 'lodash';

export const LdSchema = news => {
  const schema = {};

  schema['@context'] = 'https://schema.org';
  schema['@type'] = 'NewsArticle';

  schema['mainEntityOfPage'] = {};
  schema['mainEntityOfPage']['@type'] = 'WebPage';
  schema['mainEntityOfPage']['@id'] = `https://news-me.net/today-news/${
    news.news.category
  }/${kebabCase(news.news.source)}/${news.news.newsTitleSlug}`;

  schema['headline'] = news.news.title;
  schema['image'] = [news.news.urlToImage];
  schema['datePublished'] = news.news.publishedAt;
  schema['dateModified'] = news.news.publishedAt;

  schema['author'] = {};
  schema['author']['@type'] = 'Person';
  schema['author']['name'] = news.news.author || '';

  schema['publisher'] = {};
  schema['publisher']['@type'] = 'Organization';
  schema['publisher']['name'] = news.news.source;
  schema['publisher']['logo'] = {};
  schema['publisher']['logo']['@type'] = 'ImageObject';
  schema['publisher']['logo']['url'] =
    'https://news-me.net/static/img/logo.jpg';

  schema['description'] = news.news.description;

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
