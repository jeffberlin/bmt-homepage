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
				<Row className="justify-content-center" style={{ marginBottom: '1.5rem' }}>
					<Col xl={2} lg={2} md={12} sm={12} xs={12} className="social">
						<h5>BMT Social</h5>
						<p className="facebook"><a href="https://www.facebook.com/bmt.micro" target="_blank" rel="noreferrer">Facebook</a></p>
            <p className="twitter"><a href="https://twitter.com/BMTMicro" target="_blank" rel="noreferrer">Twitter</a></p>
            <p className="instagram"><a href="https://www.instagram.com/bmtmicro/" target="_blank" rel="noreferrer">Instagram</a></p>
            <p className="linkedin"><a href="https://www.linkedin.com/company/bmt-micro-wilmington-nc-usa" target="_blank" rel="noreferrer">LinkedIn</a></p>
            <p className="pinterest"><a href="https://www.pinterest.com/bmtmicro/" target="_blank" rel="noreferrer">Pinterest</a></p>
					</Col>
					<Col xl={2} lg={2} md={4} sm={4} xs={4} className=" footer-menu">
						<ul>
							<li><strong><Link to="#" className="disabled-link" style={{ marginRight: '1rem' }}>Company</Link></strong></li>
							<li>
								<Link to="/about" style={linkStyle}>About</Link>
							</li>
							<li>
								<a href="https://blog.bmtmicro.com/" style={linkStyle}>Blog</a>
							</li>
							<li>
								<Link to="/news" style={linkStyle}>News</Link>
							</li>
							<li>
								<Link to="/privacy-policy" style={linkStyle}>Privacy Policy</Link>
							</li>
						</ul>
					</Col>
					<Col xl={2} lg={2} md={4} sm={4} xs={4} className=" footer-menu">
						<ul>
							{/* <li><strong><a href="https://www.bmtmicro.com/bmtcatalog/" style={{ marginRight: '1rem', ...linkStyle}}>Catalog</a></strong></li> */}
							<li>
								<strong>
									<Link to="/catalog" style={{ marginRight: '1rem', ...linkStyle}}>Catalog</Link>
								</strong>
							</li>
							<li><strong><Link to="#" className="disabled-link" style={{ marginRight: '1rem' }}>Services</Link></strong></li>
							<li>
								<Link to="/affiliate-program" style={linkStyle}>Affiliate Program</Link>
							</li>
							<li>
								<Link to="/customers" style={linkStyle}>Customers</Link>
							</li>
							<li>
								<Link to="/faq" style={linkStyle}>FAQ</Link>
							</li>
							<li>
								<Link to="/product-overview" style={linkStyle}>Features</Link>
							</li>
							<li>
								<Link to="/pricing" style={linkStyle}>Pricing</Link>
							</li>
							<li>
								<Link to="/w9form" style={linkStyle}>W-9 Form</Link>
							</li>
							<li>
								<a href="https://help.bmtmicro.com/" style={linkStyle}>Help Pages</a>
							</li>
						</ul>
					</Col>
					<Col xl={2} lg={2} md={4} sm={4} xs={4} className=" footer-menu">
						<ul>
							<li>
								<strong>
									<Link to="/contact" style={{ marginRight: '1rem', ...linkStyle}}>Contact</Link>
								</strong>
							</li>
							<li><strong><Link to="#" className="disabled-link">Login</Link></strong></li>
							<li>
								<a href="https://vendors.bmtmicro.com/" style={linkStyle}>Vendors</a>
							</li>
							<li>
								<a href="https://affiliates.bmtmicro.com/" style={linkStyle}>Affiliates</a>
							</li>
							<li>
								<a href="https://customers.bmtmicro.com/" style={linkStyle}>Customers</a>
							</li>
						</ul>
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
