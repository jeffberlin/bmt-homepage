import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Ideal() {
  return (
    <>
      <Row className="justify-content-center">
        <Col className="news-section" xl={12} lg={12} md={12} sm={12} xs={12} style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('https://www.bmtmicro.com/images/ideal-payments-background.jpg')"}}>
          <h2>iDEAL + BMT Micro</h2>
        </Col>
        <Col className="news-section-text" xl={12} lg={12} md={12} sm={12} xs={12}>
          <p style={{ marginBottom: '4rem' }}>
            New at BMT Micro - we now offer iDEAL as a payment option! iDEAL is a secure and convenient bank transfer payment method. iDEAL is an online payment method that allows consumers to pay via their own bank.
          </p>
        </Col>
      </Row>
    </>
  );
}

export default Ideal;
