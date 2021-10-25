import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AboutSection() {
	return (
		<div className="about-home">
			<Container fluid>
				<Row className="justify-content-center">
					<h2 className="text-center">About BMT Micro</h2>
				</Row>
				<Row className="justify-content-center">
					<Col xl={6} lg={8} md={12} sm={12}>
						<p>BMT Micro is a software distribution and order fulfillment service for software developers worldwide. If BMT Micro appears on your debit or credit card statement, this indicates that you have purchased an item through the BMT Micro order system. We represent a large number of software vendors on the internet and it is possible that you have not visited our site, but you have been billed by BMT Micro on behalf of one of our software vendors. You should have received an email message at the time of purchase containing your receipt and other information pertaining to the order.</p>
					</Col>
					<Col xl={4} lg={4}>
						<h5>Customer Service Information</h5>
						<p>
							<i className="fas fa-phone-alt"></i>
							<a href="tel:+18004144268" alt="phone" title="Call us">1-800-414-4268</a>
						</p>
						<p>
							<i className="fas fa-location-arrow"></i>
							P.O. Box 15016 Wilmington, NC 28408 USA
						</p>
						<p>
							<i className="fas fa-envelope"></i>
							<a href="mailto:cservice@bmtmicro.com" alt="email" title="Email Us">cservice@bmtmicro.com</a>
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default AboutSection;