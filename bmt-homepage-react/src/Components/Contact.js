import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Contact() {
	return (
		<div className="body-content">
			{/*<div className="wrapper">
				<h1>Contact Us</h1>
			</div>*/}
			<Container className="contact">
				<Row className="justify-content-center">
					<Col>
						<p style={{ marginBottom: '2rem' }}>With BMT Micro, you can always get in touch with a real person who can help and assist you with any problems you may have. <strong>Our office hours are from 9:00 a.m. – 4:00 p.m. Monday through Friday, Eastern Time</strong>. It is also likely that you will receive an email reply outside of our normal business hours, so please don’t hesitate to write. Someone will answer your email, and we will call you back.</p>
					</Col>
				</Row>
				<Row>
					<Col xl={6} lg={6} md={12} sm={12}>
						<h5>Phone</h5>
						<p>Orders only (toll-free in USA and Canada):&nbsp;<a href="tel:+18004144268" title="Call us">1-800-414-4268</a></p>
						<p>Orders and account questions: <a href="tel:+19107929100" title="Call us">1-910-792-9100</a></p>
						<h5>Fax</h5>
						<p>24-hour FAX (toll-free in USA and Canada):&nbsp;<span style={{ color: '#efa900' }}>1-800-346-1672</span></p>
						<p>24-hour FAX:&nbsp;<span style={{ color: '#efa900' }}>1-910-792-1889</span></p>
						<p style={{ fontSize: '.9rem' }}>This is an alternate way to send in orders, questions, or comments. <strong>Please note:</strong> Faxed orders will be processed the following business day.</p>
						<h5>Email</h5>
						<p>Vendors/Developers:&nbsp;<a href="mailto:vendors@bmtmicro.com" title="Send an email">vendors@bmtmicro.com</a></p>
						<p>Customer Service:&nbsp;<a href="mailto:cservice@bmtmicro.com" title="Send an email">cservice@bmtmicro.com</a></p>
						<h5>Mail</h5>
						<p>Address to PO Box:</p>
						<p style={{ color: '#efa900' }}>BMT Micro P.O. Box 15016<br/>Wilmington, NC 28408 USA</p>
					</Col>
					<Col xl={{ span: 4, offset: 1 }} lg={6} md={12} sm={12} className="media-contact" style={{ borderLeft: '5px solid black'}}>
						<h5>Connect through social media</h5>
						<ul>
							<li><a href="https://www.facebook.com/bmt.micro" target="_blank"><i className="fab fa-facebook-square facebook"></i></a></li>
							<li><a href="https://twitter.com/BMTMicro" target="_blank"><i className="fab fa-twitter-square twitter"></i></a></li>
							<li><a href="https://www.instagram.com/bmtmicro/" target="_blank"><i className="fab fa-instagram-square instagram"></i></a></li>
							<li><a href="https://www.linkedin.com/company/bmt-micro-wilmington-nc-usa" target="_blank"><i className="fab fa-linkedin linkedin"></i></a></li>
							<li><a href="https://www.pinterest.com/bmtmicro/" target="_blank"><i className="fab fa-pinterest-square pinterest"></i></a></li>
						</ul>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Contact;
