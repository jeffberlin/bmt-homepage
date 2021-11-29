import React from 'react';
import { Container, Row, Col, ResponsiveEmbed } from 'react-bootstrap';
// import video from '../BMT-Micro-2021-video-min.mp4';

function About() {
	return (
		<div className="body-content">
			<Container className="about">
				<Row className="justify-content-center">
					<Col className="text-center" xl={6} lg={6} md={12} sm={12} style={{ marginBottom: '3rem' }}>
						<ResponsiveEmbed aspectRatio="16by9">
					    {/* <video controls autoPlay>
					    	<source type="video/mp4" src={video} />
					    	<source src="movie.ogg" type="video/ogg" />
					    	Your browser does not support the video tag.
					    </video> */}
							<iframe width="560" height="315" src="https://www.youtube.com/embed/vF-MgzLXfmo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					  </ResponsiveEmbed>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col>
						<p>
							BMT Micro, Inc., known as BMT by most of our customers, is a leader in software distribution and order fulfillment. Founded in 1992 before the Internet was a commercial medium, our business model has evolved with the times. One thing that hasn’t changed, though, is our commitment to our software suppliers and customers.
						</p>
						<p>
							Started as a commercial online BBS service on May 15th, 1992, BMT operated as a large, profitable, multi-line BBS service in southeastern North Carolina. It was a natural transition for us to begin selling software online and the rest is history. We are continually adding new features and functionality so our clients stay competitive, and frequently upgrade our systems and processes to meet the ever-increasing demand for our products and services.
						</p>
						<p>
							In an industry that has become cluttered with automated servers and e-commerce “solutions”, our foundation is built on two major strengths. Simply put, we are accessible and dependable. BMT operates in a professional office environment and is fully staffed so you and your/our customers can actually reach someone without jumping through hoops.
						</p>
						<p>
							Thank you for considering BMT as an online sales and order fulfillment option for your products. Please give us a chance to serve you today! If you have any questions, please don’t hesitate to contact us at <a href="mailto:vendors@bmtmicro.com">vendors@bmtmicro.com</a>.
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default About;
