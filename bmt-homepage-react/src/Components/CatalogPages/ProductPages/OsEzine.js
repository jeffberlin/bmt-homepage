import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function OsEzine() {
  return (
    <div className="body-content catalog-bg product-page">
      <Container className="catalog">
        <p className="back-btn">
          <Link to="/products">
            <i className="fas fa-arrow-left"></i>
            &nbsp;Back
          </Link>
        </p>
        <Row className="justify-content-center">
          <Col xl={10} lg={10} md={10} sm={10}>
            <h2>OS/2 e-Zine!</h2>
            <p><a href="http://www.os2ezine.com/" className="catalog-link" rel="noreferrer">Visit Site</a></p>
            <p className="info-section">OS/2 e-Zine! is the largest, longest running, most comprehensive and best OS/2 publication on the Internet. Each issue of OS/2 e-Zine! contains news, reviews, interviews, opinions, tips and articles relevant to the novice and experienced OS/2 user.</p>
          </Col>
        </Row>
        <Row className="justify-content-center info-section">
          <Col xl={4} lg={4} md={6} sm={6} xs={12} className="top-img">
            <div className="product-image text-left">
              <Image
                src="https://www.bmtmicro.com/images/bmt-micro-ezine-logo-min.png"
                fluid
              />
            </div>
          </Col>
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <p className="product-specs">
              <strong>Platform:&nbsp;</strong>
              OS/2
            </p>
            <p className="product-specs">
              <strong>Price:&nbsp;</strong>
              $15.00 - $100.00 (Sponsorship)
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center info-section">
          <Col xl={8} lg={8} md={10} sm={10} xs={12}>
            <p><strong>Coporate Advertisers</strong></p>
            <p>OS/2 e-Zine! has space for a very limited number of corporate advertisers. Extremely affordable rates for high impact, graphical banner advertisements are available but ads are usually reserved months in advance -- contact us today at:</p>
            <ul style={{ listStyle: 'none', fontSize: '.9rem', paddingLeft: '40px' }}>
              <li>
                <p>
                  <strong>Falcon Networking</strong>
                  <br />
                  Toll Free: <a href="tel:+18005951974" className="catalog-link">1-(800)-595-1974</a> or: <a href="tel:+13523359693" className="catalog-link">1-(352)-335-9693</a>
                  <br />
                  <a href="mailto:admin@os2ss.com" className="catalog-link">admin@os2ss.com</a>
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OsEzine;
