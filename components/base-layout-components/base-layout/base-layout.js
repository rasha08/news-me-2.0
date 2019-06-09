import { get } from 'lodash';
import CustomHead from '../head/head';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import MainPresenter from '../main-presenter/main-presenter';
import ModalComponent from '../modal/modal';

const BaseLayout = props => {
  const {
    navigation,
    sources,
    websiteConfiguration,
    newsCategory,
    currentNews,
    originalUrl,
    modalTypeOpen,
    modalData,
    user,
    methods,
    showRightNavigation,
    sideMenuOpen
  } = props.data;
  return (
    <div className='container-fluid'>
      <CustomHead
        newsCategory={newsCategory}
        currentNews={currentNews}
        currentCategory={get(newsCategory, 'categoryName')}
        originalUrl={originalUrl}
      />

      <Header
        openModal={methods.openModal}
        logout={methods.logout}
        navigation={navigation}
        user={user}
        websiteConfiguration={websiteConfiguration}
        showRightNavigation={showRightNavigation}
        openSideMenu={methods.openSideMenu}
      />
      <div className='middle'>
        <div className='row '>
          <Sidebar
            sources={sources}
            sideMenuOpen={sideMenuOpen}
            currentCategory={get(newsCategory, 'categoryName')}
          />

          <MainPresenter
            newsCategory={newsCategory}
            currentNews={currentNews}
            currentCategory={get(newsCategory, 'categoryName')}
            originalUrl={originalUrl}
            {...user}
            {...methods}
          />
        </div>
      </div>

      <ModalComponent
        modalTypeOpen={modalTypeOpen}
        closeModal={methods.closeModal}
        submitModal={methods.submitModal}
        modalData={modalData}
      />
      <div id='footer'>
        <p>&copy; 2019 Smart Cat Solution</p>
      </div>
    </div>
  );
};

export default BaseLayout;
