import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Success() {
	useEffect(() => {
		document.title = "BMT Micro - Success"
	})
	return (
		<div className="body-content">
			<Container style={{ paddingTop: '7rem' }}>
				<Row className="align-items-center">
					<Col>
						<h2 style={{ color: '#efa900', letterSpacing: '.5px' }}>Success!</h2>
						<p style={{ color: '#707070', letterSpacing: '.5px' }}>Your email has been sent and someone should contact you soon! Continue browsing the BMT Micro website <Link to='/'>here</Link>.</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Success;
