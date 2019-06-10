import Head from 'next/head';
import { LdSchema } from './schemas/LdSchema';
import { CategoryLdSchema } from './schemas/CategoryLdShema';
import { createCategoryTitle } from '../../services/utils.service';

const CustomHead = props => {
  return (
    <Head>
      <title>
        {!props.currentNews
          ? createCategoryTitle(props.originalUrl)
          : `News Me - Today News: ${props.currentNews.title}`}
      </title>

      <meta
        name='description'
        content={
          !props.currentNews
            ? createCategoryTitle(props.originalUrl) +
              ' - read latest today news!'
            : `News Me - Today News: ${props.currentNews.description}`
        }
      />

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
      {props.currentNews ? (
        <LdSchema news={props.currentNews} />
      ) : (
        <CategoryLdSchema
          newsCategory={props.newsCategory}
          originalUrl={props.originalUrl}
        />
      )}

      <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=UA-141789082-1'
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments); }
        gtag('js', new Date());
      
        gtag('config', 'UA-141789082-1');`
        }}
      />

      <meta
        name='google-site-verification'
        content='mo6wy1IlWs6_wIOIyUVuoQr3rq_ZgaPnQsmsyNLgxRo'
      />
    </Head>
  );
};

export default CustomHead;
