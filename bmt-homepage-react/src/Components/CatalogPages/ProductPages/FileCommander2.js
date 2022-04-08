import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

function FileCommander2() {
  useEffect(() => {
    document.title = "BMT Micro Catalog - File Commander/2"
  })
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
            <h2>File Commander/2</h2>
            <p><a href="http://silk.apana.org.au/fc.html" className="catalog-link" rel="noreferrer">Visit Site</a></p>
            <p className="info-section">File Commander/2 is a 32 bit OS/2 text mode file manager and shell that allows you to locate, copy, move, delete, view, edit and execute your files in a quick, convenient and customizable manner.</p>
          </Col>
        </Row>
        <Row className="justify-content-center info-section">
          <Col xl={4} lg={4} md={6} sm={6} xs={12} className="top-img">
            <div className="product-image text-left">
              <Image
                src="https://www.bmtmicro.com/images/bmt-micro-filecommander-logo.png"
                fluid
              />
            </div>
          </Col>
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <p className="product-specs">
              <strong>Platform:&nbsp;</strong>
              NT or OS/2
            </p>
            <p className="product-specs">
              <strong>Price:&nbsp;</strong>
              $35.00 (1 user) - $2,500.00 (unlimited users)
            </p>
            <a href="http://ftp2.bmtmicro.com/fc2_240.zip">
              <button type="button" className="demo-btn" >Download Demo</button>
            </a>
          </Col>
        </Row>
        <h4 className="product-features text-center"><u>Features</u></h4>
        <Row className="justify-content-center info-section">
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <ul style={{ listStyleType: 'circle', paddingLeft: '15px' }}>
              <li><p>Built in archive support including archives inside archives to any depth, with ZIP, ARJ, RAR, LZH, ACE, HA, TAR, GZip, 7ZIP and BZIP2 types currently supported</p></li>
              <li><p>Mouse support</p></li>
              <li><p>Online help</p></li>
              <li><p>Code page translation function in viewer and editor</p></li>
            </ul>
          </Col>
          <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <ul style={{ listStyleType: 'circle', paddingLeft: '15px' }}>
              <li><p>Full Unicode file name support</p></li>
              <li><p>Full support for large files and volumes (up to 2^63 bytes)</p></li>
              <li><p>Built in file viewer with hex view mode and syntax highlighting</p></li>
              <li><p>Built in editor with undo/redo, syntax highlighting, and cut/copy/paste ability using the global clipboard</p></li>
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

export default FileCommander2;
