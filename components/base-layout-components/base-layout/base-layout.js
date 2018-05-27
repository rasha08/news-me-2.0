import CustomHead from '../head/head';
import Header from '../header/header'
import Head from '../head/head';
import Sidebar from '../sidebar/sidebar';

const BaseLayout = (props) => {
  const { navigation, sources, websiteConfiguration, newsCategory } = props.data;
  return (
    <div>
      {
        <CustomHead />
      }
      {/* <CustomHead title={props.title} /> */}
      <Header navigation={navigation} />
      {
        <Sidebar sources={sources} />
      }
      <p>{JSON.stringify(websiteConfiguration)} </p>
    </div>
  )  
}

export default BaseLayout