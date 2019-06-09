const CardHeader = props => {
  const { source, publishedAt } = props.news;

  return (
    <div className='card-header'>
      <h6>{source}</h6>
    </div>
  );
};

export default CardHeader;
