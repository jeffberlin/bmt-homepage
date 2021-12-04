import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CatalogSearch from './CatalogSearch';

function CatalogProductList() {
  return (
    <div className="body-content catalog-bg">
      <div className="wrapper">
        <h1>Welcome to the BMT Micro Catalog!</h1>
      </div>
      <Container className="catalog-search" style={{ minHeight: 'calc(100vh - 330px)'}}>
        <Row className="justify-content-center">
          <CatalogSearch />
        </Row>
      </Container>
    </div>
  );
}

export default CatalogProductList;
