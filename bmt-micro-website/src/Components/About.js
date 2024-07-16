import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';

function About() {
	useEffect(() => {
		document.title = "BMT Micro - About Us"
	})
	return (
		<div className="body-content">
			<Container className="about">
				<Row className="justify-content-center">
					<Col className="text-center" xl={6} lg={6} md={12} sm={12} style={{ marginBottom: '3rem' }}>
						<Ratio aspectRatio="16x9">
							<iframe width="560" height="315" src="https://youtube.com/embed/4HKLenQvZcU?si=E-Xii2iTclwmUSja" title="About BMT Micro Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					  </Ratio>
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
              BMT Micro Finland was established in 2022 as an additional company with an office location in the city of Turku, Finland. BMT Micro Finland serves as a secondary, subordinate entity under BMT Micro, Inc. All terms and conditions relevant to BMT Micro, Inc. also apply to BMT Micro Finland.
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
