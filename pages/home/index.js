import { Component } from 'react';

import BaseLayout from '../../components/base-layout-components/base-layout/base-layout'
// import BaseLayout from '../../components/base-layout-components/base-layout/base-layout';

export default class MyComponent extends Component {
  static getInitialProps(serverData) {
    return {
      websiteConfiguration: serverData.query.websiteConfiguration,
      newsCategory: serverData.query.newsCategory,
      navigation: serverData.query.navigation,
      sources: serverData.query.sources
    };
  }

  constructor() {
    super();
  }

  render() {
    const { websiteConfiguration, newsCategory, navigation, sources } = this.props;
    return (
      <div>
        <div>
          <BaseLayout
            data={{
              websiteConfiguration,
              newsCategory,
              navigation,
              sources
            }}
          />
       </div>
      </div>
    );
  }
}
