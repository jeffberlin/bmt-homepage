import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function W9Form() {
  useEffect(() => {
		document.title = "BMT Micro - W9 Form"
	})
  return (
    <div className="body-content">
      <div className="wrapper">
				<h1>W-9 Form</h1>
			</div>
      <Container className="w9form">
        <Row className="justify-content-center">
          <Col xl={8} lg={8} md={12} sm={12} xs={12 }>
            <p>If you need to download the W-9 Form, please click the button below.</p>
            <a className="w9-btn" href="https://www.bmtmicro.com/images/W9_2024.pdf" download="BMT_Micro_W9_Form_2024.pdf">
              <i className="fas fa-file-download"></i>&nbsp;&nbsp;W9_Form_2024.pdf
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default W9Form;
