import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Animated } from 'react-animated-css';
import { Link } from 'react-router-dom';

function Top() {
	return (
		<div className="main">
			<Container className="header-section">
				<Row className="justify-content-center align-items-center">
					<Col xl={6} lg={6}>
						<Animated animationIn="slideInLeft" animationInDuration={2000}>
							<h1>Software distribution & order fullfilment</h1>
						</Animated>
						<Animated animationIn="fadeIn" animationInDuration={2000} animationInDelay={1500}>
							<p>Using our dashboard, you can track your sales, product growth, and much more.</p>
						</Animated>
						<Animated animationIn="fadeIn" animationInDuration={2000} animationInDelay={2000}>
							<div className="text-center">
								<button className="header-btn" style={{ backgroundColor: '#195a7c', marginRight: '1.2rem', color: '#ffffff' }} type="button"><Link to="/signup" style={{ color: 'inherit' }}>Learn More</Link></button>
								<button className="header-btn" style={{ backgroundColor: '#efa900', color: '#195a7c' }} type="button"><a href="https://vendors.bmtmicro.com/new-vendor-signup.jsp" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>Sign Up&nbsp;<i className="fas fa-arrow-right"></i></a></button>
							</div>
						</Animated>
					</Col>
					<Col xl={6} lg={6}>
						<Animated animationIn="slideInRight" animationInDuration={2000}>
							<Image
								fluid
								src="./images/bmt-image-new.png"
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
