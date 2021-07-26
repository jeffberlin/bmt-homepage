import React from 'react';
import Modal from 'react-bootstrap/Modal';

function BasicTier() {
  return (
    <div className="tier">
      <div className="tier-header text-center">
        <h4>Basic Tier</h4>
      </div>
      <div className="tier-rate text-center">
        <p>8.9% flat or 5.9% + $1</p>
      </div>
      <div className="tier-text text-center">
        <p>All orders online (no phone support, demo hosting, or mail/fax orders)</p>
        <hr />
        <p>No virtual products</p>
        <hr />
        <p>No purchase orders</p>
        <hr />
        <p>Downloadable or generated key fulfillment (by BMT only)</p>
        <hr />
        <p>Receive your payment in USD</p>
        <hr />
        <p>Accept payments in more than 30 currencies</p>
        <hr />
        <p>Shopping cart in multiple languages</p>
        <hr />
        <p>&nbsp;</p>
        <hr />
        <p>paysafecard – 20% per transaction</p>
        <hr />
        <p>* Minimum Fee - $1.25</p>
        <hr />
      </div>
      <div className="tier-btn text-center">
        <a className="signup-btn" href="https://vendors.bmtmicro.com/new-vendor-signup.jsp" target="_blank" rel="noreferrer">Sign up for free!</a>
      </div>
    </div>
  );
}

export default BasicTier;
