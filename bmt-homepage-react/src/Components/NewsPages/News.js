import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PurchaseOrderPolicy from './PurchaseOrderPolicy';
import NewYearsMessage from './NewYearsMessage';

function News() {
	useEffect(() => {
		document.title = "BMT Micro - News"
	})
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
