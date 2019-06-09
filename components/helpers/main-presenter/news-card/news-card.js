import CardContent from './content/card-content';
import CardHeader from './header/card-header';
import CardFooter from './footer/card-footer';

import { setLikedCssClassIfNeeded } from '../../../services/utils.service';

const NewsCard = ({ news, currentCategory, likedNews }) => {
  return (
    <article className='cards'>
      <div
        className={`${setLikedCssClassIfNeeded(
          news,
          likedNews
        )} card text-center`}
      >
        <CardHeader news={news} />
        <CardContent news={news} currentCategory={currentCategory} />
        <CardFooter news={news} currentCategory={currentCategory} />
      </div>
    </article>
  );
};

export default NewsCard;
