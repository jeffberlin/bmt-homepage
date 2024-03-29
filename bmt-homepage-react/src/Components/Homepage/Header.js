import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Animated } from 'react-animated-css';
import { Link } from 'react-router-dom';

function Top() {
	return (
		<div className="main">
			<Container className="header-section">
				<Row className="justify-content-center align-items-center">
					<Col xl={6} lg={6} md={12} sm={12} className="header-hero">
						<Animated animationIn="slideInLeft" animationInDuration={2000}>
							<h1>Software distribution & order fullfilment</h1>
						</Animated>
						<Animated animationIn="fadeIn" animationInDuration={2000} animationInDelay={1500}>
							<p>Providing scalable services for online sales and digital delivery systems for developers and companies. Track your sales, product growth, and much more through our supplier portal.</p>
						</Animated>
						<Animated animationIn="fadeIn" animationInDuration={2000} animationInDelay={2000}>
							<div className="text-center">
								<Link
									to="/pricing"
									className="header-btn"
									style={{ backgroundColor: '#195a7c', color: '#ffffff' }}
								>
									Learn More
								</Link>
								<a
									href="https://vendors.bmtmicro.com/new-vendor-signup.jsp"
									target="_blank"
									className="header-btn"
									rel="noreferrer"
									style={{ backgroundColor: '#efa900', color: '#195a7c' }}
								>
									Sign Up&nbsp;
									<i className="fas fa-arrow-right"></i>
								</a>
							</div>
						</Animated>
					</Col>
					<Col xl={6} lg={6} md={12} sm={12} className="header-screenshots">
						<Animated animationIn="slideInRight" animationInDuration={2000}>
							<Image
								fluid
								src="https://www.bmtmicro.com/images/bmt-micro-home-screenshot-min.png"
								alt="BMT Micro cart/vendor screenshot"
								className="screenshot"
							/>
						</Animated>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Top;
