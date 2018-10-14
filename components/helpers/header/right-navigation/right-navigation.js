import { get } from 'lodash';

const RightNavigation = (props) => {
  const { openModal, user, logout, websiteConfiguration, showRightNavigation } = props;
  const { registrationEnabled, loginEnabled } = websiteConfiguration;
  return (
    <ul className="navigation-right">
      {
        showRightNavigation ?  
          user ?
            <div>
              <li><a onClick={() => openModal('registration')}>My Account</a></li>
              <li><a onClick={() => logout()}>logout</a></li>
            </div> :
            <div>
              <li><a onClick={() => openModal('registration')}>Sign in</a></li>
              <li><a onClick={() => openModal('login')}>login</a></li>
            </div> :
          <div />
      }
    </ul>
  );
}

export default RightNavigation;

