import { getModalButtonLabel } from '../../../services/modal-helper.service.js';

const ModalFooter = props => {
  const { modalTypeOpen, submitModal, closeModal } = props;
  const modalAction = () =>
    modalTypeOpen === 'alert' ? closeModal() : submitModal(modalTypeOpen);

  return (
    <div className='modal-footer'>
      <a className='button' onClick={() => modalAction()}>
        {getModalButtonLabel(modalTypeOpen)}
      </a>
    </div>
  );
};

export default ModalFooter;
