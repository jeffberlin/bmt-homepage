import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

function WordpressPlugin() {
  return (
    <Row className="justify-content-center align-items-center product-overview-item">
      <Col xl={{ span: 6, order: 1 }} lg={{ span: 6, order: 1 }} md={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} xs={{ span: 12, order: 2 }}  className="text-center overview-img-col">
        <Image
          src="../images/bmt-micro-wordpress-plugin-image.png"
        />
      </Col>
      <Col xl={{ span: 6, order: 2 }} lg={{ span: 6, order: 2 }} md={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }}>
        <h2>WordPress Plugin</h2>
        <p>
          For all Wordpress websites, we have a proprietary BMT Micro Shopping Cart Plugin and integrates into the WordPress theme.
          <br/>
          <a href="https://help.bmtmicro.com/plugin/" target="_blank" rel="noreferrer" className="plugin-btn"><span>Learn More</span>&nbsp;<i className="fas fa-arrow-right"></i></a>
        </p>
      </Col>
    </Row>
  );
}

export default WordpressPlugin;
