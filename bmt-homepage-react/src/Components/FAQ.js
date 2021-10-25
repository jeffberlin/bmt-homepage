import React from 'react';
import { Container, Row, Col, CardDeck, Card } from 'react-bootstrap';
import faqs from './FAQArray';

function FAQ() {
	return (
		<div className="body-content">
			{/*<div className="wrapper">
				<h1>FAQ's</h1>
			</div>*/}
			<Container className="faq">
				<Row className="justify-content-center" style={{ marginBottom: '3rem' }}>
					<Col xl={4} lg={4} md={4} sm={4}>
						<a href="https://help.bmtmicro.com/vendors/" target="_blank" rel="noreferrer">
							<Card>
								<Card.Body className="text-center">
									<Card.Title>
										<i className="fas fa-laptop-code"></i>
									</Card.Title>
									<Card.Title className="vendor-card-title">
										Vendor Support
									</Card.Title>
									<Card.Text>
										Help pages for BMT Micro vendors
									</Card.Text>
								</Card.Body>
							</Card>
						</a>
					</Col>
					<Col xl={4} lg={4} md={4} sm={4}>
						<a href="https://help.bmtmicro.com/customers/" target="_blank" rel="noreferrer">
							<Card>
								<Card.Body className="text-center">
									<Card.Title>
										<i className="fas fa-shopping-cart"></i>
									</Card.Title>
									<Card.Title className="customer-card-title">
										Customer Support
									</Card.Title>
									<Card.Text>
										Help pages for customers
									</Card.Text>
								</Card.Body>
							</Card>
						</a>
					</Col>
				</Row>
				<Row className="justify-content-center">
					{faqs.map((faq, index) => (
						<Col xl={12} lg={12} md={12} sm={12} key={index}>
							<p className="question">"{faq.question}"</p>
							<blockquote className="answer">{faq.answer}</blockquote>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
}

export default FAQ;
