import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Customers() {
	return (
		<div className="body-content">
			<div className="wrapper">
				<h1>Customers</h1>
			</div>
			<Container className="customers">
				<Row className="justify-content-center">
					<Col xl={12} lg={12} md={12} sm={12}>
						<p>If BMT Micro appears on your debit or credit card statement, this indicates that you have purchased an item through the BMT Micro order system on the internet.</p>
						<p>We represent a large number of software vendors on the internet and it is possible that you have not visited our site, but you have been billed by BMT Micro on behalf of one of our software vendors. You should have received an email message at the time of purchase containing your receipt and other information pertaining to the order. You can find additional information at <a href="http://info.bmtmicro.com/" target="_blank" rel="noreferrer">info.bmtmicro.com</a>.</p>
					</Col>
					<Col xl={12} lg={12} md={12} sm={12}>
						<p style={{ fontWeight: '400', textAlign: 'center' }}>If you have a technical question about the software you purchased, <u>please contact the Vendor</u>.</p>
						<p style={{ fontWeight: '400', textAlign: 'center' }}>For Customer Login, please visit <a href="https://customers.bmtmicro.com/" target="_blank" rel="noreferrer">customers.bmtmicro.com</a>.</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Customers;