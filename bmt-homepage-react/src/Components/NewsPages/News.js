import React from 'react';
import PurchaseOrderPolicy from './PurchaseOrderPolicy';
import NewYearsMessage from './NewYearsMessage';
import { Container } from 'react-bootstrap';

function News() {
	return (
		<div className="body-content">
      <Container className="news">
      	<h3 style={{ marginBottom: '1.5rem' }}>BMT Micro News</h3>
        <PurchaseOrderPolicy />
      	<NewYearsMessage />
      </Container>
		</div>
	);
}

export default News;
