const SingleNewsActions = props => {
  const { url, title } = props.currentNews;
  const originalUrl = props.originalUrl || '';
  const createBackLink = () => originalUrl.slice(0, originalUrl.lastIndexOf('/'))

  return (
    <div className="card-body">
      <a href={createBackLink()} className="card-link">Go Back</a>
      <a href={url} target="_blank" className="card-link">Visit News Website</a>
    </div>
  );
}

export default SingleNewsActions;