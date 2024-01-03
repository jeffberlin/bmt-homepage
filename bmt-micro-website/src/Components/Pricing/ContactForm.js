import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function ContactForm() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    NAME: '',
    COMPANY: '',
    EMAIL: '',
    PHONE: '',
    DESCRIPTION: '',
  });

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    // Redirect to the specified NEXT_PAGE
    navigate('/success');
  };

  return (
    <Col lg={6} className="contact-form">
      <Form
        name="contactbmt"
        method="post"
        action="https://vendors.bmtmicro.com/servlets/System.EMailTemplate"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="RECIPIENT" value="mdaemon@bmtmicro.com" />
        <input type="hidden" name="SUBJECT" value="Contact / Scheduling Request" />
        <input type="hidden" name="EMAILTEMPLATE" value="https://vendors.bmtmicro.com/contactbmt_emailtemplate2.txt" />
        <input type="hidden" name="REDIRECT" value="0" />
        <input type="hidden" name="NEXT_PAGE" value="https://www.bmtmicro.com/success" />
        <input type="hidden" name="ERROR_PAGE" value="https://www.bmtmicro.com/error" />
        <Form.Group
          as={Row}
          className="mb-3 mt-4"
          controlId="formHorizontalName"
        >
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="NAME"
              placeholder="John Doe"
              value={inputValue.NAME}
              onChange={handleInputChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalEmail"
        >
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="EMAIL"
              placeholder="john@example.com"
              value={inputValue.EMAIL}
              onChange={handleInputChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalCompany"
        >
          <Form.Label column sm={2}>
            Company
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="COMPANY" 
              placeholder="Doe Software Inc."
              value={inputValue.COMPANY}
              onChange={handleInputChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPhone"
        >
          <Form.Label column sm={2}>
            Phone
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="PHONE"
              placeholder="(555) 555-5555"
              value={inputValue.PHONE}
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalMessage"
        >
          <Form.Label column sm={2}>
            Message
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="textarea"
              type="text"
              name="DESCRIPTION"
              placeholder="Type your message"
              value={inputValue.DESCRIPTION}
              onChange={handleInputChange}
              required
              style={{ height: '100px' }}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
        >
          <Col sm={{ span: 10, offset: 2 }}>
            <button
              type="submit"
              className="mb-4 save-btn"
            >
              Send&nbsp;<i className="fas fa-paper-plane"></i>
            </button>
          </Col>
        </Form.Group>
      </Form>
    </Col>
  );
}

export default ContactForm;