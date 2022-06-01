import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

function RavenSkull() {
  useEffect(() => {
    document.title = "BMT Micro Catalog - RavenSkull"
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
            <h2>Ravenskull</h2>
            <p><a href="https://www.superiorinteractive.com/ravenskull/" rel="noreferrer" className="catalog-link">Visit Site</a></p>
            <p className="info-section">A magical quest full of puzzles and mystery, as reality blends with fantasy!</p>
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
            <a href="http://ftp2.bmtmicro.com/ravenskulltrialsetup.exe">
              <button type="button" className="demo-btn">Download Demo</button>
            </a>
          </Col>
          <Col xl={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }} md={{ span: 6, order: 1 }} sm={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }}>
            <div className="product-image text-left">
              <Image
                src="https://www.bmtmicro.com/images/bmt-micro-ravenskull-logo.png"
                fluid
              />
            </div>
          </Col>
        </Row>
        <h4 className="product-features text-center"><u>Features</u></h4>
        <Row className="justify-content-center info-section">
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <p>Two massive castle adventures featuring eight large levels in total. Four character types (male and female versions of each) with their own special abilities. You can choose to be an adventurer, warrior, wizard or elf.</p>
          </Col>
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <div className="product-image">
              <Image
                fluid
                src="https://www.bmtmicro.com/images/bmt-micro-ravenskull-screenshot1-min.jpg"
              />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center info-section">
          <Col xl={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }} md={{ span: 6, order: 1 }} sm={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }}>
            <div className="product-image text-left">
              <Image
                fluid
                src="https://www.bmtmicro.com/images/bmt-micro-ravenskull-screenshot2-min.jpg"
              />
            </div>
          </Col>
          <Col xl={{ span: 4, order: 2 }} lg={{ span: 4, order: 2 }} md={{ span: 6, order: 2 }} sm={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
            <p>RaveScript, a special scripting language, allows you to design your own puzzles to build into your own complete adventures. Create your own adventures using the Adventure Editor, Level Editor, and Tile-Set Editor - for placing your own graphics into the game.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RavenSkull;
