import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function ProductOverview() {
  return (
    <div className="body-content">
      <Container className="product-overview">
        <Row className="justify-content-center">
          <Col xl={10} lg={10}>
            <h1>Whatever your needs,</h1>
            <h1>BMT Micro has a solution for you</h1>
          </Col>
        </Row>
        <Row>
          <Col xl={12} lg={12} md={12} sm={12}>
            <div className="line"></div>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center" style={{ marginBottom: '7rem' }}>
          <Col className="text-center">
            <Image
              src="../images/bmt-popup-cart-overview-min.png"
              width={400}
            />
          </Col>
          <Col xl={6} lg={6} md={12} sm={12}>
            <h2>Pop-up Cart</h2>
            <p>If you prefer to implement your own options</p>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center" style={{ marginBottom: '7rem' }}>
          <Col xl={6} lg={6} md={12} sm={12}>
            <h2>Customized Shopping Cart</h2>
            <p>Select options that you would like to have displayed in your cart, blend your cart into your current website design, and much more!</p>
          </Col>
          <Col className="text-center">
            <Image
              src="../images/custom-cart-template.png"
              width={400}
            />
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center" style={{ marginBottom: '7rem' }}>
          <Col className="text-center">
            <Image
              src="../images/bmt-micro-wordpress-plugin-image.png"
              width={400}
            />
          </Col>
          <Col xl={6} lg={6} md={12} sm={12}>
            <h2>WordPress Plugin</h2>
            <p>If you have a WordPress website we have you covered with our BMT Micro Shopping Cart Plugin! The plugin utilizes our "pop-up" cart and integrates into your WordPress theme.</p>
            <a href="https://help.bmtmicro.com/plugin/" target="_blank" rel="noreferrer" className="plugin-btn"><span>Learn More</span>&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></a>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
          <Col xl={6} lg={6} md={12} sm={12}>
            <h2>Supplier Portal</h2>
            <p>With our supplier portal, you can manage your products, track detailed sales information, edit your account, add users, and much more. </p>
          </Col>
          <Col className="text-center">
            <p>[screenshot]</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductOverview;
