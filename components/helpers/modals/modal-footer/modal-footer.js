import { getModalButtonLabel } from '../../../services/modal-helper.service.js';

const ModalFooter = props => {
  const { modalTypeOpen, submitModal, closeModal } = props;
  const modalAction = () => (modalTypeOpen === 'alert') ? closeModal() : submitModal(modalTypeOpen);

  return (
    <div className="modal-footer">
      <button className="btn btn-primary" onClick={() => modalAction()}>
        {getModalButtonLabel(modalTypeOpen)}
      </button>
    </div>
  );
}

export default ModalFooter;