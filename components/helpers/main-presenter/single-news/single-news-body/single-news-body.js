const SingleNewsBody = props => {
  const { description, title } = props.currentNews;
  return (
    <div className='card-body'>
      <h1 className='card-title'>{title}</h1>
      <h6 className='card-text'>{description}</h6>
    </div>
  );
};

export default SingleNewsBody;
