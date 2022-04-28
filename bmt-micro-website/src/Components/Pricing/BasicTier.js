import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import BasicModal from './BasicTierModal';

function BasicTier() {
  const [modalShow, basicModalShow] = useState(false);

  return (
    <Col xl={6} lg={6} style={{ marginBottom: '2.5rem' }}>
      <div className="tier basic-tier">
        <div className="tier-header text-center">
          <h4 style={{ color: '#efa900' }}>Basic Tier</h4>
        </div>
        <div className="tier-rate text-center">
          <p className="black-text top-rate">8.9% flat</p>
          <p className="middle-rate" style={{ color: '#707070' }}>or</p>
          <p className="black-text bottom-rate">5.9% + $1</p>
        </div>
        <div className="tier-text">
          <ul>
            <li>&nbsp;&nbsp;Accept payments in 30+ currencies</li>
            <li>&nbsp;&nbsp;Shopping cart in multiple languages</li>
            <li>&nbsp;&nbsp;Downloadable or generated key fulfillment by BMT</li>
          </ul>
          <div className="text-center">
            <button className="modal-btn" onClick={() => basicModalShow(true)}>View Plan Features</button>
          </div>
        </div>
        <a className="text-center" href="https://vendors.bmtmicro.com/new-vendor-signup.jsp" target="_blank" rel="noreferrer">
          <div className="tier-btn black-text basic-btn">
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
