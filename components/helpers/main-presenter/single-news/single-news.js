import { truncate, kebabCase, map, slice } from 'lodash';

import SingleNewsImage from './single-news-image/single-news-image';
import SingleNewsBody from './single-news-body/single-news-body';
import SingleNewsActions from './single-news-actions/single-news-actions';

import { setLikedCssClassIfNeeded } from '../../../services/utils.service';

const formatEntity = entity => truncate(entity, { length: 60, separator: ' ' });
const getUrl = (currentCategory, newsTitleSlug, source) =>
  `/today-news/${currentCategory}/${kebabCase(source)}/${newsTitleSlug}`;

const SingleNews = ({
  currentNews,
  originalUrl,
  addNewsToVisitedNews,
  likedNews,
  news,
  currentCategory
}) => {
  return (
    <>
      <div className='col-md-12 col-xl-12 col-lg-12  single-card'>
        <div
          className='col-sm-11 col-md-11 col-xl-11 col-lg-11'
          id='open-news-right'
        >
          <div
            className={`${setLikedCssClassIfNeeded(
              currentNews,
              likedNews
            )} card`}
          >
            <SingleNewsImage currentNews={currentNews} />
            <SingleNewsBody currentNews={currentNews} />
            <SingleNewsActions
              currentNews={currentNews}
              originalUrl={originalUrl}
              addNewsToVisitedNews={addNewsToVisitedNews}
            />
          </div>
        </div>
      </div>
      <div className='col-sm-12 col-md-12 col-xl-12 col-lg-12'>
        <div className='similar-box'>
          <div className='similar-title'>
            <h5>
              Similar News
              <span />
            </h5>
          </div>

          {map(
            slice(news, 1, 4),
            ({ title, urlToImage, newsTitleSlug, source }, index) => (
              <article className='similar-card col-sm-3 smallest' key={index}>
                <div className='similar-card-img'>
                  <img
                    data-src={urlToImage}
                    alt={title}
                    title={title}
                    className='img img-responsive'
                  />
                </div>
                <h2>
                  <a
                    className='similar-card-content'
                    href={getUrl(currentCategory, newsTitleSlug, source)}
                  >
                    {formatEntity(title)}
                  </a>
                </h2>

                <div className='first-line-similar' />
                <div className='second-line-similar'>
                  <i className='far fa-comments' />
                  <i className='far fa-heart' />
                  <i className='fas fa-share-alt' />
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default SingleNews;
