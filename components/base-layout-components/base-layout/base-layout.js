import CustomHead from '../head/head';
import Header from '../header/header'


const BaseLayout = (props) => 
  <div>
    <CustomHead title={props.title} />
    <Header /> 
    { props.Sidebar ? props.Sidebar : `` }
    { props.component ? props.component : `` }
  </div>

export default BaseLayout