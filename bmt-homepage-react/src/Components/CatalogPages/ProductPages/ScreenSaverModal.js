import React from 'react';
import Modal from 'react-bootstrap/Modal';

function ScreenSaverModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="black-text" id="contained-modal-title-vcenter">
          ScreenSaver Demo's
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li><p>ScreenSaver:&nbsp;&nbsp;<a href="http://ftp2.bmtmicro.com/ssaver26.zip"><button type="button" className="demo-btn">English Demo</button></a>&nbsp;&nbsp;(620KB)&nbsp;&nbsp;/&nbsp;&nbsp;<a href="http://ftp2.bmtmicro.com/ssavrg26.zip"><button type="button" className="demo-btn">German Demo</button></a>&nbsp;&nbsp;(614KB)</p></li>
        </ul>
      </Modal.Body>
    </Modal>
  );
}

export default ScreenSaverModal;
