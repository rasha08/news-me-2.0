import CardContent from './content/card-content';
import CardHeader from './header/card-header';
import CardFooter from './footer/card-footer';

const NewsCard = props => {
  const { news, currentCategory } = props
  return (
    <div className="box col-md-3">
      <div className="card text-center">
        <CardHeader news={news} />
        <CardContent news={news} />
        <CardFooter news={news} currentCategory={currentCategory} />
      </div>
    </div>
  );
}

export default NewsCard;