import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class W9form extends Component {
  componentDidMount() {
		document.title = "BMT Micro - W9 Form"
	}
  render() {
    return (
      <div className="body-content">
        <div className="wrapper">
  				<h1>W-9 Form</h1>
  			</div>
        <Container className="w9form">
          <Row>
            <p>If you need to download the W-9 Form, please click the button below.</p>
          </Row>
          <Row>
            <a href="https://www.bmtmicro.com/images/W9_2022.pdf" download="BMT_Micro_W9_Form_2022.pdf">
              <i className="fas fa-file-download"></i>&nbsp;&nbsp;W9_2022.pdf
            </a>
          </Row>
        </Container>
      </div>
    );
  }
}

export default W9form;
