import React from 'react';
import { Col } from 'react-bootstrap';

function AdvancedTier() {
	return (
		<Col>
			<div className="tier advanced-tier">
			 <div className="tier-header text-center">
	        <h4 style={{ color: '#ffffff' }}>Advanced Tier</h4>
	      </div>
	      <div className="tier-rate text-center">
	        <p>9.5% flat or 4.9% + $2</p>
	      </div>
	      <div className="tier-text text-center">
	        <p>Vendor, remote or BMT fulfillment</p>
	        <hr />
	        <p>Virtual Products</p>
	        <hr />
	        <p>Purchase orders</p>
	        <hr />
	        <p>Phone ordering (with live customer service representative)</p>
	        <hr />
	        <p>Mail/fax orders</p>
	        <hr />
	        <p>Accept payments in more than 30 currencies</p>
	        <hr />
	        <p>Shopping cart in multiple languages</p>
	        <hr />
	        <p>Shopping cart customized to your needs</p>
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
		</Col>
	);
}

export default AdvancedTier;
