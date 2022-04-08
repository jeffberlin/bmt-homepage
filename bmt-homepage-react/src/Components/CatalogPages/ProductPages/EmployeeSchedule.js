import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

function EmployeeSchedule() {
  useEffect(() => {
    document.title = "BMT Micro Catalog - Employee Schedule"
  })
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
            <h2>Employee Schedule</h2>
            <p><a href="http://www.satxusasoftware.com/employee_schedule.html" rel="noreferrer" className="catalog-link">Visit Site</a></p>
            <p className="info-section">Employee work schedule for 10 stores with unlimited employees for each store. Create and print out your employee work schedule for a week or more. Easy employee work scheduling for restaurant, food service, retail, health care, office, etc. Arrange your employees in any order.</p>
          </Col>
        </Row>
        <Row className="justify-content-center info-section">
          <Col xl={{ span: 4, order: 2 }} lg={{ span: 4, order: 2 }} md={{ span: 6, order: 2 }} sm={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }} style={{ marginBottom: '1.5rem' }}>
            <p className="product-specs">
              <strong>Platform:&nbsp;</strong>
              Windows 7, 8, 10
              <br />
              <span style={{ fontSize: '.8rem' }}>*Minimum display resolution 1366x767</span>
            </p>
            <p className="product-specs">
              <strong>Price:&nbsp;</strong>
              $29.99
            </p>
            <a href="https://demo.bmtmicro.com/02037/ES_Setup.exe">
              <button type="button" className="demo-btn">Download Demo</button>
            </a>
          </Col>
          <Col xl={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }} md={{ span: 6, order: 1 }} sm={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }}>
            <div className="product-image text-left">
              <Image
                src="https://bmtmicro.com/images/bmt-micro-employee-schedule-screenshot1-min.jpg"
                fluid
              />
            </div>
          </Col>
        </Row>
        <h4 className="product-features text-center"><u>Features</u></h4>
        <Row className="justify-content-center info-section">
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <p>Improve communication with your employees, by printing a schedule, or emailing schedules.</p>
            <p>Once you have your first week schedule done it is easy to make more schedules. Archive the current schedule and then just change the current week date and edit.</p>
          </Col>
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <div className="product-image">
              <Image
                fluid
                src="https://bmtmicro.com/images/bmt-micro-employee-schedule-screenshot2-min.jpg"
              />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center info-section">
          <Col xl={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }} md={{ span: 6, order: 1 }} sm={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }}>
            <div className="product-image text-left">
              <Image
                fluid
                src="https://bmtmicro.com/images/bmt-micro-employee-schedule-screenshot4-min.jpg"
              />
            </div>
          </Col>
          <Col xl={{ span: 4, order: 2 }} lg={{ span: 4, order: 2 }} md={{ span: 6, order: 2 }} sm={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
            <p>Monitor work hours for employee totals for each week.</p>
            <p>Get each employee totals and employee reports from any archived schedules for any date range with totals for selected stores.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xl={10} lg={10} md={10} sm={12} xs={12}>
            <p className="info-section text-center">Perpetual license, no monthly or annual fees, or fee on number of employees.</p>
          </Col>
          <Col xl={8} lg={8} md={8} sm={12} xs={12}>
            <div className="product-image">
              <Image
                fluid
                src="https://bmtmicro.com/images/bmt-micro-employee-schedule-screenshot3-min.jpg"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EmployeeSchedule;
