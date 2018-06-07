import { map } from 'lodash';
import NewsCard from '../news-card/news-card'

const NewsCards = (props) => {
  const { news, currentCategory } = props;
  return (
   <div className="container col-md-12 row">
      {
        map(news, singleNews => <NewsCard news={singleNews} key={singleNews._id} currentCategory={currentCategory} />)
      }
    </div>
  )
}

export default NewsCards