import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

function PersonalTimeKeeper() {
  useEffect(() => {
    document.title = "BMT Micro Catalog - Personal Time Keeper"
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
            <h2>Personal Time Keeper</h2>
            <p><a href="http://www.satxusasoftware.com/personaltimekeeper2.html" className="catalog-link" rel="noreferrer">Visit Site</a></p>
            <p className="info-section">Personal Time Keeper 2.0 is a program for people who need help keeping track of their time and cost per hours or minutes, whether at work or working on your own. It is easy and simple to use.</p>
          </Col>
        </Row>
        <Row className="justify-content-center info-section">
          <Col xl={4} lg={4} md={6} sm={6} xs={12} className="top-img">
            <div className="product-image text-left">
              <Image
                src="https://www.bmtmicro.com/images/bmt-micro-ptk-screenshot1-min.jpg"
                fluid
              />
            </div>
          </Col>
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <p className="product-specs">
              <strong>Platform:&nbsp;</strong>
              Windows
            </p>
            <p className="product-specs">
              <strong>Price:&nbsp;</strong>
              $29.99
            </p>
            <a href="https://demo.bmtmicro.com/02037/Ptk2_0setup.exe">
              <button type="button" className="demo-btn" >Download Demo</button>
            </a>
            <p className="product-note"><strong>Note:</strong> A registration number is required before purchasing this product. Before purchasing, please install the demo file below to obtain this number.</p>
          </Col>
        </Row>
        <h4 className="product-features text-center"><u>Features</u></h4>
        <Row className="justify-content-center info-section">
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <p>You enter a job file name, job file name description, and your dollar amount that you charge.</p>
          </Col>
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <div className="product-image">
              <Image
                fluid
                src="https://www.bmtmicro.com/images/bmt-micro-ptk-screenshot2-min.jpg"
              />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center info-section">
          <Col xl={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }} md={{ span: 6, order: 1 }} sm={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }}>
            <div className="product-image text-left">
              <Image
                fluid
                src="https://www.bmtmicro.com/images/bmt-micro-ptk-screenshot3-min.jpg"
              />
            </div>
          </Col>
          <Col xl={{ span: 4, order: 2 }} lg={{ span: 4, order: 2 }} md={{ span: 6, order: 2 }} sm={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
            <p>You can also edit the date, start time, and end time at anytime to make corrections.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xl={10} lg={10} md={10} sm={12} xs={12}>
            <p className="info-section">Use the print utility to print all hours worked on jobs, selected jobs, all files within a date range, or selected jobs within a date range. You can also print a summary that shows total hours and cost, as well as exporting to a text file!</p>
          </Col>
          <Col xl={8} lg={8} md={8} sm={12} xs={12}>
            <div className="product-image">
              <Image
                fluid
                src="https://www.bmtmicro.com/images/bmt-micro-ptk-screenshot4-min.jpg"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PersonalTimeKeeper;
