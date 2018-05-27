const NavigationItem = props => {
  const { category } = props
  return (
    <li className={category.slug} >
      <a href={`/news-category/${category.slug}`}>
        {category.name}
      </a>
    </li>    
  );
}

export default NavigationItem;