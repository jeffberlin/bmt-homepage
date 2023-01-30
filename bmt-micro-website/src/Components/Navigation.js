import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import { LinkContainer } from 'react-router-bootstrap';

function Navigation() {
	const dropdownNavStyle = {
		color: 'rgba(0, 0, 0, .5)',
	}
	return (
		<>
			<Navbar
				fixed="top"
				expand="md"
				collapseOnSelect
			>
				<Container>
					<Navbar.Brand href="/">
						<Image
							src="https://www.bmtmicro.com/images/bmt-micro-nav-logo-min.png"
							alt="BMT Micro, Inc. Logo"
							width={120}
							className="d-inline-block"
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
						<Nav>
							<LinkContainer to="/">
								<Nav.Link className="main-link" eventKey="1">
									Home
								</Nav.Link>
							</LinkContainer>
							<NavDropdown
								title="Company"
								id="nav-dropdown"
								className="main-link"
							>
								<LinkContainer to="about" style={dropdownNavStyle}>
									<Nav.Link className="dropdown-style" eventKey="2.1">
										About
									</Nav.Link>
								</LinkContainer>
								<Nav.Link
									href="https://blog.bmtmicro.com/"
									rel="noopener"
									active={false}
									className="dropdown-style"
									style={dropdownNavStyle}
								>
									Blog
								</Nav.Link>
								<LinkContainer to="news" style={dropdownNavStyle}>
									<Nav.Link className="dropdown-style" eventKey="2.3">
										News
									</Nav.Link>
								</LinkContainer>
								<LinkContainer to="guarantee" style={dropdownNavStyle}>
									<Nav.Link className="dropdown-style" eventKey="2.5">
										Our Guarantee
									</Nav.Link>
								</LinkContainer>
								<LinkContainer to="privacy-policy" style={dropdownNavStyle}>
									<Nav.Link className="dropdown-style" eventKey="2.4">
										Privacy Policy
									</Nav.Link>
								</LinkContainer>
							</NavDropdown>
							<LinkContainer to="catalog">
								<Nav.Link className="main-link" eventKey="3">
									Catalog
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to="contact">
								<Nav.Link className="main-link" eventKey="4">
									Contact
								</Nav.Link>
							</LinkContainer>
							<NavDropdown
								title="Services"
								id="nav-dropdown"
								className="main-link"
							>
								<LinkContainer to="affiliate-program" style={dropdownNavStyle}>
									<Nav.Link className="dropdown-style" eventKey="5.1">
										Affiliate Program
									</Nav.Link>
								</LinkContainer>
								<LinkContainer to="customers" style={dropdownNavStyle}>
									<Nav.Link className="dropdown-style" eventKey="5.2">
										Customers
									</Nav.Link>
								</LinkContainer>
								<LinkContainer to="faq" style={dropdownNavStyle}>
									<Nav.Link className="dropdown-style" eventKey="5.3">
										FAQ
									</Nav.Link>
								</LinkContainer>
								<LinkContainer to="product-overview" style={dropdownNavStyle}>
									<Nav.Link className="dropdown-style" eventKey="5.4">
										Features
									</Nav.Link>
								</LinkContainer>
								<LinkContainer to="pricing" style={dropdownNavStyle}>
									<Nav.Link className="dropdown-style" eventKey="5.5">
										Pricing
									</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/w9form" style={dropdownNavStyle}>
									<Nav.Link className="dropdown-style" eventKey="5.6">
										W-9 Form
									</Nav.Link>
								</LinkContainer>
								<Nav.Link
									href="https://help.bmtmicro.com/"
									className="dropdown-style"
									active={false}
									rel="noopener"
									target="_blank"
									style={dropdownNavStyle}
								>
									Help Pages
								</Nav.Link>
                <Nav.Link
                  href="https://vendors.bmtmicro.com/NewSignup/GenericVendorAgreement.pdf"
                  className="dropdown-style"
                  active={false}
                  rel="noopener"
                  target="_blank"
                  style={dropdownNavStyle}
                >
                  Vendor Agreement
                </Nav.Link>
							</NavDropdown>
							<NavDropdown
								title="Login"
								id="nav-dropdown"
								className="main-link"
							>
								<Nav.Link
									href="https://vendors.bmtmicro.com/"
									active={false}
									rel="noopener"
									className="dropdown-style"
									style={dropdownNavStyle}
								>
									Vendors
								</Nav.Link>
								<Nav.Link
									href="https://affiliates.bmtmicro.com/"
									active={false}
									rel="noopener"
									className="dropdown-style"
									style={dropdownNavStyle}
								>
									Affiliates
								</Nav.Link>
								<Nav.Link
									href="https://customers.bmtmicro.com/"
									active={false}
									rel="noopener"
									className="dropdown-style"
									style={dropdownNavStyle}
								>
									Customers
								</Nav.Link>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default Navigation;
