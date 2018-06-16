import LoginModal from './login/login-modal';
import RegisterModal from './register/register-modal';

const ModalBody = props => {
  const { modalTypeOpen, modalData } = props;
  return (
    <div className="modal-body">
      {
        modalTypeOpen === 'registration' ?
          <RegisterModal modalData={modalData} /> :
            modalTypeOpen === 'login' ?
              <LoginModal modalData={modalData} /> :
              <div />
      }
    </div>
  );
}

export default ModalBody;