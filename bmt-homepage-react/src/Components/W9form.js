import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function W9form() {
  return (
    <div className="body-content">
      <div className="wrapper">
				<h1>W-9 Form</h1>
			</div>
      <Container className="w9form">
        <Row>
          <Col>
            <p>If you need to download the W-9 Form, please click the button below.</p>
            <a href="/images/W9_2019.pdf" download>
              <i className="fas fa-file-download"></i>&nbsp;&nbsp;W9_2019.pdf
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default W9form;
