import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Footer() {
	const getYear = () => {
		return new Date().getFullYear()
	}

	const linkStyle = {
		color: 'inherit'
	}

	return (
		<footer className="footer">
			<Container>
				<Row className="justify-content-center" style={{ marginBottom: '2.5rem' }}>
					<Col xl={2} lg={2} md={12} sm={12} xs={12} className="social">
						<h5>BMT Social</h5>
						<p className="facebook"><a href="https://www.facebook.com/bmt.micro" target="_blank" rel="noreferrer">Facebook</a></p>
            <p className="x"><a href="https://x.com/BMTMicro" target="_blank" rel="noreferrer">X</a></p>
            <p className="instagram"><a href="https://www.instagram.com/bmtmicro/" target="_blank" rel="noreferrer">Instagram</a></p>
            <p className="linkedin"><a href="https://www.linkedin.com/company/bmt-micro-wilmington-nc-usa" target="_blank" rel="noreferrer">LinkedIn</a></p>
            <p className="bluesky"><a href="https://bsky.app/profile/bmtmicro.bsky.social" target="_blank" rel="noreferrer">BlueSky</a></p>
					</Col>
					<Col xl={2} lg={2} md={4} sm={4} xs={4} className="footer-menu">
            <h5 className="footer-header">Company</h5>
            <p className="footer-sub-link">
              <Link to="/about" style={linkStyle}>About</Link>
            </p>
            <p className="footer-sub-link">
              <a href="https://blog.bmtmicro.com/" style={linkStyle}>Blog</a>
            </p>
            <p className="footer-sub-link">
              <Link to="/news" style={linkStyle}>News</Link>
            </p>
            <p className="footer-sub-link">
              <Link to="/privacy-policy" style={linkStyle}>Privacy Policy</Link>
            </p>
					</Col>
          <Col xl={2} lg={2} md={4} sm={4} xs={4} className="footer-menu">
            <h5 className="footer-header footer-link"><Link to="/catalog" style={{ marginRight: '1rem', ...linkStyle}}>Catalog</Link></h5>
          </Col>
					<Col xl={2} lg={2} md={4} sm={4} xs={4} className="footer-menu">
            <h5 className="footer-header">Services</h5>
            <p className="footer-sub-link">
              <Link to="/affiliate-program" style={linkStyle}>Affiliate Program</Link>
            </p>
            <p className="footer-sub-link">
              <Link to="/customers" style={linkStyle}>Customers</Link>
            </p>
            <p className="footer-sub-link">
              <Link to="/faq" style={linkStyle}>FAQ</Link>
            </p>
            <p className="footer-sub-link">
              <Link to="/product-overview" style={linkStyle}>Features</Link>
            </p>
            <p className="footer-sub-link">
              <Link to="/pricing" style={linkStyle}>Pricing</Link>
            </p>
            <p className="footer-sub-link">
              <Link to="/w9form" style={linkStyle}>W-9 Form</Link>
            </p>
            <p className="footer-sub-link">
              <a href="https://help.bmtmicro.com/" style={linkStyle}>Help Pages</a>
            </p>
					</Col>
          <Col xl={2} lg={2} md={4} sm={4} xs={4} className="footer-menu">
            <h5 className="footer-header footer-link"><Link to="/contact" style={{ marginRight: '1rem', ...linkStyle}}>Contact</Link></h5>
          </Col>
					<Col xl={2} lg={2} md={4} sm={4} xs={4} className="footer-menu">
            <h5 className="footer-header">Login</h5>
            <p className="footer-sub-link">
              <a href="https://vendors.bmtmicro.com/" style={linkStyle}>Vendors</a>
            </p>
            <p className="footer-sub-link">
              <a href="https://affiliates.bmtmicro.com/" style={linkStyle}>Affiliates</a>
            </p>
            <p className="footer-sub-link">
              <a href="https://customers.bmtmicro.com/" style={linkStyle}>Customers</a>
            </p>
					</Col>
				</Row>
				<Row>
					<Col style={{ textAlign: 'center' }}>
						<p className="copyright">&copy;&nbsp;BMT Micro, Inc. 1992 - {getYear()}</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
