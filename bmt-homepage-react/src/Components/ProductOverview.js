import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ProductOverview() {
  return (
    <div className="body-content">
      <Container fluid className="product-overview">
        <Row>
          <Col>
            <h1>Increase your sales</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductOverview;
