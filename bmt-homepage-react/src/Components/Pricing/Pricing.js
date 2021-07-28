import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BasicTier from './BasicTier';
import AdvancedTier from './AdvancedTier';
import CustomTier from './CustomTier';

function Pricing() {
  return (
    <div className="body-content">
      <div className="wrapper">
				<h1>Pricing</h1>
			</div>
      <Container className="pricing">
        <Row style={{ marginBottom: '2.5rem' }}>
          <BasicTier />
          <AdvancedTier />
        </Row>
        <Row className="justify-content-center">
          <CustomTier />
        </Row>
      </Container>
    </div>
  );
}

export default Pricing;
