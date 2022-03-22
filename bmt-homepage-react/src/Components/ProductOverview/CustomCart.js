import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

function CustomCart() {
  return (
    <Row className="justify-content-center align-items-center" style={{ marginBottom: '8rem' }}>
      <Col xl={6} lg={6} md={12} sm={12}>
        <h2>Customized Shopping Cart</h2>
        <p>Select the options that you would like to have displayed in your cart, blend our cart into your current website design, and much more!</p>
      </Col>
      <Col xl={6} lg={6} md={12} sm={12} xs={12} className="text-center screenshot overview-img-col">
        <Image
          src="../images/custom-cart-template.jpg"
        />
      </Col>
    </Row>
  );
}

export default CustomCart;
