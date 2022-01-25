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
            <a href="https://www.bmtmicro.com/images/W9_2022.pdf" download="BMT_Micro_W9_Form_2022.pdf">
              <i className="fas fa-file-download"></i>&nbsp;&nbsp;W9_2022.pdf
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default W9form;
