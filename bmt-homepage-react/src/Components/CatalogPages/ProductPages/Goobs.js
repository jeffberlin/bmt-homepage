import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Goobs() {
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
            <h2>The Goobs</h2>
            <p><a href="http://www.redclawsoftware.com/" className="catalog-link">Visit Site</a></p>
            <p className="info-section">They're small, round, and... not too bright! And they need your help to get home safely, through 55 exiting levels, solving puzzles, and collecting energy balls! Goobs are little fun loving creatures from the planet Stoompf. But these particular Goobs have got themselves stuck on a series of floating space platforms, and they need your help to get back home.</p>
          </Col>
        </Row>
        <Row className="justify-content-center info-section">
          <Col xl={4} lg={4} md={6} sm={6} xs={12} className="top-img">
            <div className="product-image text-left">
              <Image
                src="https://www.bmtmicro.com/images/bmt-micro-goobs-logo-min.jpg"
                fluid
              />
            </div>
          </Col>
          <Col xl={4} lg={4} md={6} sm={6} xs={12} style={{ marginBottom: '1.5rem' }}>
            <p className="product-specs">
              <strong>Platform:&nbsp;</strong>
              Windows 98/NT, 4.0/2000
            </p>
            <p className="product-specs">
              <strong>Price:&nbsp;</strong>
              $19.95
            </p>
            <a href="http://ftp2.bmtmicro.com/goobsdemosetup.exe">
              <button type="button" className="demo-btn">Download Demo</button>
            </a>
          </Col>
        </Row>
        <Row className="justify-content-center info-section">
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <p>To do this you must take control of the goobs, and guide them safely through each of the platforms towards the exit tunnel, collecting the red and blue energy balls along the way.</p>
          </Col>
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <div className="product-image">
              <Image
                fluid
                src="https://www.bmtmicro.com/images/bmt-micro-goobs-screenshot1-min.jpg"
              />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center info-section">
          <Col xl={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }} md={{ span: 6, order: 1 }} sm={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }}>
            <div className="product-image text-left">
              <Image
                fluid
                src="https://www.bmtmicro.com/images/bmt-micro-goobs-screenshot2-min.jpg"
              />
            </div>
          </Col>
          <Col xl={{ span: 4, order: 2 }} lg={{ span: 4, order: 2 }} md={{ span: 6, order: 2 }} sm={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
            <p>But its not just the surroundings that the goobs must deal with, as any number of goobs might be stranded on the same platform, meaning a bit of teamwork will be required to get them all to safety.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Goobs;
