import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import testimonials from './TestimonialsArray';

class Testimonials extends React.PureComponent {
	render() {
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
									<Carousel.Item interval={testimonial.interval} key={index}>
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
