import { map, get } from 'lodash';
import NewsCard from '../../helpers/main-presenter/news-card/news-card';

const MainPresenter = props => {
  const { news } = props.newsCategory || [];
  
  return(
   <section id="boxes" className="mobcards">
      <div className="container col-md-12 row">
        {
          map(news, singleNews => <NewsCard news={singleNews} key={singleNews._id}/>)
        }
      </div>
    </section>
  );
}

export default MainPresenter;