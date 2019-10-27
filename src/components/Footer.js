import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            <svg id="logo">
              <polyline className="st0" points="8.5,15.3 2,9.5 8.5,3.7" />
              <polyline className="st0" points="20.5,3.7 27,9.5 20.5,15.3" />
              <line className="st0" x1="11.5" y1="18.6" x2="17.5" y2="0.4" />
            </svg> 
            <a target= '_blank' href='https://github.com/dzarate999/portfolio' rel="noopener noreferrer">View Code</a>
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            This site was made by Daniel Zarate
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
