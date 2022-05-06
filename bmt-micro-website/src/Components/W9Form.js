import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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
          <Col xl={8} lg={8}>
            <p>If you need to download the W-9 Form, please click the button below.</p>
            {/* <div className="w9-btn"> */}
            <a className="w9-btn" href="https://www.bmtmicro.com/images/W9_2022.pdf" download="BMT_Micro_W9_Form_2022.pdf" target="_blank">
              <i className="fas fa-file-download"></i>&nbsp;&nbsp;W9_Form_2022.pdf
            </a>
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default W9Form;
