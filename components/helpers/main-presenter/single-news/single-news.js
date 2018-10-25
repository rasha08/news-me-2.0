import { get } from 'lodash';

import SingleNewsImage from './single-news-image/single-news-image';
import SingleNewsBody from './single-news-body/single-news-body';
import SingleNewsActions from './single-news-actions/single-news-actions';

import { setLikedCssClassIfNeeded } from '../../../services/utils.service';

const SingleNews = ({
  currentNews,
  originalUrl,
  addNewsToVisitedNews,
  likedNews
}) => {
  return (
    <div className="container col-md-12 row single-card">
      <div
        className={`${setLikedCssClassIfNeeded(currentNews, likedNews)} card`}
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
  );
};

export default SingleNews;
