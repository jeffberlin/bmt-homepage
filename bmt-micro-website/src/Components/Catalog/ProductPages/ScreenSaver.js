import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import ScreenSaverModal from './ScreenSaverModal';

function ScreenSaver() {
  useEffect(() => {
    document.title = "BMT Micro Catalog - ScreenSaver"
  })
  const [modalShow, ScreenSaverModalShow] = useState(false);
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
            <h2>ScreenSaver</h2>
            <p><a href="http://www.hanisch.com/cms/index.php/home_en/screensaver_en" className="catalog-link" rel="noreferrer">Visit Site</a></p>
            <p className="info-section">ScreenSaver 2.6 is an easy-to-use 32-bit screen saver for OS/2 2.x and above, with password protection, DPMS monitor support, DOS and WIN-OS/2 fullscreen support, Sound support, module building toolkit, more than 50 modules included.</p>
          </Col>
        </Row>
        <Row className="justify-content-center info-section">
          <Col xl={4} lg={4} md={6} sm={6} xs={12} className="top-img">
            <div className="product-image text-left">
              <Image
                src="https://www.bmtmicro.com/images/bmt-micro-screensaver1-min.png"
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
              $28.00
            </p>
            <button className="demo-btn" onClick={() => ScreenSaverModalShow(true)}>Download Demo</button>
            <ScreenSaverModal
              show={modalShow}
              onHide={() => ScreenSaverModalShow(false)}
            />
          </Col>
        </Row>
        <Row className="justify-content-center info-section">
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <p>When ScreenSaver is started, it monitors your keyboard and mouse activity in the background. When a settable timeout expires, it runs one of the various saver modules until the user uses the keyboard or mouse again. ScreenSaver has the advantage of low memory consumption and very low CPU usage - this means virtually no performance impact on your normal work.</p>
          </Col>
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <div className="product-image">
              <Image
                fluid
                src="https://www.bmtmicro.com/images/bmt-micro-screensaver2-min.png"
              />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center info-section">
          <Col xl={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }} md={{ span: 6, order: 1 }} sm={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }}>
            <div className="product-image text-left">
              <Image
                fluid
                src="https://www.bmtmicro.com/images/bmt-micro-screensaver3-min.png"
              />
            </div>
          </Col>
          <Col xl={{ span: 4, order: 2 }} lg={{ span: 4, order: 2 }} md={{ span: 6, order: 2 }} sm={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
            <p>ScreenSaver supports OS/2, DOS and WIN-OS/2 fullscreen sessions and features password protection similar to the OS/2 lockup feature.</p>
          </Col>
        </Row>
        <Row className="justify-content-center info-section">
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <p>ScreenSaver has sound support through OS/2's MMPM. You can associate WAVE and MIDI files with various ScreenSaver events.</p>
          </Col>
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <div className="product-image">
              <Image
                fluid
                src="https://www.bmtmicro.com/images/bmt-micro-screensaver4-min.png"
              />
            </div>
          </Col>
        </Row>
        <h4 className="product-features text-center"><u>Features</u></h4>
        <Row className="justify-content-center info-section">
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <ul style={{ listStyleType: 'circle', paddingLeft: '15px' }}>
              <li><p>DPMS monitor support</p></li>
              <li><p>Password protection</p></li>
              <li><p>OS/2, Win-OS/2, and DOS fullscreen support</p></li>
              <li><p>More than 50 modules included</p></li>
            </ul>
          </Col>
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <ul style={{ listStyleType: 'circle', paddingLeft: '15px' }}>
              <li><p>Module building toolkit</p></li>
              <li><p>NUTEK/APMS and DPMS monitor support</p></li>
              <li><p>Sound support</p></li>
              <li><p>Sample source code for do-it-yourself saver modules comes with the distribution</p></li>
            </ul>
          </Col>
        </Row>
        <p className="text-center" style={{ marginBottom: '0' }}>
          <a href="http://www.hanisch.com/cms/index.php/home_en/screensaver_en" target="_blank" rel="noreferrer" className="catalog-link">More Features</a>
        </p>
      </Container>
    </div>
  );
}

export default ScreenSaver;
