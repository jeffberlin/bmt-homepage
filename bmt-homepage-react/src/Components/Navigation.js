import React, { Component } from 'react';
import { Container, Navbar, Image, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Navigation extends Component {

	

	render() {

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
								src="./images/bmt-logo-2.png"
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
									id=""
									
								>
									<LinkContainer to="/about">
										<Nav.Link className="dropdown-style">About</Nav.Link>
									</LinkContainer>
								</NavDropdown>
								<Nav.Link
									href="https://www.bmtmicro.com/bmtcatalog/"
									active={false}
									rel="noopener"
								>
									Catalog
								</Nav.Link>
								<LinkContainer to="/contact">
									<Nav.Link>Contact</Nav.Link>
								</LinkContainer>
								<NavDropdown
									title="Services"
									id=""
									
								>
									<LinkContainer to="/affiliates">
										<Nav.Link className="dropdown-style">Affiliate Program</Nav.Link>
									</LinkContainer>
								</NavDropdown>
								<NavDropdown
									title="Login"
									id=""
								>
									<Nav.Link
										href="https://vendors.bmtmicro.com/"
										active={false}
										rel="noopener"
									>
										Vendors
									</Nav.Link>
									<Nav.Link
										href="https://affiliates.bmtmicro.com/"
										active={false}
										rel="noopener"
									>
										Affiliates
									</Nav.Link>
									<Nav.Link
										href="https://customers.bmtmicro.com/"
										active={false}
										rel="noopener"
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
}

export default Navigation;