import CustomHead from '../head/head';
import Header from '../header/header'
import Head from '../head/head';
import Sidebar from '../sidebar/sidebar';
import MainPresenter from '../main-presenter/main-presenter';

const BaseLayout = (props) => {
  const { navigation, sources, websiteConfiguration, newsCategory } = props.data;
  return (
    <div>
      <CustomHead />

      <Header navigation={navigation} />
      
      <Sidebar sources={sources} />
      
      <MainPresenter newsCategory={newsCategory} />
    </div>
  )  
}

export default BaseLayout