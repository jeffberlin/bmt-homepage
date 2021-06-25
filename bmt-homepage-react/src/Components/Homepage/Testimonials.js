import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

function Testimonials() {
	return (
		<div className="testimonials">
			<Container>
				<Row className="justify-content-center align-items-center">
					<Col xl={6} lg={6} md={12} sm={12}>
						<Carousel
							controls={false}
							indicators={false}
						>
							<Carousel.Item interval={6500}>
								<p style={{ marginBottom: '.5rem' }}>
									<em>
										"It’s extremely low-friction. Sign up for an account, add products, add serial numbers, add payment links to your website and you’re done. Checks come once a month like clockwork. Much easier than Paypal and reduces the headaches."
									</em>
								</p>
								<p style={{ textAlign: 'center', marginBottom: '0' }}>
									<strong>
										-&nbsp;Kevin W.
									</strong>
								</p>
							</Carousel.Item>
							<Carousel.Item interval={6500}>
								<p style={{ marginBottom: '.5rem' }}>
									<em>
										"BMT Micro on the other hand are a joy to work with and they treat customers like royalty... quick support and they are happy to go the extra mile. Highly recommended."
									</em>
								</p>
								<p style={{ textAlign: 'center', marginBottom: '0' }}>
									<strong>
										-&nbsp;Frank R.
									</strong>
								</p>
							</Carousel.Item>
							<Carousel.Item interval={6500}>
								<p style={{ marginBottom: '.5rem' }}>
									<em>
										"BMT Micro, and you’ll never look back. Outstanding support, always above and beyond the call of duty. Been with them for over 10 years and I ain’t changing for anything. Some things simply have no price... They are extremely professional and, above all, very friendly."
									</em>
								</p>
								<p style={{ textAlign: 'center', marginBottom: '0' }}>
									<strong>
										-&nbsp;Jorge C.
									</strong>
								</p>
							</Carousel.Item>
							<Carousel.Item interval={6500}>
								<p style={{ marginBottom: '.5rem' }}>
									<em>
										"As a consumer, I'd much rather see indie devs using BMT Micro – simply because it gives me more payment options, and crucially – payment options that do not involved credit card (while still having a credit card option for those who want it)."
									</em>
								</p>
								<p style={{ textAlign: 'center', marginBottom: '0' }}>
									<strong>
										-&nbsp;Alexander P.
									</strong>
								</p>
							</Carousel.Item>
							<Carousel.Item interval={3000}>
								<p style={{ marginBottom: '.5rem', textAlign: 'center' }}>
									<em>
										"I am so impressed with BMT's outstanding customer service!"
									</em>
								</p>
								<p style={{ textAlign: 'center', marginBottom: '0' }}>
									<strong>
										-&nbsp;Lenora
									</strong>
								</p>
							</Carousel.Item>
						</Carousel>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Testimonials;