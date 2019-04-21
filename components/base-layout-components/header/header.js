import MenuButton from '../../helpers/header/menu-button/menu-button';
import RightNavigation from '../../helpers/header/right-navigation/right-navigation';
import MainNavigation from '../../helpers/header/main-navigation/main-navigation';

const Header = ({
  navigation,
  openModal,
  user,
  logout,
  websiteConfiguration,
  showRightNavigation,
  openSideMenu
}) => {
  return (
    <div>
      <div id='header'>
        <div className='row align-items-center'>
          <div className='col-lg-5 col-md-6 col-sm-6 col-xs-6'>
            <MenuButton openSideMenu={openSideMenu} />
            <a href='/' className='logo' id='logo' />
          </div>

          <RightNavigation
            openModal={openModal}
            logout={logout}
            user={user}
            websiteConfiguration={websiteConfiguration}
            showRightNavigation={showRightNavigation}
          />
        </div>
      </div>
      <MainNavigation navigation={navigation} />
    </div>
  );
};

export default Header;
