const NavigationItem = props => {
  const { category } = props;
  const getNewsCategoryIconName = categorySlug => {
    switch (categorySlug) {
      case 'entertainment-news':
        return 'fas fa-lg fa-theater-masks';
      case 'business-news':
        return 'fas fa-lg fa-suitcase';
      case 'fa-laptop':
        return 'fas fa-lg important_devices';
      case 'fa-futbol':
        return 'fas fa-lg directions_bike';
      case 'life-health-fitnes-news':
        return 'fas fa-lg fa-weight';
      case 'programming-news':
        return 'fas fa-lg fa-keyboard ';
      case 'cryptocurrency-news':
        return 'fas fa-lg fa-dollar-sign';

      default:
        return 'fas fa-lg fa-globe-europe';
    }
  };
  return (
    <li className='nav-item'>
      <a className='nav-link active' href={`/today-news/${category.slug}`}>
        <span className='category'> {category.name} </span>
        <i className={getNewsCategoryIconName(category.slug)} />
      </a>
    </li>
  );
};

export default NavigationItem;
