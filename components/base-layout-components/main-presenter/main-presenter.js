import { map, get } from 'lodash';
import NewsCards from '../../helpers/main-presenter/news-cards/news-cards'
import SingleNews from '../../helpers/main-presenter/single-news/single-news';

const MainPresenter = props => {
  const { news } = props.newsCategory || [];
  const { currentNews, currentCategory, originalUrl } = props;

  return (
    <section id="boxes" className={currentNews ? 'single-news mobcards' : 'mobcards'}>
      {
        currentNews ?
          <SingleNews currentNews={currentNews} originalUrl={originalUrl} /> :
          <NewsCards news={news} currentCategory={currentCategory} /> 
      }
    </section>
  );
}

export default MainPresenter;