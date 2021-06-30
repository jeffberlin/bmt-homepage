import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import POPolicies from './News/PurchaseOrderPolicies';
import Footer from './Footer';



function News() {
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<>
			<Navigation />
			<div className="wrapper">
				<h1>News</h1>
			</div>
			<Container className="news">
				<Row className="justify-content-center">
					<Col>
						<ul>
							<li onClick={() => setModalShow(true)}>
								Purchase Order Policies
							</li>
							<li>
								New Year's Message
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
			<Footer />

		{/* Modal for Policies */}
			<POPolicies
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
		</>
	);
}

export default News;