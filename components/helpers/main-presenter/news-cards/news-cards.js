import { map, slice, get, gte, isEmpty } from 'lodash';
import NewsCard from '../news-card/news-card';

const limit = 12;
let offset = 1;

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
    <div className="container col-md-12 row">
      {map(slice(news, 0, limit * offset), singleNews => (
        <NewsCard
          key={singleNews._id}
          news={singleNews}
          currentCategory={currentCategory}
          likedNews={likedNews}
        />
      ))}

      <hr />
      {!gte(limit * offset, get(news, 'length')) ? (
        <button
          className="btn btn-primary btn-lg load-more"
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
