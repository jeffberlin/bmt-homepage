import Col from 'react-bootstrap/Col';

function CustomTier() {
	return (
		<Col xl={8} style={{ marginBottom: '2.5rem' }}>
			<div className="tier custom-tier">
			 <div className="tier-header text-center">
	        <h4 style={{ color: '#195a7c' }}>Custom Tier</h4>
	      </div>
				<div className="tier-rate text-center">
	        <p className="black-text top-rate">Contact BMT</p>
	        <p className="middle-rate" style={{ color: '#efa900' }}>for</p>
	        <p className="black-text bottom-rate">Add-On Pricing</p>
	      </div>
				<div className="tier-text">
	        <ul>
						<li>&nbsp;&nbsp;Advanced custom programming</li>
						<li>&nbsp;&nbsp;Marketing services and promoting Supplier products</li>
						<li>&nbsp;&nbsp;Micro-transaction processing</li>
						<li className="blue-arrow">&nbsp;&nbsp;Need a service that is not listed? Contact us! We can customize our plans to suit your business needs.</li>
					</ul>
	      </div>
				<a className="text-center" href="mailto:vendors@bmtmicro.com?subject=New Vendor Custom Tier" target="_top">
          <div className="tier-btn black-text custom-btn">
            Contact Us&nbsp;&nbsp;<i className="fas fa-arrow-right"></i>
          </div>
        </a>
			</div>
		</Col>
	);
}

export default CustomTier;
