import React from 'react';
import { Container, Row, Col, Card, CardDeck } from 'react-bootstrap';

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
					<Col xl={12} lg={12} md={12} sm={12} style={{ marginBottom: '2rem' }}>
						<CardDeck>
							<Card>
								<Card.Img src="./images/download.jpeg" style={{ height: '268px', width: '538px' }} />
								<Card.Body>
									<Card.Title>Phone</Card.Title>
									<Card.Text>Orders only (toll-free in USA and Canada):&nbsp;<a href="tel:+18004144268" title="Call us">1-800-414-4268</a></Card.Text>
									<Card.Text>Orders and account questions: <a href="tel:+19107929100" title="Call us">1-910-792-9100</a></Card.Text>
								</Card.Body>
							</Card>
							<Card>
								<Card.Img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22321%22%20height%3D%22160%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20321%20160%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17a68ae5800%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2C%26quot%3BLiberation%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17a68ae5800%22%3E%3Crect%20width%3D%22321%22%20height%3D%22160%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22120.0234375%22%20y%3D%2287.5375%22%3E321x160%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
								<Card.Body>
									<Card.Title>Fax</Card.Title>
									<Card.Text>24-hour FAX (toll-free in USA and Canada):&nbsp;<span style={{ color: '#efa900' }}>1-800-346-1672</span></Card.Text>
									<Card.Text>24-hour FAX:&nbsp;<span style={{ color: '#efa900' }}>1-910-792-1889</span></Card.Text>
									<Card.Text style={{ fontSize: '.9rem' }}>This is an alternate way to send in orders, questions, or comments. <strong>Please note:</strong> Faxed orders will be processed the following business day.</Card.Text>
								</Card.Body>
							</Card>
						</CardDeck>
					</Col>
					<Col xl={12} lg={12} md={12} sm={12}>
						<CardDeck>
							<Card>
								<Card.Img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22321%22%20height%3D%22160%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20321%20160%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17a68ae5800%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2C%26quot%3BLiberation%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17a68ae5800%22%3E%3Crect%20width%3D%22321%22%20height%3D%22160%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22120.0234375%22%20y%3D%2287.5375%22%3E321x160%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
								<Card.Body>
									<Card.Title>Email</Card.Title>
									<Card.Text>Vendors/Developers:&nbsp;<a href="mailto:vendors@bmtmicro.com" title="Send an email">vendors@bmtmicro.com</a></Card.Text>
									<Card.Text>Customer Service:&nbsp;<a href="mailto:cservice@bmtmicro.com" title="Send an email">cservice@bmtmicro.com</a></Card.Text>
								</Card.Body>
							</Card>
							<Card>
								<Card.Img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22321%22%20height%3D%22160%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20321%20160%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17a68ae5800%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2C%26quot%3BLiberation%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17a68ae5800%22%3E%3Crect%20width%3D%22321%22%20height%3D%22160%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22120.0234375%22%20y%3D%2287.5375%22%3E321x160%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
								<Card.Body>
									<Card.Title>Mail</Card.Title>
									<Card.Text>Address to PO Box:</Card.Text>
									<Card.Text style={{ color: '#efa900' }}>BMT Micro P.O. Box 15016<br/>Wilmington, NC 28408 USA</Card.Text>
								</Card.Body>
							</Card>
						</CardDeck>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Contact;
