import { kebabCase } from 'lodash';


const CardFooter = props => {
  const { source, newsTitleSlug, category } = props.news
  const { currentCategory } = props
  const getUrl = () => `/today-news/${currentCategory || category}/${kebabCase(source)}/${newsTitleSlug}`;

  return (
    <div className="card-footer text-muted">
      <a href={getUrl()} className="btn btn-primary">Open News</a>
    </div>
  );
}

export default CardFooter