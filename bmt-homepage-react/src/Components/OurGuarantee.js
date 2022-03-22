import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class OurGuarantee extends Component {
  componentDidMount() {
		document.title = "BMT Micro - Our Guarantee"
	}
  render() {
    return (
      <div className="body-content">
        <div className="wrapper">
          <h1>Our Guarantee</h1>
        </div>
        <Container className="affiliates">
          <Row className="justify-content-center">
            <Col xl={12} lg={12} md={12} sm={12} style={{ marginBottom: '2rem' }}>
              <p>The majority of the software sold by BMT Micro is distributed on a try-before-you-buy basis which eliminates virtually all situations where a refund is requested due to the fact that the opportunity to thoroughly evaluate a product is made before the product is purchased. We strongly encourage you to try the software you are purchasing before you buy it. If you purchase a product you have tried and still have discovered problems, please contact the developer or technical support first. In most cases, a solution is available and our experience shows that software developers are eager to help you solve any problems you might have. In the unlikely event you purchase a product you have tried prior to purchasing and have been in contact with the developer of the software to attempt a resolution, we do offer a 30-day refund policy. The 30 day period begins from the date of the purchase and runs 30 consecutive days, including weekends and holidays.</p>
              <p>We offer the same refund policy on software that is not available on a try-before-you-buy basis, however we still ask that you contact the software developer with any issues prior to requesting a refund.</p>
              <p>So to recap: After purchasing, if you have any problems you should always first attempt to resolve them with the developer. If within 30 days of purchase you are not able to solve any post-sale issues, contact us and we will gladly assist you.</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default OurGuarantee;
