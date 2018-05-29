import { kebabCase } from 'lodash';

const CardHeader = props => {
  const { source, publishedAt } = props.news;
  const formatDate = (date) => date ? date.slice(0, 10) : ''
  return (
    <div className="card-header">
      <span className="time">{formatDate(publishedAt)} </span>
      <span className="source-name"> {source} </span>
      <span className="source-logo" className={kebabCase(source)}></span>
    </div>
  );
}

export default CardHeader;