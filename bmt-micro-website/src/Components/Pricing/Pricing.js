import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BasicTier from './BasicTier';
import AdvancedTier from './AdvancedTier';
import CustomTier from './CustomTier';

function Pricing() {
  useEffect(() => {
		document.title = "BMT Micro - Pricing Plans"
	})
  return (
    <div className="body-content">
      <div className="pricing-background"></div>
      <Container className="pricing">
        <h5 className="black-text">At BMT Micro, we believe in doing what is best for our software suppliers and can custom tailor a plan that works best for you!</h5>
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
