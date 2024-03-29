import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import { LinkContainer } from 'react-router-bootstrap';

function Navigation() {
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
							<LinkContainer to="/" exact>
								<Nav.Link>Home</Nav.Link>
							</LinkContainer>
							<NavDropdown
								title="Company"
								id="nav-dropdown"
							>
								<LinkContainer to="/about">
									<Nav.Link className="dropdown-style">About</Nav.Link>
								</LinkContainer>
								<Nav.Link
									href="https://blog.bmtmicro.com/"
									rel="noopener"
									active={false}
									className="dropdown-style"
								>
									Blog
								</Nav.Link>
								<LinkContainer to="/news">
									<Nav.Link className="dropdown-style">News</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/privacy">
									<Nav.Link className="dropdown-style">Privacy Policy</Nav.Link>
								</LinkContainer>
							</NavDropdown>
							<LinkContainer to="/catalog">
								<Nav.Link>Catalog</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/contact">
								<Nav.Link>Contact</Nav.Link>
							</LinkContainer>
							<NavDropdown
								title="Services"
								id="nav-dropdown"
							>
								<LinkContainer to="/affiliates">
									<Nav.Link className="dropdown-style">Affiliate Program</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/customers">
									<Nav.Link className="dropdown-style">Customers</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/faqs">
									<Nav.Link className="dropdown-style">FAQ</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/product-overview">
									<Nav.Link className="dropdown-style">Features</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/pricing">
									<Nav.Link className="dropdown-style">Pricing</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/w9form">
									<Nav.Link className="dropdown-style">W-9 Form</Nav.Link>
								</LinkContainer>
								<Nav.Link
									href="https://help.bmtmicro.com/"
									className="dropdown-style"
									active={false}
									rel="noopener"
									target="_blank"
								>
									Help Pages
								</Nav.Link>
							</NavDropdown>
							<NavDropdown
								title="Login"
								id="nav-dropdown"
							>
								<Nav.Link
									href="https://vendors.bmtmicro.com/"
									active={false}
									rel="noopener"
									className="dropdown-style"
								>
									Vendors
								</Nav.Link>
								<Nav.Link
									href="https://affiliates.bmtmicro.com/"
									active={false}
									rel="noopener"
									className="dropdown-style"
								>
									Affiliates
								</Nav.Link>
								<Nav.Link
									href="https://customers.bmtmicro.com/"
									active={false}
									rel="noopener"
									className="dropdown-style"
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
