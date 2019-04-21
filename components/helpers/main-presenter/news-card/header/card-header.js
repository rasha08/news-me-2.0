const CardHeader = props => {
  const { source, publishedAt } = props.news;

  return (
    <div className='card-header'>
      <p>{source}</p>
    </div>
  );
};

export default CardHeader;
