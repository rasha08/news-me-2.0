import { map, kebabCase, get } from 'lodash';
import { createCategoryTitle } from '../../../services/utils.service';

export const CategoryLdSchema = props => {
  const schema = {};

  schema['@context'] = 'https://schema.org';
  schema['@type'] = 'Itemlist';
  schema['name'] = createCategoryTitle(props.originalUrl);
  schema['url'] = `https://news-me.net${props.originalUrl}`;
  schema['itemlistElement'] = map(
    get(props, 'newsCategory.news', []),
    (n, index) => {
      const listItem = {
        name: n.title,
        url: `https://news-me.net/today-news/${n.category}/${kebabCase(
          n.source
        )}/${n.newsTitleSlug}`,
        position: index + 1
      };
      listItem['@type'] = 'ListItem';

      return listItem;
    }
  );

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
