import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AffiliateProgram() {
  useEffect(() => {
		document.title = "BMT Micro - Affiliate Program"
	})
  return (
    <div className="body-content">
      <div className="wrapper">
        <h1>Affiliate Program</h1>
      </div>
      <Container className="affiliates">
        <Row className="justify-content-center">
          <Col xl={12} lg={12} md={12} sm={12} style={{ marginBottom: '2rem' }}>
            <p>All BMT Micro software suppliers are encouraged to participate in the BMT Micro Affiliate Program. This free service provides you, as a developer, with additional channels to promote and distribute your product. There are no additional fees to join, nor is there an additional fee charged by BMT Micro for sales through the affiliate program. You pay only the affiliates for this service. The developer control panel includes administrative tools that allow you to manage affiliate sign-ups, percentages and view sales reports from your affiliates. We can also offer you a customized affiliate management area that is branded with your company/product logos to give your affiliates a seamless transition from your site to managing their affiliate account. Payments to your affiliates are handled by BMT Micro.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xl={4} lg={4} md={4} sm={4} xs={4}>
            <a
              className="affiliates-btn"
              href="https://affiliates.bmtmicro.com/new-affiliate-signup.jsp"
              target="_blank"
              rel="noreferrer"
            >
              Become an Affiliate today!
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AffiliateProgram;
