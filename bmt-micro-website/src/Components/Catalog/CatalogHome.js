import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import FeaturedProducts from './FeaturedProducts';

function Catalog() {
  useEffect(() => {
		document.title = "BMT Micro - Catalog"
	})
  return (
    <div className="body-content catalog-bg">
      <div className="wrapper">
        <h1>Welcome to the BMT Micro Catalog!</h1>
      </div>
      <Container className="catalog">
        <Row className="justify-content-center">
          <Col xl={8} lg={8} md={10} sm={10}>
            <p style={{ marginBottom: '2rem' }}>If you are interested in partnering with us or would like more information please contact <a href="mailto:vendors@bmtmicro.com" className="catalog-link">vendors@bmtmicro.com</a>. To view our pricing options, <Link to="pricing" className="catalog-link">click here</Link>.</p>
          </Col>
        </Row>
        <Row className="justify-content-center text-center" style={{ marginBottom: '2rem' }}>
          <Col xl={4} lg={4} md={4} sm={4} xs={4}>
            <Link to="/product-list" className="products-link">Search Products</Link>
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
