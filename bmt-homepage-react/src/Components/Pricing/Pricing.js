import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BasicTier from './BasicTier';
import AdvancedTier from './AdvancedTier';

function Pricing() {
  return (
    <div className="body-content">
      <div className="wrapper">
				<h1>Pricing</h1>
			</div>
      <Container className="pricing">
        <Row>
          <BasicTier />
          <AdvancedTier />
        </Row>
      </Container>
    </div>
  );
}

export default Pricing;
