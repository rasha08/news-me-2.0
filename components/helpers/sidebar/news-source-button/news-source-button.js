const NewsSourceButton = (props) => {
  const { source } = props;
  return (
    <a href={`/today-news/news-source/${source.slug}`} className="button" title={source.title}>
      <span>{source.title}</span>
    </a>
  )
}

export default NewsSourceButton;