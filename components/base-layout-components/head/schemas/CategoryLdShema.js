import { map } from 'lodash';

export const CategoryLdSchema = category => {
  const schema = {};

  schema['@context'] = 'https://schema.org';
  schema['@type'] = 'Itemlist';
  schema['name'] = 'Name of Page';
  schema['url'] = '';
  schema['itemlistElement'] = map(news, (n, index) => {
    const listItem = {
      name: 'Name of Category',
      url: 'URL of Category',
      position: index
    };
    listItem['@type'] = 'ListItem';

    return listItem;
  });

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
