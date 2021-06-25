import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {

	const linkStyle = {
		color: 'inherit'
	}

	return (
		<footer className="footer">
			<Container>
				<Row className="justify-content-center">
					<Col lg={2} md={4} className="social">
						<h5>Connect With Us</h5>
						<p className="facebook"><a href="https://www.facebook.com/bmt.micro">Facebook</a></p>
            <p className="twitter"><a href="https://twitter.com/BMTMicro">Twitter</a></p>
            <p className="instagram"><a href="https://www.instagram.com/bmtmicro/">Instagram</a></p>
            <p className="linkedin"><a href="https://www.linkedin.com/company/bmt-micro-wilmington-nc-usa">LinkedIn</a></p>
            <p className="pinterest"><a href="https://www.pinterest.com/bmtmicro/">Pinterest</a></p>
					</Col>
					<Col lg={6} md={4} className="d-flex justify-content-around footer-menu">
						<ul>
							<li><strong>Company</strong></li>
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
								<Link to="/privacy" style={linkStyle}>Privacy Policy</Link>
							</li>
						</ul>
						<ul>
							<li><strong><a href="https://www.bmtmicro.com/bmtcatalog/" style={linkStyle}>Catalog</a></strong></li>
						</ul>
						<ul>
							<li>
								<strong>
									<Link to="/contact" style={linkStyle}>Contact</Link>
								</strong>
							</li>
						</ul>
						<ul>
							<li><strong>Services</strong></li>
							<li>
								<Link to="/affiliates" style={linkStyle}>Affiliate Program</Link>
							</li>
							<li>
								<Link to="/customers" style={linkStyle}>Customers</Link>
							</li>
							<li>
								<Link to="/faq" style={linkStyle}>FAQ</Link>
							</li>
							<li>
								<Link to="/pricing" style={linkStyle}>Pricing</Link>
							</li>
							<li>
								<Link to="/w9form" style={linkStyle}>W-9 Form</Link>
							</li>
						</ul>
						<ul>
							<li><strong>Login</strong></li>
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
			</Container>
		</footer>
	);
}

export default Footer;