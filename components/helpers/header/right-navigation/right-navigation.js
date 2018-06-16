const RightNavigation = (props) => {
  const { openModal, user, logout } = props;
  return (
    <ul className="navigation-right">
      {
        user ?
          <div>
            <li><a onClick={() => openModal('registration')}>My Account</a></li>
            <li><a onClick={() => logout()}>logout</a></li>
          </div> :
          <div>
            <li><a onClick={() => openModal('registration')}>Sign in</a></li>
            <li><a onClick={() => openModal('login')}>login</a></li>
          </div>
      }
    </ul>
  );
}

export default RightNavigation;

