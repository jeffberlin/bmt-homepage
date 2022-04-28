import Modal from 'react-bootstrap/Modal';
import features from './AdvancedTierArray';

function AdvancedModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="black-text" id="contained-modal-title-vcenter">
          Advanced Tier features
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className="modal-text text-center">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </Modal.Body>
    </Modal>
  );
}

export default AdvancedModal;
