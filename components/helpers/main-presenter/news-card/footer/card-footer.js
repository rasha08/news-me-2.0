const formatDate = date => (date ? date.slice(0, 10) : '');

const CardFooter = props => {
  const { publishedAt } = props.news;

  return (
    <div className='card-footer'>
      <div className='date'>
        <span>
          <p>{formatDate(publishedAt)}</p>
        </span>
      </div>
      <div className='card-icons'>
        <i className='far fa-heart' />
        <i className='far fa-comments' />
        <i className='fas fa-share-alt' />
      </div>
    </div>
  );
};

export default CardFooter;
