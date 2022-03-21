import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductOverview() {
  return (
    <div className="body-content product-overview">
      <Container className="">
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
        <Row className="justify-content-center" style={{ marginBottom: '8rem' }}>
          <Col xl={8} lg={8} className="text-center">
            <h5>With BMT Micro, we have many features to help you manage your products, increase your sales, and choose a cart that works best for your website.</h5>
            <div>
              <Link
                to="/pricing"
                className="header-btn"
                style={{ backgroundColor: '#195a7c', color: '#ffffff' }}
              >
                Learn More
              </Link>
              <a
                href="https://vendors.bmtmicro.com/new-vendor-signup.jsp"
                target="_blank"
                className="header-btn"
                rel="noreferrer"
                style={{ backgroundColor: '#efa900', color: '#195a7c' }}
              >
                Sign Up&nbsp;
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center" style={{ marginBottom: '8rem' }}>
          <Col className="text-center screenshot">
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
        <Row className="justify-content-center align-items-center" style={{ marginBottom: '8rem' }}>
          <Col xl={6} lg={6} md={12} sm={12}>
            <h2>Customized Shopping Cart</h2>
            <p>Select options that you would like to have displayed in your cart, blend your cart into your current website design, and much more!</p>
          </Col>
          <Col className="text-center screenshot">
            <Image
              src="../images/custom-cart-template.png"
              width={400}
              height={328}
            />
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center" style={{ marginBottom: '8rem' }}>
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
          <Col className="text-center screenshot">
            <Image
              src="../images/bmt-vendors-area-screenshot.jpg"
              width={400}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductOverview;
