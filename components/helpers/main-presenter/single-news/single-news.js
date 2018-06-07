import { get } from 'lodash';
import SingleNewsImage from './single-news-image/single-news-image';
import SingleNewsBody from './single-news-body/single-news-body'
import SingleNewsActions from './single-news-actions/single-news-actions';

const SingleNews = props => {
  const { currentNews, originalUrl } = props
  return (
    <div className="container col-md-12 row single-card">
      <div className="card">
        <SingleNewsImage currentNews={currentNews} />
        <SingleNewsBody currentNews={currentNews} />
        <SingleNewsActions currentNews={currentNews} originalUrl={originalUrl} />
      </div>
    </div>
  );
}

export default SingleNews;