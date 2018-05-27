import { map } from 'lodash';
import NavigationItem from '../navigation-item/navigation-item';

const MainNavigation = props => {
  const { navigation } = props;
  return (
    <ul className="navigation-main">
      {map(navigation, category => <NavigationItem category={category} key={category.slug}/>) }
    </ul>
  );
}

export default MainNavigation