import { map, get } from 'lodash';
import NewsCards from '../../helpers/main-presenter/news-cards/news-cards';
import SingleNews from '../../helpers/main-presenter/single-news/single-news';

const MainPresenter = ({
  currentNews,
  currentCategory,
  originalUrl,
  newsCategory,
  detectChanges
}) => {
  const { news } = newsCategory || [];
  return (
    <section
      id="boxes"
      className={currentNews ? 'single-news mobcards' : 'mobcards'}
    >
      {currentNews ? (
        <SingleNews currentNews={currentNews} originalUrl={originalUrl} />
      ) : (
        <NewsCards
          news={news}
          currentCategory={currentCategory}
          detectChanges={detectChanges}
          originalUrl={originalUrl}
        />
      )}
    </section>
  );
};

export default MainPresenter;
