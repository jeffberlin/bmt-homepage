import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function VoiceMemberships() {
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
            <h2>Virtual OS/2 International Consumer Education</h2>
            <p><a href="http://www.os2voice.org/" className="catalog-link">Visit Site</a></p>
            <p className="info-section">Virtual OS/2 International Consumer Education organized in 1997 as a non-profit virtual on-line user group which was formed by a small group of OS/2 users united with a common goal for the advancement of OS/2. Through education, promotion, and marketing we want to increase the public awareness/knowledge of OS/2 and see it become more widely recognized.</p>
          </Col>
        </Row>
        <Row className="justify-content-center info-section">
          <Col xl={4} lg={4} md={6} sm={6} xs={12} className="top-img">
            <div className="product-image text-left">
              <Image
                src="https://www.bmtmicro.com/images/bmt-micro-voice-logo-min.png"
                fluid
              />
            </div>
          </Col>
          <Col xl={4} lg={4} md={6} sm={6} xs={12} style={{ marginBottom: '1.5rem' }}>
            <p className="product-specs">
              <strong>Platform:&nbsp;</strong>
              OS/2
            </p>
            <p className="product-specs">
              <strong>Price:&nbsp;</strong>
              $25.00 - $200.00
            </p>
          </Col>
        </Row>
        <h4 className="product-features text-center"><u>Features</u></h4>
        <Row className="justify-content-center info-section">
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <ul style={{ listStyleType: 'circle', paddingLeft: '15px' }}>
              <li><p>Serves as a virtual, on-line user group for OS/2 users, without a local user group, and to any other OS/2 users interested in VOICE.</p></li>
              <li><p>Promotes OS/2 to the SOHO [small office/home office] consumer and to general computer users.</p></li>
            </ul>
          </Col>
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <ul style={{ listStyleType: 'circle', paddingLeft: '15px' }}>
              <li><p>Provides an effective communication channel between members, user groups, ISV's (independent software venders), and IBM.</p></li>
              <li><p>To help OS/2 User Groups organize and promote their activities.</p></li>
            </ul>
          </Col>
        </Row>
        <p className="text-center" style={{ marginBottom: '0' }}>
          <a href="http://www.os2voice.org/" target="_blank" rel="noreferrer" className="catalog-link">More Features</a>
        </p>
      </Container>
    </div>
  );
}

export default VoiceMemberships;
