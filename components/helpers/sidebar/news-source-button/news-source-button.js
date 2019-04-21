const NewsSourceButton = props => {
  const { source, currentCategory } = props;
  return (
    <a
      href={`/today-news/${currentCategory}/${source.slug}`}
      className='button'
      title={source.title}
    >
      <span>{source.title}</span>
    </a>
  );
};

export default NewsSourceButton;
