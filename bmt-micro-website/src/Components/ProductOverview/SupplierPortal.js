import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function SupplierPortal() {
  return (
    <Row className="justify-content-center align-items-center">
      <Col xl={6} lg={6} md={12} sm={12}>
        <h2>Supplier Portal</h2>
        <p>With our supplier portal, you can manage all products, track detailed sales information, edit account information, add users, and much more. </p>
      </Col>
      <Col className="text-center screenshot overview-img-col">
        <Image
          src="https://www.bmtmicro.com/images/bmt-micro-vendors-area-screenshot-min.jpg"
        />
      </Col>
    </Row>
  );
}

export default SupplierPortal;
