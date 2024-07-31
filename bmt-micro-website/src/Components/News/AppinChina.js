import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AppInChina() {
  return (
    <>
      <Row className="justify-content-center">
        <Col className="news-section" xl={12} lg={12} md={12} sm={12} xs={12} style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('https://www.bmtmicro.com/images/bmt-appinchina-news-background.jpg')"}}>
          <h2>BMT Micro Partners with AppInChina</h2>
        </Col>
        <Col className="news-section-text" xl={12} lg={12} md={12} sm={12} xs={12}>
          <p style={{ marginBottom: '4rem' }}>
            FOR IMMEDIATE RELEASE: 7/31/2024
            <br/>
            BMT Micro, Inc.
            <br/>
            <br/>
            <b>Wilmington, NC:</b> BMT Micro today announced a new partnership with AppInChina, a Beijing, China based company that helps overseas companies with data compliance and license registration in the Chinese market. This partnership will allow BMT Micro to offer software reselling services to Chinese software developers and suppliers in the Chinese market.
            <br/>
            <br/>
            <b>About BMT Micro:</b> BMT Micro is a small company based out of Wilmington, NC that provides software distribution and order fulfillment services worldwide. BMT Micro provides scalable services for digital delivery systems and online sales, and is dedicated to helping software developers maximize their visibility and profit.
            <br/>
            <br/>
            <b>About AppInChina:</b> AppInChina offers a suite of services including legal compliance, customer service, localization, and game licensing to ensure that their clients are successful in the Chinese market.
          </p>
        </Col>
      </Row>
    </>
  );
}

export default AppInChina;
