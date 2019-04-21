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
    <ul className='open-news-icon'>
      <li className='home'>
        <a href='/'>
          <i className='fas fa-home' />
        </a>
      </li>
      <li className='like'>
        <a onClick={() => addNewsToVisitedNews(currentNews._id, true)}>
          <i className='far fa-heart' />
        </a>
      </li>
      <li className='comment'>
        <a>
          <i className='far fa-comments' />
        </a>
      </li>
      <li className='share'>
        <a href={createBackLink()}>
          <i className='fas fa-satellite-dish' />
        </a>
      </li>
      <li className='sorce'>
        <a href={url} target='_blank'>
          <i className='fas fa-external-link-alt' />
        </a>
      </li>
    </ul>
  );
};

export default SingleNewsActions;
