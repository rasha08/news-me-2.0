import Head from 'next/head';
import { LdSchema } from './schemas/LdSchema';
import { CategoryLdSchema } from './schemas/CategoryLdShema';
import { capitalize, split, join, map } from 'lodash';

const createCategoryTitle = category =>
  join(map(split(category, '-'), capitalize), ' ');

const CustomHead = props => (
  <Head>
    <title>
      {'News Me - Today News - ' + createCategoryTitle(props.currentCategory) ||
        'News Me - Today News'}
    </title>
    <meta
      name='viewport'
      content='initial-scale=1.0, width=device-width'
      key='viewport'
    />
    <link
      rel='stylesheet'
      href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
      integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
      crossorigin='anonymous'
    />
    <link rel='stylesheet' href='/static/css/app.css' />
    <link
      rel='stylesheet'
      href='https://use.fontawesome.com/releases/v5.7.2/css/all.css'
      integrity='sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr'
      crossorigin='anonymous'
    />
    <link rel='icon' sizes='any' mask='' href='/static/img/logo.jpg' />
    {props.currentNews ? <LdSchema news={props.currentNews} /> : <></>}
  </Head>
);

export default CustomHead;
