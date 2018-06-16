import { getModalCssClass } from '../../services/modal-helper.service';
import ModalHeader from '../../helpers/modals/modal-header/modal-header';
import ModalFooter from '../../helpers/modals/modal-footer/modal-footer';
import ModalBody from '../../helpers/modals/modal-body/modal-body';


const ModalComponent = props => {
  const { modalTypeOpen, closeModal, submitModal, modalData } = props;
  return (
    <div className={getModalCssClass(modalTypeOpen)} id="modal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">

            <ModalHeader
              modalTypeOpen={modalTypeOpen}
              closeModal={closeModal}
            />

            <ModalBody
              modalTypeOpen={modalTypeOpen}
              modalData={modalData}
            />

            <ModalFooter
              modalTypeOpen={modalTypeOpen}
              closeModal={closeModal}
              submitModal={submitModal}
            />

          </div>
        </div>
      </div>
  )
}

export default ModalComponent;