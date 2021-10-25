import React from 'react';
import PurchaseOrderPolicy from './PurchaseOrderPolicy';
import NewYearsMessage from './NewYearsMessage';
import { Container, Row, Col } from 'react-bootstrap';

function News() {
	return (
		<div className="body-content">
      <Container className="news">
				<Row>
					<Col xl={12} lg={12} md={12} sm={12} className="news-title">
		      	<h4 style={{ marginBottom: '1.5rem' }}>BMT Micro News</h4>
					</Col>
				</Row>
        <PurchaseOrderPolicy />
      	<NewYearsMessage />
      </Container>
		</div>
	);
}

export default News;
