import { get } from 'lodash';

const RightNavigation = props => {
  const { openModal, user, logout, showRightNavigation } = props;
  return (
    <div className='col-lg-7 col-md-6 col-sm-6 col-xs-6'>
      {showRightNavigation ? (
        user ? (
          <div className='sign-in-login'>
            <button onClick={() => logout()}>Logout</button>
          </div>
        ) : (
          <div className='sign-in-login'>
            <button onClick={() => openModal('registration')}>Register</button>

            <button onClick={() => openModal('login')}>Login</button>
          </div>
        )
      ) : (
        <div />
      )}
    </div>
  );
};

export default RightNavigation;
