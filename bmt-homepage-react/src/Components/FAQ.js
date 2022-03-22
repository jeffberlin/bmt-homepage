import React, { Component } from 'react';
import { Container, Row, Col, CardDeck, Card } from 'react-bootstrap';
import faqs from './FAQArray';

class FAQ extends Component {
	componentDidMount() {
		document.title = "BMT Micro - FAQ's"
	}
	render() {
		return (
			<div className="body-content">
				<Container className="faq">
					<Row className="justify-content-center card-row">
						<CardDeck>
							<a href="https://help.bmtmicro.com/vendors/" target="_blank" rel="noreferrer">
								<Card style={{ width: 250 }}>
									<Card.Body className="text-center">
										<Card.Title>
											<i className="fas fa-laptop-code"></i>
										</Card.Title>
										<Card.Title className="vendor-card-title">
											Supplier Support
										</Card.Title>
										<Card.Text>
											Help pages for suppliers
										</Card.Text>
									</Card.Body>
								</Card>
							</a>
							<a href="https://help.bmtmicro.com/customers/" target="_blank" rel="noreferrer">
								<Card style={{ width: 250 }}>
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
					</CardDeck>
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
}

export default FAQ;
