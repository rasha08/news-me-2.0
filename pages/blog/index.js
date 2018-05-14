import { createTextVNode, render, Component } from 'inferno';
import { renderenderToString } from 'inferno-server';

import BaseLayout from '../../components/base-layout-components/base-layout/base-layout';

class MyComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <BaseLayout title={'OVO JE KITA Index'} />
      </div>
    );
  }
}


export default () => new MyComponent