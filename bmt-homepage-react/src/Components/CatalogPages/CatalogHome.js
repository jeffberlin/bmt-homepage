import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import CatalogSearch from './CatalogSearch';
import FeaturedProducts from './FeaturedProducts';
import CatalogProductList from './CatalogProductList';

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggle: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({isToggle: !this.state.isToggle });
  }

  render() {
    return (
      <div className="body-content" style={{ background: 'rgb(0,0,0)',
      background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(25,90,124,1) 69%, rgba(25,90,124,1) 100%)' }}>
        <div className="wrapper">
          <h1>Welcome to the BMT Micro Catalog!</h1>
        </div>
        <Container className="catalog">
          <Row className="justify-content-center">
            <Col xl={10} lg={10} md={10} sm={10}>
              <p style={{ marginBottom: '2rem' }}>If you are interested in partnering with us or would like more information please contact <a href="mailto:vendors@bmtmicro.com">vendors@bmtmicro.com</a>. To view our pricing options, <Link to="/pricing">click here</Link>.</p>
            </Col>
          </Row>
          <Link to="/products">Search Products</Link>
          {/* <Row>
            <Col>
              <button className="" onClick={this.handleClick}>Show Products</button>
              <div style={{ display: this.state.isToggle ? 'block' : 'none'}}>
            <CatalogProductList />
              </div>
            </Col>
          </Row> */}
          <Col xl={12} lg={12} md={12} sm={12}>
            <h4>Featured Products</h4>
          </Col>
          <FeaturedProducts />
        </Container>
      </div>

    );
  }
}

export default Catalog;
