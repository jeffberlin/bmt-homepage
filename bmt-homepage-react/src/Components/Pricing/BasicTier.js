import React from 'react';
import { Col, Modal } from 'react-bootstrap';

function BasicTier() {
  const [modalShow, basicModalShow] = React.useState(false);

  return (
    <Col style={{ marginBottom: '2.5rem' }}>
      <div className="tier basic-tier">
        <div className="tier-header text-center">
          <h4 style={{ color: '#efa900' }}>Basic Tier</h4>
        </div>
        <div className="tier-rate text-center">
          <p style={{ fontSize: '2rem', marginBottom: '0', color: '#000000' }}>8.9% flat</p>
          <p style={{ marginBottom: '0', color: '#707070', fontWeight: '400' }}>or</p>
          <p style={{ fontSize: '1.5rem', color: '#000000' }}>5.9% + $1</p>
        </div>
        <div className="tier-text">
          <ul>
            <li>&nbsp;&nbsp;Accept payments in 30+ currencies</li>
            <li>&nbsp;&nbsp;Shopping cart in multiple languages</li>
            <li>&nbsp;&nbsp;Downloadable or generated key fulfillment by BMT</li>
          </ul>
          <div className="text-center">
            <button className="modal-btn" onClick={() => basicModalShow(true)}>View All Features</button>
          </div>
        </div>
        <a className="text-center" href="https://vendors.bmtmicro.com/new-vendor-signup.jsp" target="_blank" rel="noreferrer">
          <div className="tier-btn basic-btn">
            Sign up for free&nbsp;&nbsp;<i className="fas fa-arrow-right"></i>
          </div>
        </a>
      </div>
      <BasicModal
        show={modalShow}
        onHide={() => basicModalShow(false)}
      />
    </Col>

  );
}

export default BasicTier;

function BasicModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Basic Tier features
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className="modal-text text-center">
          <li>All orders online (no phone support, demo hosting, or mail/fax orders)</li>
          <li>No virtual products</li>
          <li>No purchase orders</li>
          <li>Downloadable or generated key fulfillment (by BMT only)</li>
          <li>Receive your payment in USD</li>
          <li>Accept payments in 30+ currencies</li>
          <li>Shopping cart in multiple languages</li>
          <li>paysafecard - 20% per transaction</li>
          <li>* Minimum Fee - $1.25</li>
        </ul>
      </Modal.Body>
    </Modal>
  );
}


