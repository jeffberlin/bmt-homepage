import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

function Repton1() {
  useEffect(() => {
    document.title = "BMT Micro Catalog - Repton 1"
  })
  return (
    <div className="body-content catalog-bg product-page">
      <Container className="catalog">
        <p className="back-btn">
          <Link to="/product-list">
            <i className="fas fa-arrow-left"></i>
            &nbsp;Back
          </Link>
        </p>
        <Row className="justify-content-center">
          <Col xl={10} lg={10} md={10} sm={10}>
            <h2>Repton 1</h2>
            <p><a href="https://www.superiorinteractive.com/repton/" rel="noreferrer" className="catalog-link">Visit Site</a></p>
            <p className="info-section">Repton 1 is a fascinating strategical puzzle game, featuring our famous green friend Repton in a series of thought-provoking levels.</p>
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
            <a href="http://ftp2.bmtmicro.com/repton1trialsetup.exe">
              <button type="button" className="demo-btn">Download Demo</button>
            </a>
          </Col>
          <Col xl={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }} md={{ span: 6, order: 1 }} sm={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }}>
            <div className="product-image text-left">
              <Image
                src="https://www.bmtmicro.com/images/bmt-micro-repton1-logo.png"
                fluid
              />
            </div>
          </Col>
        </Row>
        <h4 className="product-features text-center"><u>Features</u></h4>
        <Row className="justify-content-center info-section">
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <p>32 main levels starting with a few easyish warm-up levels, and building up through the Cascade scenario to the most difficult Repton 1 levels ever devised. Repton 1 also has 20 children's levels designed for our younger Repton fans aged from 3 to 9 years old.</p>
          </Col>
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <div className="product-image">
              <Image
                fluid
                src="https://www.bmtmicro.com/images/bmt-micro-repton1-screenshot1-min.jpg"
              />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center info-section">
          <Col xl={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }} md={{ span: 6, order: 1 }} sm={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }}>
            <div className="product-image text-left">
              <Image
                fluid
                src="https://www.bmtmicro.com/images/bmt-micro-repton1-screenshot2-min.jpg"
              />
            </div>
          </Col>
          <Col xl={{ span: 4, order: 2 }} lg={{ span: 4, order: 2 }} md={{ span: 6, order: 2 }} sm={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
            <p>An easy-to-use level editor for designing your own Repton 1 levels. It's fun to create your own levels, and if you make some intriguing and innovative levels, we may be interested in publishing your levels for other Repton aficionados to enjoy.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Repton1;
