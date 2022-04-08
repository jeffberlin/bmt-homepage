import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import NetDriveModal from './NetDriveModal';

function NetDrive() {
  useEffect(() => {
    document.title = "BMT Micro Catalog - Net Drive"
  })
  const [modalShow, NetDriveModalShow] = useState(false);
  return (
    <div className="body-content catalog-bg product-page">
      <Container className="catalog">
        <p className="back-btn">
          <Link to="/products">
            <i className="fas fa-arrow-left"></i>
            &nbsp;Back
          </Link>
        </p>
        <Row className="justify-content-center">
          <Col xl={10} lg={10} md={10} sm={10}>
            <h2>Net Drive</h2>
            <p><a href="https://bmtmicro.com/netdrive/about.html" className="catalog-link" rel="noreferrer">Visit Site</a></p>
            <p className="info-section">NetDrive for OS/2 is a virtual file system which allows to create a virtual volume and mount various resources to the volume. Current version of NetDrive for OS/2 supports local, network and FTP resources.</p>
          </Col>
        </Row>
        <Row className="justify-content-center info-section">
          <Col xl={4} lg={4} md={6} sm={6} xs={12} className="top-img">
            <div className="product-image text-left">
              <Image
                src="https://www.bmtmicro.com/images/bmt-micro-net-drive-logo.png"
                fluid
              />
            </div>
          </Col>
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <p className="product-specs">
              <strong>Platform:&nbsp;</strong>
              OS/2 Warp 4
            </p>
            <p className="product-specs">
              <strong>Price:&nbsp;</strong>
              $29.00 (1 user), $200.00 (10 users), $15.00 (SFTP Plugin), $15.00 (Network File System Ver. 3 Plugin), $10.00 (VFAT Plugin)
            </p>
            <button className="demo-btn" onClick={() => NetDriveModalShow(true)}>Download Demo</button>
            <NetDriveModal
              show={modalShow}
              onHide={() => NetDriveModalShow(false)}
            />
          </Col>
        </Row>
        <h4 className="product-features text-center"><u>System Requirements</u></h4>
        <Row className="justify-content-center info-section">
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <ul style={{ listStyleType: 'circle', paddingLeft: '15px' }}>
              <li><p>OS/2 Warp 4, Warp Server for e-business v4.5</p></li>
              <li><p>MPTS and TCP/IP</p></li>
              <li><p>High or medium speed Internet connection with cable modems, ADSL, etc. for FTP resources</p></li>

            </ul>
          </Col>
        </Row>
        <p className="text-center" style={{ marginBottom: '0' }}>
          <a href="http://silk.apana.org.au/fc.html" target="_blank" rel="noreferrer" className="catalog-link">More Features</a>
        </p>
      </Container>
    </div>
  );
}

export default NetDrive;
