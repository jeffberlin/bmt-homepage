import React from 'react';
import { Col } from 'react-bootstrap';
// import Modal from 'react-bootstrap/Modal';

function BasicTier() {
  return (
    <Col>
      <div className="tier basic-tier">
        <div className="tier-header text-center">
          <h4 style={{ color: '#efa900' }}>Basic Tier</h4>
        </div>
        <div className="tier-rate text-center">
          <p style={{ fontSize: '2rem', marginBottom: '0', color: '#000000' }}>8.9% flat</p>
          <p style={{ marginBottom: '0', color: '#707070', fontWeight: '400' }}>or</p>
          <p style={{ fontSize: '1.5rem', color: '#000000' }}>5.9% + $1</p>
        </div>
        <div className="tier-text ">
          <ul>
            <li>&nbsp;&nbsp;Accept payments in 30+ currencies</li>
            <li>&nbsp;&nbsp;Shopping cart in multiple languages</li>
            <li>&nbsp;&nbsp;Downloadable or generated key fulfillment by BMT</li>
          </ul>
        </div>
        <a className="text-center" href="https://vendors.bmtmicro.com/new-vendor-signup.jsp" target="_blank" rel="noreferrer">
          <div className="tier-btn basic-btn">
            Sign up for free&nbsp;&nbsp;<i className="fas fa-arrow-right"></i>
          </div>
        </a>
        {/* <div className="tier-btn text-center">
          <a className="signup-btn" href="https://vendors.bmtmicro.com/new-vendor-signup.jsp" target="_blank" rel="noreferrer">Sign up for free!</a>
        </div> */}
      </div>
    </Col>
  );
}

export default BasicTier;
