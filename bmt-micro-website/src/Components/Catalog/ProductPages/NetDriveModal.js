import Modal from 'react-bootstrap/Modal';

function NetDriveModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="black-text" id="contained-modal-title-vcenter">
          Net Drive Demo's
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li>
            <p style={{ marginBottom: '0' }}><strong>NetDrive v3.1.6</strong></p>
            <p style={{ fontSize: '.9rem' }}>OS/2 Warp 4 (330KB):&nbsp;&nbsp;<a href="ftp://ftp.bmtmicro.com/bmtmicro/INC272.ZIP"><button type="button" className="demo-btn">English Demo</button></a>&nbsp;&nbsp;<a href="http://www.bmtmicro.com/netdrive/files/ndfs316_fr.zip"><button type="button" className="demo-btn">French Demo</button></a></p></li>
          <li>
            <p style={{ marginBottom: '0' }}><strong>SFTP</strong></p>
            <p style={{ fontSize: '.9rem' }}>OS/2 Warp 4 (300KB):&nbsp;&nbsp;<a href="http://www.bmtmicro.com/netdrive/files/ndpsftp_315_demo.zip"><button type="button" className="demo-btn">Download</button></a></p>
          </li>
          <li>
            <p style={{ marginBottom: '0' }}><strong>Network File System (NFS) Ver. 3 Plugin</strong></p>
            <p style={{ fontSize: '.9rem' }}>OS/2 Warp 4 (80KB):&nbsp;&nbsp;<a href="http://www.bmtmicro.com/netdrive/files/ndpnfs3_314_demo.zip"><button type="button" className="demo-btn">Download</button></a></p>
          </li>
          <li>
            <p style={{ marginBottom: '0' }}><strong>VFAT Plugin</strong></p>
            <p style={{ fontSize: '.9rem' }}>OS/2 Warp 4 (44KB):&nbsp;&nbsp;<a href="http://www.bmtmicro.com/netdrive/files/ndpfat305_demo.zip"><button type="button" className="demo-btn">Download</button></a></p>
          </li>
        </ul>
      </Modal.Body>
    </Modal>
  );
}

export default NetDriveModal;
