import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InChargeModal from './InChargeModal';

function InCharge() {
  const [modalShow, InChargeModalShow] = useState(false);
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
            <h2>In Charge!</h2>
            <p><a href="https://www.bmtmicro.com/incharge" className="catalog-link">Visit Site</a></p>
            <p className="info-section">The secret to financial security is financial management. If you do not control your expenses and intelligently manage your assets and liabilities, you can not grow your wealth. The key to financial management is in having a comprehensive "system" and consistently and rigorously applying it in managing your finances.</p>
          </Col>
        </Row>
        <Row className="justify-content-center info-section">
          <Col xl={4} lg={4} md={6} sm={6} xs={12} className="top-img">
            <div className="product-image text-left">
              <Image
                src="https://www.bmtmicro.com/images/bmt-micro-in-charge-logo.png"
                fluid
              />
            </div>
          </Col>
          <Col xl={4} lg={4} md={6} sm={6} xs={12} style={{ marginBottom: '1.5rem' }}>
            <p className="product-specs">
              <strong>Platform:&nbsp;</strong>
              Windows 95/98/NT (4.0), OS/2
            </p>
            <p className="product-specs">
              <strong>Price:&nbsp;</strong>
              $19.95
            </p>
            <button className="demo-btn" onClick={() => InChargeModalShow(true)}>Download Demo</button>
            <InChargeModal
              show={modalShow}
              onHide={() => InChargeModalShow(false)}
            />
          </Col>
        </Row>
        <Row className="justify-content-center info-section">
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <p>In Charge provides additional functions for tracking net worth, cash flow analysis, and cash flow planning. A full set of utilities are included for such functions as importing and exporting data, two calculators, a notes facility, a calendar, and currency conversion functions.</p>
          </Col>
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <div className="product-image">
              <Image
                fluid
                src="https://www.bmtmicro.com/images/bmt-micro-in-charge-screenshot1-min.jpg"
              />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center info-section">
          <Col xl={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }} md={{ span: 6, order: 1 }} sm={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }}>
            <div className="product-image text-left">
              <Image
                fluid
                src="https://www.bmtmicro.com/images/bmt-micro-in-charge-screenshot2-min.png"
              />
            </div>
          </Col>
          <Col xl={{ span: 4, order: 2 }} lg={{ span: 4, order: 2 }} md={{ span: 6, order: 2 }} sm={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
            <p>Multinational support is provided so the user may select the currency in which to keep individual accounts, assets, and liabilities. InCharge automatically handles currency conversion when moving funds between accounts or combining accounts, assets, and liabilities for reports.</p>
          </Col>
        </Row>
        <Row className="justify-content-center info-section">
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <p>In Charge interfaces with many other popular applications including CheckFree, TurboTax, Prodigy, and CompuServe. If you are migrating to InCharge from Quicken, InCharge directly imports the Quicken accounts and categories via QIF files.</p>
          </Col>
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <div className="product-image">
              <Image
                fluid
                src="https://www.bmtmicro.com/images/bmt-micro-in-charge-screenshot3-min.png"
              />
            </div>
          </Col>
        </Row>
        <h4 className="product-features text-center"><u>Features</u></h4>
        <Row className="justify-content-center info-section">
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <ul style={{ listStyleType: 'circle', paddingLeft: '15px' }}>
              <li><p>Account management (checking, credit card, stock margin, etc.)</p></li>
              <li><p>Insurance management</p></li>
              <li><p>Property management (personal, real, and home inventory)</p></li>
              <li><p>Business management (invoicing/billing, order entry, inventory, and sales analysis)</p></li>
            </ul>
          </Col>
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <ul style={{ listStyleType: 'circle', paddingLeft: '15px' }}>
              <li><p>Bill management (payables/receivables) with support for CheckFree electronic bill payment)</p></li>
              <li><p>Budget management</p></li>
              <li><p>Securities management (stocks, bond, mutual funds, etc.)</p></li>
              <li><p>Tax management</p></li>
            </ul>
          </Col>
        </Row>
        <p className="text-center" style={{ marginBottom: '0' }}>
          <a href="https://www.bmtmicro.com/incharge" target="_blank" rel="noreferrer" className="catalog-link">More Features</a>
        </p>
      </Container>
    </div>
  );
}

export default InCharge;
