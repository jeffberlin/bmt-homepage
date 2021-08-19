import React from 'react';
import { Col } from 'react-bootstrap';
// import Modal from 'react-bootstrap/Modal';

function AdvancedTier() {
	return (
		<Col>
			{/* <div class="corner-ribbon bottom-left sticky orange">Most Popular</div> */}
			<div class="ribbon ribbon-top-right"><span>Most Popular</span></div>
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
	      </div>
				<a className="text-center" href="https://vendors.bmtmicro.com/new-vendor-signup.jsp" target="_blank" rel="noreferrer">
          <div className="tier-btn advanced-btn">
            Sign up for free&nbsp;&nbsp;<i className="fas fa-arrow-right"></i>
          </div>
        </a>
	      {/*<div className="tier-btn text-center">
	        <a className="signup-btn" href="https://vendors.bmtmicro.com/new-vendor-signup.jsp" target="_blank" rel="noreferrer">Sign up for free!</a>
	      </div>*/}
			</div>
		</Col>
	);
}

export default AdvancedTier;
