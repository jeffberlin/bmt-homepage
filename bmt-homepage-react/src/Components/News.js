import React from 'react';
import Navigation from './Navigation';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';

function News() {
	return (
		<>
			<Navigation />
				<Container fluid className="news">
					<h1>BMT Micro News</h1>
				</Container>
			<Footer />
		</>
	);
}

export default News;