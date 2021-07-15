import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import video from '../BMT-Micro-2021-video-min.mp4';

function About() {
	return (
		<div className="body-content">
			<div className="wrapper">
				<h1>About BMT Micro</h1>
			</div>
			<Container className="about">
				<div style={{ textAlign: 'center', marginBottom: '3rem' }}>

					<video style={{ width: '560px', height: '315px' }} controls autoPlay>
					  <source src={video} type="video/mp4" />
					  {/* <source src="movie.ogg" type="video/ogg" /> */}
						Your browser does not support the video tag.
					</video>
				</div>
				<Row className="justify-content-center">
					<Col>
						<p>
							BMT Micro, Inc., known as BMT by most of our customers, is a leader in software distribution and order fulfillment. Founded in 1992 before the Internet was a commercial medium, our business model has evolved with the times. One thing that hasn’t changed, though, is our commitment to our vendors and customers.
						</p>
						<p>
							Started as a commercial online BBS service on May 15th, 1992, BMT operated as a large, profitable, multi-line BBS service in southeastern North Carolina. It was a natural transition for us to begin selling software online and the rest is history. We are continually adding new features and functionality so our clients stay competitive, and frequently upgrade our systems and processes to meet the ever-increasing demand for our products and services.
						</p>
						<p>
							In an industry that has become cluttered with automated servers and e-commerce “solutions”, our foundation is built on two major strengths. Simply put, we are accessible and dependable. BMT operates in a professional office environment and is fully staffed so you and your/our customers can actually reach someone without jumping through hoops.
						</p>
						<p>
							Thank you for considering BMT as a payment processing option for your products. Please give us a chance to serve you today! If you have questions, please don’t hesitate to contact us at <a href="mailto:vendors@bmtmicro.com">vendors@bmtmicro.com</a>.
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default About;
