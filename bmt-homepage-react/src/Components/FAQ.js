import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import faqs from './FAQArray';

function FAQ() {
	return (
		<div className="body-content">
			<div className="wrapper">
				<h1>FAQ's</h1>
			</div>
			<Container className="faq">
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
