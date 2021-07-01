import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Error() {
	return (
		<div className="body-content">
			<Container style={{ paddingTop: '7rem' }}>
				<Row className="align-items-center">
					<Col>
						<h2 style={{ color: '#efa900', letterSpacing: '.5px' }}>Error!</h2>
						<p style={{ color: '#707070', letterSpacing: '.5px' }}>The page you are looking for is not here. Please try again.</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Error;
