const CardFooter = props => {
  const { url, source } = props.news
  return (
    <div className="card-footer text-muted">
      <a href={url} target="_blank" className="btn btn-primary">Go to {source}</a>
    </div>
  );
}

export default CardFooter