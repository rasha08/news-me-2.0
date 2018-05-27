import { Component } from 'react';

// import BaseLayout from '../../components/base-layout-components/base-layout/base-layout';

class MyComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>
          <h1>KOJI KURAC</h1>
       </div>
      </div>
    );
  }
}


export default () => new MyComponent