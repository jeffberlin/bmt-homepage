import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AppInChina() {
  return (
    <>
      <Row className="justify-content-center">
        <Col className="news-section" xl={12} lg={12} md={12} sm={12} xs={12} style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('https://www.bmtmicro.com/images/bmt-appinchina-news-background.jpg')"}}>
          <h2>Greater Wilmington Business Journal</h2>
        </Col>
        <Col className="news-section-text" xl={12} lg={12} md={12} sm={12} xs={12}>
          <p style={{ marginBottom: '4rem' }}>
            <b style={{ fontSize: '.9rem'}}>Kirkpatrick, Randall. "BMT Micro Partners With Chinese Firm to Expand Market." WilmingtonBiz, 21 Aug. 2024, <a href='https://wilmingtonbiz.com/technology/2024/08/21/bmt_micro_partners_with_chinese_firm_to_expand_market/25883' target='_blank' rel='author'>View the Article</a></b>
            <br/><br/>
            Wilmington-based BMT Micro recently announced a partnership with Beijing-based AppinChina for prospective entry into the Chinese market. 
            <br/><br/>
            BMT Micro provides software distribution and order fulfillment services worldwide, while AppinChina helps overseas companies with data compliance and license registration in the Chinese market. This partnership will allow BMT Micro to offer software reselling services to Chinese software developers and suppliers in the Chinese market, according to company officials.
            <br/><br/>
            More broadly, BMT Micro provides scalable services for digital delivery systems and online sales and is dedicated to helping software developers maximize their visibility and profit.
            <br/><br/>
            BMT’s coming expansion is a natural outgrowth of the company’s heightening interest in the market. 
            <br/><br/>
            “Globally, we have been involved in the European and Australian market for a while,” said COO and vice president Marina Nielsen, “but for the last five years, we have been thinking about how we could break through into the market in China.
            <br/><br/>
            “It’s a difficult business environment with a lot of obstacles and regulations,” she added. “Navigating all of those challenges, for a company outside of China, is very time-consuming, costly and a process with a long learning curve that a Chinese company like AppinChina can greatly shorten.”
            <br/><br/>
            The road to narrowing down and then selecting AppinChina was simplified by working with the experts at the Small Business and Technology Development Center (SBTDC) at the University of North Carolina Wilmington, according to the company. The center connected BMT with information with research done by U.S. Commercial Services, part of the U.S Department of Commerce.
            <br/><br/>
            “You have to be careful who to trust on the other end, and it can be complicated,” Nielsen said. “Vetting is very important, so that one can make the right decision based on credible information. And whoever you do choose to partner with, it’s important they are experienced, honest experts on-site. We’re looking for Chinese developers who are interested in selling but don’t have the online and digital delivery resources that we can provide.”
            <br/><br/>
            BMT Micro was purchased in 2013 by Nielsen and her husband, Peter, who as the company’s main programmer created all of its proprietary systems. The company currently has five employees and one outside contractor.
            <br/><br/>
            “We’re kind of Wilmington’s best-kept secret, and we’re so gratified to be here,” Marina Nielsen said. “And the explosive growth of artificial intelligence is one exciting but unpredictable element. We just know that we’ll play a role in it.”
          </p>
        </Col>
      </Row>
    </>
  );
}

export default AppInChina;
