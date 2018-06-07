const SingleNewsImage = props => {
  const { urlToImage, title } = props.currentNews;
  const img = urlToImage || '/static/img/news-me.svg'
  return (
    <img className="card-img-top" data-src={img} alt={title} title={title} /> 
  );
}

export default SingleNewsImage;