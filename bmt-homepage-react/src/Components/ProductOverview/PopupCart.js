import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

function PopupCart() {
  return (
    <Row className="justify-content-center align-items-center product-overview-item">
      <Col xl={{ span: 6, order: 1 }} lg={{ span: 6, order: 1 }} md={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} xs={{ span: 12, order: 2 }} className="text-center screenshot overview-img-col">
        <Image
          src="../images/bmt-popup-cart-overview-min.jpg"
        />
      </Col>
      <Col xl={{ span: 6, order: 2 }} lg={{ span: 6, order: 2 }} md={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }}>
        <h2>Pop-up Cart</h2>
        <p>Using our pop-up cart, customers can remain on the page throughout the checkout process. With this cart, products can be added into the customers cart without having to display the checkout screen.</p>
      </Col>
    </Row>
  );
}

export default PopupCart;
