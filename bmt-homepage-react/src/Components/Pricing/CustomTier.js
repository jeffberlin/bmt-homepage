import React from 'react';
import { Col } from 'react-bootstrap';

function CustomTier() {
	return (
		<Col xl={8}>
			<div className="tier custom-tier">
			 <div className="tier-header text-center">
	        <h4 style={{ color: '#195a7c' }}>Custom Tier</h4>
	      </div>
				<div className="tier-rate text-center">
	        <p style={{ fontSize: '2rem', marginBottom: '0', color: '#000000' }}>Contact BMT</p>
	        <p style={{ marginBottom: '0', color: '#efa900', fontWeight: '400' }}>for</p>
	        <p style={{ fontSize: '1.5rem', color: '#000000' }}>Add-On Pricing</p>
	      </div>
				<div className="tier-text">
	        <ul>
						<li>&nbsp;&nbsp;Advanced custom programming</li>
						<li>&nbsp;&nbsp;Marketing services and promoting Vendor products</li>
						<li>&nbsp;&nbsp;Micro-transaction processing</li>
						<li className="blue-arrow">&nbsp;&nbsp;Need a service that is not listed? Contact us! We can customize our plans to suit your business needs.</li>
					</ul>
	      </div>
				<a className="text-center" href="mailto:vendors@bmtmicro.com?subject=New Vendor Custom Tier" target="_top">
          <div className="tier-btn custom-btn">
            Contact Us&nbsp;&nbsp;<i className="fas fa-arrow-right"></i>
          </div>
        </a>
			</div>
		</Col>
	);
}

export default CustomTier;
