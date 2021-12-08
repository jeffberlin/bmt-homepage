import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function AddressNmore() {
  return (
    <div className="body-content catalog-bg product-page">
      <Container className="catalog">
        <Row className="justify-content-center">
          <Col xl={10} lg={10} md={10} sm={10}>
            <h2>Address N More</h2>
            <p><a href="http://www.satxusasoftware.com/address_n_more.html">Visit Site</a></p>
            <p>Address N More is a program which allows you to enter your addresses, email, websites, and other information with ease. Also includes a ToDo program and a simple home inventory program.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xl={{ span: 4, order: 2 }} lg={{ span: 4, order: 2 }} md={{ span: 6, order: 2 }} sm={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
            <p className="product-specs">
              <strong>Platform:&nbsp;</strong>
              Windows 9x/2000/XP/Vista
            </p>
            <p className="product-specs">
              <strong>Price:&nbsp;</strong>
              $29.95
            </p>
            <a href="https://demo.bmtmicro.com/02037/Addr2_0_Setup.exe">
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
                src="https://www.bmtmicro.com/bmtcatalog/images/address-screenshot3.jpg"
                fluid
              />
            </div>
          </Col>
        </Row>
        <h4 className="product-features text-center"><u>Features</u></h4>
        <Row className="justify-content-center">
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <p>Store personal addresses, family, friends, business contacts, vendors, service companies, favorite web sites, etc.</p>
            <p>Keep all of your addresses organized by adding categories.</p>
            <p>Add up to four pictures to each address.</p>
          </Col>
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <div className="product-image">
              <Image
                fluid
                src="https://www.bmtmicro.com/bmtcatalog/images/address-screenshot1.jpg"
              />
            </div>
          </Col>
          <Col xl={10} lg={10} md={10} sm={12} xs={12}>
            <p>Use the print selection to print addresses (you can choose personal or business, all, by category, or multiple addreses), mailing labels, envelopes, and return address labels.</p>
          </Col>
          <Col xl={8} lg={8} md={8} sm={12} xs={12}>
            <div className="product-image">
              <Image
                fluid
                src="https://www.bmtmicro.com/bmtcatalog/images/address-screenshot2.jpg"
              />
            </div>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default AddressNmore;
