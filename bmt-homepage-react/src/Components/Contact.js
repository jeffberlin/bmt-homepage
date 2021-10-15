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
				<Row style={{ marginBottom: '2rem' }}>
					<Col xl={6} lg={6} md={12} sm={12}>
						<h5>Phone&nbsp;<i class="fas fa-phone-square-alt"></i></h5>
						<p>Orders only (toll-free in USA and Canada):&nbsp;<a href="tel:+18004144268" title="Call us">1-800-414-4268</a></p>
						<p>Orders and account questions: <a href="tel:+19107929100" title="Call us">1-910-792-9100</a></p>
					</Col>
					<Col xl={6} lg={6} md={12} sm={12}>
						<h5>Fax</h5>
						<p>24-hour FAX (toll-free in USA and Canada):&nbsp;<span style={{ color: '#efa900' }}>1-800-346-1672</span></p>
						<p>24-hour FAX:&nbsp;<span style={{ color: '#efa900' }}>1-910-792-1889</span></p>
						<p style={{ fontSize: '.9rem' }}>This is an alternate way to send in orders, questions, or comments. <strong>Please note:</strong> Faxed orders will be processed the following business day.</p>
					</Col>
				</Row>
				<Row>
					<Col xl={6} lg={6} md={12} sm={12}>
						<h5>Email&nbsp;<i class="fas fa-envelope-square"></i></h5>
						<p>Vendors/Developers:&nbsp;<a href="mailto:vendors@bmtmicro.com" title="Send an email">vendors@bmtmicro.com</a></p>
						<p>Customer Service:&nbsp;<a href="mailto:cservice@bmtmicro.com" title="Send an email">cservice@bmtmicro.com</a></p>
					</Col>
					<Col xl={6} lg={6} md={12} sm={12}>
						<h5>Mail</h5>
						<p>Address to PO Box:</p>
						<p style={{ color: '#efa900' }}>BMT Micro P.O. Box 15016<br/>Wilmington, NC 28408 USA</p>
					</Col>
				</Row>			
			</Container>
		</div>
	);
}

export default Contact;