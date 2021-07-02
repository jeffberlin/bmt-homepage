import React from 'react';
import PurchaseOrderPolicy from './NewsPages/PurchaseOrderPolicy';
import NewYearsMessage from './NewsPages/NewYearsMessage';
import { Container, Row, Col } from 'react-bootstrap';

function News() {
	return (
		<div className="body-content">
			<div className="wrapper">
        <h1>News</h1>
      </div>
      <Container className="news">
        <PurchaseOrderPolicy />
      	<NewYearsMessage />
      </Container>
		</div> 
	);
}

export default News;
