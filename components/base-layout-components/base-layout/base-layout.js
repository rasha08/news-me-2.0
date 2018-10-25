import { get } from 'lodash';
import CustomHead from '../head/head';
import Header from '../header/header';
import Head from '../head/head';
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
    <div>
      <CustomHead />

      <Header
        openModal={methods.openModal}
        logout={methods.logout}
        navigation={navigation}
        user={user}
        websiteConfiguration={websiteConfiguration}
        showRightNavigation={showRightNavigation}
        openSideMenu={methods.openSideMenu}
      />

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

      <ModalComponent
        modalTypeOpen={modalTypeOpen}
        closeModal={methods.closeModal}
        submitModal={methods.submitModal}
        modalData={modalData}
      />
    </div>
  );
};

export default BaseLayout;
