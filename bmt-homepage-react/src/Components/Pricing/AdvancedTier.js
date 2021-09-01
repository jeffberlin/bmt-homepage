import React from 'react';
import { Col, Modal } from 'react-bootstrap';

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
  const features = [
    "Vendor, remote or BMT fulfillment",
    "Purchase orders",
    "Phone ordering (with live customer service representative)",
    "Mail/fax orders",
    "Receive your payment in USD",
    "Accept payments in 30+ currencies",
    "Shopping cart in multiple languages",
    "Shopping cart customized to your needs",
    "paysafecard - 20% per transaction",
    "* Minimum Fee - $1.25"
  ]

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
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </Modal.Body>
    </Modal>
  );
}