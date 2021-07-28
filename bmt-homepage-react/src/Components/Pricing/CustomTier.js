import React from 'react';
import { Col } from 'react-bootstrap';

function CustomTier() {
	return (
		<Col xl={8}>
			<div className="tier custom-tier">
			 <div className="tier-header text-center">
	        <h4 style={{ color: '#195a7c' }}>Custom Tier</h4>
	      </div>
	      <div className="tier-text text-center">
	        <p>Contact us for pricing and add-ons</p>
	      </div>
	      {/*<div className="tier-btn text-center">
	        <a className="signup-btn" href="https://vendors.bmtmicro.com/new-vendor-signup.jsp" target="_blank" rel="noreferrer">Sign up for free!</a>
	      </div>*/}
			</div>
		</Col>
	);
}

export default CustomTier;