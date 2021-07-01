import React from 'react';
// import NewsHome from './NewsPages/NewsHome';
import PurchaseOrderPolicy from './NewsPages/PurchaseOrderPolicy';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function News() {
	const routes = [
		{
			path: "/news",
			component: News,
			routes: [
				{
					path: "/news/purchase-order-policy",
					component: PurchaseOrderPolicy
				}
			]
		}
	]

	return (
		<div className="body-content">
			<div className="wrapper">
        <h1>News</h1>
      </div>
      <Container className="news">
        <Row className="justify-content-center">
          <Col>
            <ul>
              <li>
                <Link to="">Purchase Order Policies</Link>
              </li>
              <li>
                <Link to="">New Year's Message</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
		</div>
	);
}

export default News;
