import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PipelinePlus() {
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
            <h2>Pipeline Plus</h2>
            <p><a href="https://www.superiorinteractive.com/pipelineplus/" rel="noreferrer" className="catalog-link">Visit Site</a></p>
            <p className="info-section">Pipeline Plus is a cleverly designed adventure game, based around an intriguing futuristic setting!</p>
          </Col>
        </Row>
        <Row className="justify-content-center info-section">
          <Col xl={{ span: 4, order: 2 }} lg={{ span: 4, order: 2 }} md={{ span: 6, order: 2 }} sm={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }} style={{ marginBottom: '1.5rem' }}>
            <p className="product-specs">
              <strong>Platform:&nbsp;</strong>
              Windows 9x/Me/2000/XP
            </p>
            <p className="product-specs">
              <strong>Price:&nbsp;</strong>
              $19.95
            </p>
            <a href="http://ftp2.bmtmicro.com/pipelineplustrialsetup.exe">
              <button type="button" className="demo-btn">Download Demo</button>
            </a>
          </Col>
          <Col xl={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }} md={{ span: 6, order: 1 }} sm={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }}>
            <div className="product-image text-left">
              <Image
                src="https://www.bmtmicro.com/images/bmt-micro-pipeline-logo-min.png"
                fluid
              />
            </div>
          </Col>
        </Row>
        <h4 className="product-features text-center"><u>Features</u></h4>
        <Row className="justify-content-center info-section">
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <p>Two challenging adventures, eight large levels in total, set on Callisto and Io, two of the moons of the planet Jupiter. A huge number of pipe elements link together on the rigs over the moons' surfaces, and you will often be moving around through these pipes.</p>
          </Col>
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <div className="product-image">
              <Image
                fluid
                src="https://www.bmtmicro.com/images/bmt-micro-pipeline-screenshot1-min.jpg"
              />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center info-section">
          <Col xl={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }} md={{ span: 6, order: 1 }} sm={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }}>
            <div className="product-image text-left">
              <Image
                fluid
                src="https://www.bmtmicro.com/images/bmt-micro-pipeline-screenshot2-min.jpg"
              />
            </div>
          </Col>
          <Col xl={{ span: 4, order: 2 }} lg={{ span: 4, order: 2 }} md={{ span: 6, order: 2 }} sm={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
            <p>Create your own mind-bending adventures using the Adventure Editor and Level Editor. A special versatile scripting language allows you to design puzzles to build into your adventures and put your own graphics into the game with the easy-to-use Tile-Set Editor.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PipelinePlus;
