import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CatalogSearch from './CatalogSearch';

function Catalog() {
  return (
    <div className="body-content">
      <div className="wrapper">
        <h1>Welcome to the BMT Micro Catalog!</h1>
      </div>
      <Container className="catalog">
        <Row className="justify-content-center">
          <Col xl={10} lg={10} md={10} sm={10} style={{ marginBottom: '2rem' }}>
            <p>If you are interested in partnering with us or would like more information please contact <a href="mailto:vendors@bmtmicro.com">vendors@bmtmicro.com</a>.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Catalog;
