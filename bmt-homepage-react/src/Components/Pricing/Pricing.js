import React, { lazy } from 'react';
import { Container, Row } from 'react-bootstrap';

const BasicTier = lazy(() => import('./BasicTier'));
const AdvancedTier = lazy(() => import('./AdvancedTier'));
const CustomTier = lazy(() => import('./CustomTier'));

function Pricing() {
  return (
    <div className="body-content">
      <div className="pricing-background"></div>
      <Container className="pricing">
        <h5 className="text-center">At BMT Micro, we believe in doing what is best for our vendors and can custom tailor a plan that works best for you!</h5>
        <Row>
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
