import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

function MoneyQuizCounter() {
  useEffect(() => {
    document.title = "BMT Micro Catalog - Money Quiz-Counter"
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
            <h2>Money Quiz-Counter</h2>
            <p><a href="http://www.satxusasoftware.com/money%20quiz-counter.html" rel="noreferrer" className="catalog-link">Visit Site</a></p>
            <p className="info-section">Money Quiz-Counter is a program with two money quiz challenges and a money counter. The Give Cash is the first quiz game. Count Cash is the second quiz game. The money counter is where you can count cash.</p>
          </Col>
        </Row>
        <Row className="justify-content-center info-section">
          <Col xl={{ span: 4, order: 2 }} lg={{ span: 4, order: 2 }} md={{ span: 6, order: 2 }} sm={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }} style={{ marginBottom: '1.5rem' }}>
            <p className="product-specs">
              <strong>Platform:&nbsp;</strong>
              Windows
              <br />
              <span style={{ fontSize: '.8rem' }}>(Download Demo to purchase)</span>
            </p>
            <p className="product-specs">
              <strong>Price:&nbsp;</strong>
              $14.99
            </p>
            <a href="https://demo.bmtmicro.com/02037/MoneyQuizCounter_Setup.exe">
              <button type="button" className="demo-btn">Download Demo</button>
            </a>
            <p className="product-note">
              <strong>Note:&nbsp;</strong>
              A registration number is required before purchasing this product. Before purchasing, please install the demo file below to obtain this number.
            </p>
          </Col>
          <Col xl={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }} md={{ span: 6, order: 1 }} sm={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }}>
            <div className="product-image text-left">
              <Image
                src="https://www.bmtmicro.com/images/bmt-micro-money-quiz-counter-screenshot1-min.jpg"
                fluid
              />
            </div>
          </Col>
        </Row>
        <h4 className="product-features text-center"><u>Features</u></h4>
        <Row className="justify-content-center info-section">
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <p><strong>Give Cash Quiz game:</strong>&nbsp;When you start the game you will be shown an "item cost" and "pay amount". Select coins and dollar amount to show how much change is given back.</p>
          </Col>
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <div className="product-image">
              <Image
                fluid
                src="https://www.bmtmicro.com/images/bmt-micro-money-quiz-counter-screenshot2-min.jpg"
              />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center info-section">
          <Col xl={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }} md={{ span: 6, order: 1 }} sm={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }}>
            <div className="product-image text-left">
              <Image
                fluid
                src="https://www.bmtmicro.com/images/bmt-micro-money-quiz-counter-screenshot3-min.jpg"
              />
            </div>
          </Col>
          <Col xl={{ span: 4, order: 2 }} lg={{ span: 4, order: 2 }} md={{ span: 6, order: 2 }} sm={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
            <p><strong>Count Cash game:</strong>&nbsp;When you start the game you will be shown coins and dollar amounts. Each coin and dollar will show zero or a nmber of coins or dollars for that coin or dollar. Figure out the total amount and enter the answer.</p>
          </Col>
        </Row>
        <Row className="justify-content-center info-section">
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <p><strong>Cash Counter:</strong>&nbsp;Enter how much money you have in the boxes and see your total. You can save each cash counting session if desired for future reference.</p>
          </Col>
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <div className="product-image">
              <Image
                fluid
                src="https://www.bmtmicro.com/images/bmt-micro-money-quiz-counter-screenshot4-min.jpg"
              />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xl={10} lg={10} md={10} sm={12} xs={12}>
            <p className="info-section">Navigating menus is fast, and very simple to use! You never have to learn or memorize a set of icon pictures, or learn new short cuts. All of that is simplified and easy.</p>
          </Col>
          <Col xl={8} lg={8} md={8} sm={12} xs={12}>
            <div className="product-image">
              <Image
                fluid
                src="https://www.bmtmicro.com/images/bmt-micro-money-quiz-counter-screenshot5-min.jpg"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MoneyQuizCounter;
