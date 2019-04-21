import { kebabCase, truncate } from 'lodash';

const CardContent = props => {
  const { title, urlToImage, source, newsTitleSlug } = props.news;
  const { currentCategory } = props;
  const getUrl = () =>
    `/today-news/${currentCategory || category}/${kebabCase(
      source
    )}/${newsTitleSlug}`;

  const formatEntity = entity =>
    truncate(entity, { length: 100, separator: ' ' });
  return (
    <div className='card-content-wrapper'>
      <div className='img-container'>
        <img data-src={urlToImage} alt={title} title={title} className='img' />
      </div>
      <div className='card-content'>
        <a href={getUrl()}>{formatEntity(title)}</a>
      </div>
    </div>
  );
};

export default CardContent;
