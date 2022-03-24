import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PopupCart from './PopupCart';
import CustomCart from './CustomCart';
import WordpressPlugin from './WordpressPlugin';
import SupplierPortal from './SupplierPortal';

class ProductOverview extends Component {
  componentDidMount() {
    document.title = "BMT Micro - Product Overview"
  }
  render() {
    return (
      <div className="body-content product-overview">
        <Container>
          <Row className="justify-content-center">
            <Col xl={8} lg={8} md={12} sm={12} xs={12}>
              <h1>BMT Micro has a checkout solution that is right for you!</h1>
            </Col>
          </Row>
          <Row>
            <Col xl={12} lg={12} md={12} sm={12}>
              <div className="line"></div>
            </Col>
          </Row>
          <Row className="justify-content-center" style={{ marginBottom: '8rem' }}>
            <Col xl={8} lg={8} md={12} sm={12} xs={12} className="text-center">
              <h5>With BMT Micro, we have many features to help you manage your products, increase sales, and choose a cart that works best for your website.</h5>
              <a
                href="https://vendors.bmtmicro.com/new-vendor-signup.jsp"
                target="_blank"
                className="product-overview-btn"
                rel="noreferrer"
                style={{ backgroundColor: '#efa900', color: '#195a7c' }}
              >
                Sign Up For Free&nbsp;&nbsp;
                <i className="fas fa-arrow-right"></i>
              </a>
            </Col>
          </Row>
          <PopupCart />
          <CustomCart />
          <WordpressPlugin />
          <SupplierPortal />
        </Container>
      </div>
    );
  }
}

export default ProductOverview;
