const SingleNewsImage = props => {
  const { urlToImage, title } = props.currentNews;
  const img = urlToImage || '/static/img/news-me.svg';
  return (
    <figure>
      <img
        className='card-img-top img img-responsive'
        data-src={img}
        alt={title}
        title={title}
      />
    </figure>
  );
};

export default SingleNewsImage;
