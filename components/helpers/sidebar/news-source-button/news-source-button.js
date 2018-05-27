const NewsSourceButton = (props) => {
  const { source } = props;
  return (
    <a href={`news-source/${source.slug}`} className="button"><span>{source.title}</span></a>
  )
}

export default NewsSourceButton;