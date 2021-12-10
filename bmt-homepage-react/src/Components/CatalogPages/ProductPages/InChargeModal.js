import React from 'react';
import { Modal } from 'react-bootstrap';

function InChargeModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="black-text" id="contained-modal-title-vcenter">
          In Charge! Demo's
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li><p>OS/2 (6.1MB):&nbsp;&nbsp;<a href="ftp://ftp.bmtmicro.com/bmtmicro/INC272.ZIP"><button type="button" className="demo-btn">Download</button></a></p></li>
          <li><p>Windows 95/98/NT(4.0) (8.2MB):&nbsp;&nbsp;<a href="ftp://ftp.bmtmicro.com/bmtmicro/INW272.EXE"><button type="button" className="demo-btn">Download</button></a></p></li>
        </ul>
      </Modal.Body>
    </Modal>
  );
}

export default InChargeModal;
