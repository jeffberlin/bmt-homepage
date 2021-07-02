import React from 'react';
import { Container, Row, Col, Card, CardDeck } from 'react-bootstrap';

function Contact() {
	return (
		<div className="body-content">
			<div className="wrapper">
				<h1>Contact Us</h1>
			</div>
			<Container className="contact">
				<Row>
					<Col>
						<CardDeck>
							<Card>
								<Card.Img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22321%22%20height%3D%22160%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20321%20160%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17a68ae5800%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2C%26quot%3BLiberation%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17a68ae5800%22%3E%3Crect%20width%3D%22321%22%20height%3D%22160%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22120.0234375%22%20y%3D%2287.5375%22%3E321x160%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
								<Card.Title>Phone</Card.Title>
								<Card.Text>hello world</Card.Text>
							</Card>
							<Card>
								<Card.Img src="" />
								<Card.Title>Email</Card.Title>
							</Card>
							<Card>
								<Card.Img src="" />
								<Card.Title>Phone</Card.Title>
							</Card>
						</CardDeck>
					</Col>
				</Row>			
			</Container>
		</div>
	);
}

export default Contact;