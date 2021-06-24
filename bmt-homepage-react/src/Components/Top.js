import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Animated } from 'react-animated-css';

function Top() {
	return (
		<div className="main">
			<Container className="header-section">
				<Row className="justify-content-center">
					<Col xl={6} lg={6}>
							<Animated animationIn="slideInLeft" animationInDuration={2000} isVisible={true}>
								<h1>Software distribution & order fullfilment</h1>
							</Animated>
							<Animated animationIn="slideInLeft" animationInDuration={2000} animationInDelay={2000}>
								<p>Using our dashboard, you can track your sales, product growth, and much more.</p>
							</Animated>
							<div className="text-center">
								<Button className="header-btn" style={{ backgroundColor: '#195a7c' }}>Learn More</Button>
								<Button className="header-btn" style={{ backgroundColor: '#efa900', color: '#195a7c' }}>Sign Up</Button>
							</div>
						</Col>
						<Col xl={6} lg={6}>
							<Image
								fluid
								src="./images/bmt-image-new.png"
								alt="BMT Micro cart/vendor screenshot"
								className="screenshot"
							/>
						
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Top;