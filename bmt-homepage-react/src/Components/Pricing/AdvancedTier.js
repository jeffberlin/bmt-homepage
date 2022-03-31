import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import AdvancedModal from './AdvancedTierModal';


function AdvancedTier() {
	const [modalShow, advancedModalShow] = useState(false);

	return (
		<Col xl={6} lg={6} style={{ marginBottom: '2.5rem' }}>
			<div className="ribbon ribbon-top-right">
				<span>Most Popular</span>
			</div>
			<div className="tier advanced-tier">
				<div className="tier-header text-center">
	        <h4 style={{ color: '#fff' }}>Advanced Tier</h4>
	      </div>
	      <div className="tier-rate text-center">
	        <p className="top-rate">9.5% flat</p>
	        <p className="middle-rate" style={{ color: '#efa900' }}>or</p>
	        <p className="bottom-rate">4.9% + $2</p>
	      </div>
	      <div className="tier-text">
	        <ul>
						<li>&nbsp;&nbsp;Vendor, remote or BMT fulfillment</li>
						<li>&nbsp;&nbsp;Shopping cart customized to your needs</li>
						<li>&nbsp;&nbsp;Purchase Orders</li>
					</ul>
					<div className="text-center">
            <button className="modal-btn" onClick={() => advancedModalShow(true)}>View Plan Features</button>
          </div>
	      </div>
				<a className="text-center" href="https://vendors.bmtmicro.com/new-vendor-signup.jsp" target="_blank" rel="noreferrer">
          <div className="tier-btn black-text advanced-btn">
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
