
import { get } from 'lodash';
import CustomHead from '../head/head';
import Header from '../header/header'
import Head from '../head/head';
import Sidebar from '../sidebar/sidebar';
import MainPresenter from '../main-presenter/main-presenter';

const BaseLayout = (props) => {
  const { navigation, sources, websiteConfiguration, newsCategory, currentNews, originalUrl } = props.data;
  return (
    <div>
      <CustomHead />

      <Header navigation={navigation} />
      
      <Sidebar sources={sources} currentCategory={get(newsCategory,'categoryName')}/>
      
      <MainPresenter
        newsCategory={newsCategory}
        currentNews={currentNews}
        currentCategory={get(newsCategory, 'categoryName')}
        originalUrl={originalUrl}
      />
    </div>
  )  
}

export default BaseLayout