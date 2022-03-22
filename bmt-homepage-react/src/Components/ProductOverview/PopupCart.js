import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

function PopupCart() {
  return (
    <Row className="justify-content-center align-items-center" style={{ marginBottom: '8rem' }}>
      <Col xl={{ span: 6, order: 1 }} lg={{ span: 6, order: 1 }} md={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} xs={{ span: 12, order: 2 }} className="text-center screenshot overview-img-col">
        <Image
          src="../images/bmt-popup-cart-overview-min.jpg"
        />
      </Col>
      <Col xl={{ span: 6, order: 2 }} lg={{ span: 6, order: 2 }} md={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }}>
        <h2>Pop-up Cart</h2>
        <p>Using our popup cart, you can pick which parameters you would like to add,</p>
      </Col>
    </Row>
  );
}

export default PopupCart;
