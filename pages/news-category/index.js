import { Component } from 'react';

import BaseLayout from '../../components/base-layout-components/base-layout/base-layout'
// import BaseLayout from '../../components/base-layout-components/base-layout/base-layout';

export default class MyComponent extends Component {
  static getInitialProps(serverData) {
    console.log(serverData.req)
    return {
      websiteConfiguration: serverData.query.websiteConfiguration,
      newsCategory: serverData.query.newsCategory,
      navigation: serverData.query.navigation,
      sources: serverData.query.sources,
      currentNews: serverData.query.currentNews,
      originalUrl: serverData.req.originalUrl
    };
  }

  constructor() {
    super();
  }

  render() {
    const { websiteConfiguration, newsCategory, navigation, sources, currentNews, originalUrl } = this.props;
    return (
      <div>
        <div>
          <BaseLayout
            data={{
              websiteConfiguration,
              newsCategory,
              navigation,
              sources,
              currentNews,
              originalUrl
            }}
          />
        </div>
       <script src="/static/js/custom.js"></script> 
      </div>
    );
  }
}
