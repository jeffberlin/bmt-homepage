import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

class Testimonials extends React.PureComponent {
	render() {
		const testimonials = [
			{
				"text": "It’s extremely low-friction. Sign up for an account, add products, add serial numbers, add payment links to your website and you’re done. Checks come once a month like clockwork. Much easier than Paypal and reduces the headaches.",
				"name": "Kevin W."
			},
			{
				"text": "BMT Micro on the other hand are a joy to work with and they treat customers like royalty... quick support and they are happy to go the extra mile. Highly recommended.",
				"name": "Frank R."
			},
			{
				"text": "You have exemplified superior customer service.",
				"name": "Brian A."
			},
			{
				"text": "BMT Micro, and you’ll never look back. Outstanding support, always above and beyond the call of duty. Been with them for over 10 years and I ain’t changing for anything. Some things simply have no price... They are extremely professional and, above all, very friendly.",
				"name": "Jorge C."
			},
			{
				"text": "As a consumer, I'd much rather see indie devs using BMT Micro – simply because it gives me more payment options, and crucially – payment options that do not involved credit card (while still having a credit card option for those who want it).",
				"name": "Alexander P."
			},
			{
				"text": "I am so impressed with BMT's outstanding customer service!",
				"name": "Lenora"
			},
			{
				"text": "This is the best customer service I’ve ever received… To respond within a day, too, is extraordinary. I can’t thank you enough!",
				"name": "Chris S."
			},
			{
				"text": "You are very good at customer service with your terrific response time and knowledge.",
				"name": "Jennifer N."
			}
		]

		return (
			<div className="testimonials">
				<Container>
					<Row className="justify-content-center align-items-center">
						<Col xl={6} lg={6} md={12} sm={12}>
							<Carousel
								controls={false}
								indicators={false}
							>
								{testimonials.map((testimonial, index) => (
									<Carousel.Item interval={6000} key={index}>
										<p style={{ marginBottom: '.5rem' }}>
											<em>"{testimonial.text}"</em>
										</p>
										<p style={{ textAlign: 'center', marginBottom: '0' }}>
											<strong>-&nbsp;{testimonial.name}</strong>
										</p>
									</Carousel.Item>
								))}
							</Carousel>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Testimonials;