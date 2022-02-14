import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ProductOverview() {
  return (
    <div className="body-content">
      <Container fluid className="product-overview">
        <Row className="justify-content-center">
          <Col xl={6} lg={6}>
            <h1>Whatever your needs,</h1>
            <h1>BMT Micro has a solution for you</h1>
            {/* <div className="line"></div> */}
          </Col>
        </Row>
        <Row>
          <Col xl={{span: 7, offset: 2}} lg={{span: 7, offset: 2}} md={{span: 7, offset: 2}}>
            <div className="line"></div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>WordPress Plugin</p>
            <p>Custom Cart</p>
            <p>Dashboard, upload products, track sales, emails,</p>
            <p>Pop-up cart</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductOverview;
