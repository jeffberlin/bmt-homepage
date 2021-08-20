import React from 'react';
import { Col, Modal } from 'react-bootstrap';
// import Modal from 'react-bootstrap/Modal';

function AdvancedTier() {
	const [modalShow, advancedModalShow] = React.useState(false);

	return (
		<Col style={{ marginBottom: '2.5rem' }}>
			<div className="ribbon ribbon-top-right">
				<span>Most Popular</span>
			</div>
			<div className="tier advanced-tier">
				<div className="tier-header text-center">
	        <h4 style={{ color: '#ffffff' }}>Advanced Tier</h4>
	      </div>
	      <div className="tier-rate text-center">
	        <p style={{ fontSize: '2rem', marginBottom: '0' }}>9.5% flat</p>
	        <p style={{ marginBottom: '0', color: '#efa900', fontWeight: '400' }}>or</p>
	        <p style={{ fontSize: '1.5rem' }}>4.9% + $2</p>
	      </div>
	      <div className="tier-text">
	        <ul>
						<li>&nbsp;&nbsp;Vendor, remote or BMT fulfillment</li>
						<li>&nbsp;&nbsp;Shopping cart customized to your needs</li>
						<li>&nbsp;&nbsp;Purchase Orders</li>
					</ul>
					<div className="text-center">
            <button className="modal-btn" onClick={() => advancedModalShow(true)}>View All Features</button>
          </div>
	      </div>
				<a className="text-center" href="https://vendors.bmtmicro.com/new-vendor-signup.jsp" target="_blank" rel="noreferrer">
          <div className="tier-btn advanced-btn">
            Sign up for free&nbsp;&nbsp;<i className="fas fa-arrow-right"></i>
          </div>
        </a>
			</div>
			<AdvancedModal
        show={modalShow}
        onHide={() => advancedModalShow(false)}
      />
		</Col>
	);
}

export default AdvancedTier;

function AdvancedModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Advanced Tier features
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className="modal-text text-center">
          <li>Vendor, remote or BMT fulfillment</li>
          <li>Purchase orders</li>
          <li>Phone ordering (with live customer service representative)</li>
          <li>Mail/fax orders</li>
          <li>Receive your payment in USD</li>
          <li>Accept payments in 30+ currencies</li>
          <li>Shopping cart in multiple languages</li>
          <li>Shopping cart customized to your needs</li>
          <li>paysafecard - 20% per transaction</li>
          <li>* Minimum Fee - $1.25</li>
        </ul>
      </Modal.Body>
    </Modal>
  );
}