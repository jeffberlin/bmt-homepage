import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function NewsHome() {
  return (
    <>
      <div className="wrapper">
        <h1>News</h1>
      </div>
      <Container className="news">
        <Row className="justify-content-center">
          <Col>
            <ul>
              <li>
                <Link to="">Purchase Order Policies</Link>
              </li>
              <li>
                <Link to="">New Year's Message</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NewsHome;
