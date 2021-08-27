import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Banner() {
  return (
    <>
      <Container fluid style={{ borderTop: '1px solid #efa900', backgroundColor: '#195a7c' }} className="banner">
        <Row className="justify-content-center align-items-center" style={{ padding: '2.2rem' }}>
          <Col xl={8} lg={8} md={8} sm={12}>
            <h4>With BMT Micro, there are no hidden costs or setup fees. We have several plans for you to choose from, or we can customize any of our plans to suit your needs</h4>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Banner;
