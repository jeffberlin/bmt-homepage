import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CatalogSearch from './CatalogSearch';

function CatalogProductList() {
  useEffect(() => {
		document.title = "BMT Micro - Catalog Search"
	})
  return (
    <div className="body-content catalog-bg">
      <div className="wrapper">
        <h1>Welcome to the BMT Micro Catalog!</h1>
      </div>
      <Container className="catalog-search" style={{ minHeight: 'calc(100vh - 330px)' }}>
        <Row className="justify-content-center">
          <CatalogSearch />
        </Row>
      </Container>
    </div>
  );
}

export default CatalogProductList;
