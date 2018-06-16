import { getModalTitle } from '../../../services/modal-helper.service.js';

const ModalHeader = props => {
  const { modalTypeOpen, closeModal } = props;

  return (
    <div className="modal-header">
      <h5 className="modal-title">{ getModalTitle(modalTypeOpen) }</h5>
      <button type="button" className="close" aria-label="Close" onClick={() => closeModal()}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default ModalHeader;