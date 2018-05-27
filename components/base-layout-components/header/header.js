import MenuButton from '../../helpers/header/menu-button/menu-button';
import RightNavigation from '../../helpers/header/right-navigation/right-navigation';
import MainNavigation from '../../helpers/header/main-navigation/main-navigation';

const Header = (props) => {
  const { navigation } = props;
  return (
    <header>
      <div className="container">
        <nav>
          <MenuButton />
          <a href="/" className="logo" id="logo"></a>
          <MainNavigation navigation={navigation} />
          <RightNavigation />      
        </nav>
      </div>
    </header>
  )
}

export default Header;
