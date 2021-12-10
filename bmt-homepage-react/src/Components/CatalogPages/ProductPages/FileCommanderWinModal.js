import React from 'react';
import { Modal } from 'react-bootstrap';

function FileCommanderWinModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="black-text" id="contained-modal-title-vcenter">
          File Commander Win95/NT Demo's
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li><p>OS/2 (352KB):&nbsp;&nbsp;<a href="http://ftp2.bmtmicro.com/fc2_230.zip"><button type="button" className="demo-btn">Download</button></a></p></li>
          <li><p>Windows (543KB):&nbsp;&nbsp;<a href="http://ftp2.bmtmicro.com/fcw230.zip"><button type="button" className="demo-btn">Download</button></a></p></li>
          <li><p>Windows 64 (834KB):&nbsp;&nbsp;<a href="http://ftp2.bmtmicro.com/fcw230.zip"><button type="button" className="demo-btn">Download</button></a></p></li>
        </ul>
      </Modal.Body>
    </Modal>
  );
}

export default FileCommanderWinModal;
