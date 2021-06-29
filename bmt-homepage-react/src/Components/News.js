import React from 'react';
import Navigation from './Navigation';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';

function News() {
	return (
		<>
			{/*<div className="wrapper">
				<h1>News</h1>
			</div>*/}
			<Navigation />
				<Container fluid className="news">
					<Row>
						<Col className="new-year-header">
							<h1>A New Year’s message from BMT Micro</h1>
						</Col>
					</Row>
				</Container>
			<Footer />
		</>
	);
}

export default News;