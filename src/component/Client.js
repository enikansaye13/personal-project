import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Movi from '../part.jpg';



function Client() {
  return (
    <section>
      <div>
      <h2>Our Clients</h2>
      <p>So-Kleen has the capability to cater for a wide variety of clientele ranging from small to large businesses to government agencies. We solely focus on satisfying our clients by providing them with the specific cleaning services they require.</p>
      <p>Through innovation, new ideas and always focusing on ‘best practice principles’ we strive for even greater synergy with our Clients enabling us to continue to retain and grow our customer base.</p>
      </div>

      <div className=" container client">
      <Container>
        <Row className="cli">
          <Col md={2} >
          <img
              className=" container-fluid d-block w-100" id="about"
              src={Movi}
              alt="part.jpg"
            />
          </Col>
          <Col md={2} >
          <img
              className=" container-fluid d-block w-100" id="about"
              src={Movi}
              alt="part.jpg"
            />
          </Col>
          <Col md={2} >
          <img
              className=" container-fluid d-block w-100" id="about"
              src={Movi}
              alt="part.jpg"
            />
          </Col>
          <Col md={2} >
          <img
              className=" container-fluid d-block w-100" id="about"
              src={Movi}
              alt="part.jpg"
            />
          </Col>
          <Col md={2}>
          <img
              className=" container-fluid d-block w-100" id="about"
              src={Movi}
              alt="part.jpg"
            />
          </Col>
        </Row>
      </Container>

      <Container className="cli">
        <Row>
          <Col md={2} >
          <img
              className=" container-fluid d-block w-100" id="about"
              src={Movi}
              alt="part.jpg"
            />
          </Col>
          <Col md={2} >
          <img
              className=" container-fluid d-block w-100" id="about"
              src={Movi}
              alt="part.jpg"
            />
          </Col>
          <Col md={2} >
          <img
              className=" container-fluid d-block w-100" id="about"
              src={Movi}
              alt="part.jpg"
            />
          </Col>
          <Col md={2} >
          <img
              className=" container-fluid d-block w-100" id="about"
              src={Movi}
              alt="part.jpg"
            />
          </Col>
          <Col md={2}>
          <img
              className=" container-fluid d-block w-100" id="about"
              src={Movi}
              alt="part.jpg"
            />
          </Col>
        </Row>
      </Container>

      <Container className="cli">
        <Row>
          <Col md={2} >
          <img
              className=" container-fluid d-block w-100" id="about"
              src={Movi}
              alt="part.jpg"
            />
          </Col>
          <Col md={2} >
          <img
              className=" container-fluid d-block w-100" id="about"
              src={Movi}
              alt="part.jpg"
            />
          </Col>
          <Col md={2} >
          <img
              className=" container-fluid d-block w-100" id="about"
              src={Movi}
              alt="part.jpg"
            />
          </Col>
          <Col md={2} >
          <img
              className=" container-fluid d-block w-100" id="about"
              src={Movi}
              alt="part.jpg"
            />
          </Col>
          <Col md={2}>
          <img
              className=" container-fluid d-block w-100" id="about"
              src={Movi}
              alt="part.jpg"
            />
          </Col>
        </Row>
      </Container>
      </div>

    </section>
  );
}
export default Client;