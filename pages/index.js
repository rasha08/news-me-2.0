import { createTextVNode, render, Component } from 'inferno';
import { renderenderToString } from 'inferno-server';

import CustomHead from '../components/base-layout-components/head/head'
import Header from '../components/base-layout-components/header/header';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  render() {
    return (
      <div>
        <CustomHead title={' News Me Next JS app '} />
        <Header /> 
        
      </div>
    );
  }
}


export default () => new MyComponent