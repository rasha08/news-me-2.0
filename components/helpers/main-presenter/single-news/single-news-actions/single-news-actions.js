const SingleNewsActions = ({
  currentNews,
  originalUrl,
  addNewsToVisitedNews
}) => {
  const { url } = currentNews;
  originalUrl = originalUrl || '';

  const createBackLink = () =>
    originalUrl.slice(0, originalUrl.lastIndexOf('/'));

  return (
    <div className="card-body">
      <a href={createBackLink()} className="card-link">
        Go To Source Page
      </a>
      <a
        onClick={() => addNewsToVisitedNews(currentNews._id, true)}
        className="card-link"
      >
        Like
      </a>
      <a href={url} target="_blank" className="card-link">
        Visit Website
      </a>
    </div>
  );
};

export default SingleNewsActions;
