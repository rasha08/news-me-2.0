import { map, slice, get, gte, isEmpty, truncate, kebabCase } from 'lodash';
import NewsCard from '../news-card/news-card';

const limit = 12;
let offset = 1;

const formatEntity = entity => truncate(entity, { length: 60, separator: ' ' });
const getUrl = (currentCategory, newsTitleSlug, source) =>
  `/today-news/${currentCategory}/${kebabCase(source)}/${newsTitleSlug}`;

const NewsCards = ({
  news,
  currentCategory,
  detectChanges,
  originalUrl,
  likedNews
}) => {
  const increaseOffset = () => {
    offset++;
    detectChanges();
  };

  const createBackLink = () =>
    originalUrl.slice(0, originalUrl.lastIndexOf('/'));

  if (isEmpty(news)) {
    try {
      location.href = createBackLink();
    } catch (error) {}
  }
  return (
    <div>
      <div className='row all-news-wrapper'>
        {map(
          slice(news, 0, 1),
          ({ title, urlToImage, newsTitleSlug, source }, index) => (
            <div className='col-sm-12 col-md-8 col-xl-6 col-lg-6' key={index}>
              <a id='top_header_target' />
              <div className='top-news'>
                <div className='banner-top-news'>
                  <span>
                    <p>TOP NEWS</p>
                  </span>
                </div>
                <div className='img-container'>
                  <img
                    data-src={urlToImage}
                    alt={title}
                    title={title}
                    className='img img-responsive'
                  />
                </div>
                <a
                  className='top-news-footer'
                  href={getUrl(currentCategory, newsTitleSlug, source)}
                >
                  <p>{formatEntity(title)}</p>
                </a>
              </div>
            </div>
          )
        )}

        <div className='col-sm-12 col-md-4 col-xl-6 col-lg-6'>
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
                <div className='similar-card' key={index}>
                  <div className='similar-card-img'>
                    <img
                      data-src={urlToImage}
                      alt={title}
                      title={title}
                      className='img img-responsive'
                    />
                  </div>
                  <a
                    className='similar-card-content'
                    href={getUrl(currentCategory, newsTitleSlug, source)}
                  >
                    {formatEntity(title)}
                  </a>
                  <div className='first-line-similar' />
                  <div className='second-line-similar'>
                    <i className='far fa-comments' />
                    <i className='far fa-heart' />
                    <i className='fas fa-share-alt' />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className='another-title'>
        <h5>
          Others News
          <span />
        </h5>
      </div>

      <div className='another-news-container'>
        <div className='row'>
          {map(slice(news, 4, limit * offset), singleNews => (
            <NewsCard
              key={singleNews._id}
              news={singleNews}
              currentCategory={currentCategory}
              likedNews={likedNews}
            />
          ))}
        </div>
      </div>

      <hr />
      {!gte(limit * offset, get(news, 'length')) ? (
        <button
          className='btn btn-default btn-lg load-more'
          onClick={increaseOffset}
        >
          Load More
        </button>
      ) : (
        <div />
      )}
    </div>
  );
};

export default NewsCards;
