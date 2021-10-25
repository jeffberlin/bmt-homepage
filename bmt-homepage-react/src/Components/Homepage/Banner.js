import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Banner() {
  return (
    <>
      <Container fluid className="banner">
        <Row className="justify-content-center align-items-center">
          <Col xl={8} lg={10} md={12} sm={12}>
            <h4>No hidden costs or setup fees. We have several plans for you to choose from, or we can customize any of our plans to suit your needs</h4>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Banner;
