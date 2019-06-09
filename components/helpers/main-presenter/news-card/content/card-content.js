import { kebabCase, truncate } from 'lodash';

const CardContent = props => {
  const { title, urlToImage, source, newsTitleSlug } = props.news;
  const { currentCategory } = props;
  const getUrl = () =>
    `/today-news/${currentCategory}/${kebabCase(source)}/${newsTitleSlug}`;

  const formatEntity = entity =>
    truncate(entity, { length: 100, separator: ' ' });
  return (
    <div className='card-content-wrapper'>
      <figure className='img-container'>
        <img data-src={urlToImage} alt={title} title={title} className='img' />
      </figure>
      <h3 className='card-content'>
        <a href={getUrl()}>{formatEntity(title)}</a>
      </h3>
    </div>
  );
};

export default CardContent;
