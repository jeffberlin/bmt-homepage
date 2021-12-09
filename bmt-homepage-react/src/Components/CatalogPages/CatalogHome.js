import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeaturedProducts from './FeaturedProducts';

function Catalog() {
  return (
    <div className="body-content catalog-bg">
      <div className="wrapper">
        <h1>Welcome to the BMT Micro Catalog!</h1>
      </div>
      <Container className="catalog">
        <Row className="justify-content-center">
          <Col xl={10} lg={10} md={10} sm={10}>
            <p style={{ marginBottom: '2rem' }}>If you are interested in partnering with us or would like more information please contact <a href="mailto:vendors@bmtmicro.com" className="catalog-link">vendors@bmtmicro.com</a>. To view our pricing options, <Link to="/pricing" className="catalog-link">click here</Link>.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xl={6} lg={6} md={12} sm={12} style={{ marginBottom: '2rem' }}>
            <div className="text-center">
              <Link to="/products" className="products-link">Search Products</Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={12} lg={12} md={12} sm={12}>
            <h4 style={{ color: '#000' }}>Featured Products</h4>
          </Col>
        </Row>
        <FeaturedProducts />
      </Container>
    </div>
  );
}

export default Catalog;
