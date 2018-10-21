const NavigationItem = props => {
  const { category } = props;
  const getNewsCategoryIconName = categorySlug => {
    switch (categorySlug) {
      case 'entertainment-news':
        return 'stars';
      case 'business-news':
        return 'work';
      case 'technology-news':
        return 'important_devices';
      case 'sport-news':
        return 'directions_bike';
      case 'life-health-fitnes-news':
        return 'fitness_center';
      case 'programming-news':
        return 'settings_ethernet';
      case 'cryptocurrency-news':
        return 'attach_money';

      default:
        return 'public';
    }
  };
  return (
    <li className="navigation-item">
      <a href={`/today-news/${category.slug}`}>
        {category.name}{' '}
        <i className="material-icons">
          {getNewsCategoryIconName(category.slug)}
        </i>
      </a>
    </li>
  );
};

export default NavigationItem;
