import { truncate } from 'lodash';

const CardContent = props => {
  const { title, description, urlToImage } = props.news;
  const formatEntity = entity =>
    truncate(entity, { length: 70, separator: ' ' });
  return (
    <div className="card-body">
      <div className="img-container">
        <img data-src={urlToImage} alt={title} title={title} className="img" />
      </div>
      <h5 className="card-title align-text-bottom">{formatEntity(title)}</h5>
    </div>
  );
};

export default CardContent;
