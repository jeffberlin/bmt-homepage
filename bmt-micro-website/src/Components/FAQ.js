import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import faqs from './FAQArray';

function FAQ() {
	useEffect(() => {
		document.title = "BMT Micro - FAQ's"
	})
	return (
		<div className="body-content">
			<Container className="faq">
				<Row className="justify-content-center card-row">
          <CardGroup className="justify-content-center w-auto">
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
					</CardGroup>
				</Row>
				<Row className="justify-content-center">
					{faqs.map((faq, index) => (
						<Col xl={10} lg={10} md={12} sm={12} key={index}>
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
