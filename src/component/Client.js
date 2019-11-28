import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import A from '../pic/ad.jpg';
import B from '../pic/cwg.jpg';
import C from '../pic/finatrust.jpg';
import D from '../pic/freddy.jpg';
import E from '../pic/justfood.jpg';
import F from '../pic/lagos.jpg';
import G from '../pic/parkway.jpg';
import H from '../pic/polo.jpg';
import I from '../pic/prince.jpg';
import J from '../pic/slicks.jpg';
import K from '../pic/sterling.jpg';
import L from '../pic/tsl.jpg';
import M from '../pic/unionassurance.jpg';
import N from '../pic/unity.jpg';
import O from '../pic/wakanow.jpg';
import p from '../part.jpg';




function Client() {
  return (
    <section className="client1" >
      <div className="container">
      <h1>OUR CLIENTS</h1>
      <p>So-Kleen has the capability to cater for a wide variety of clientele ranging from small to large businesses to government agencies. We solely focus on satisfying our clients by providing them with the specific cleaning services they require.</p>
      <p>Through innovation, new ideas and always focusing on ‘best practice principles’ we strive for even greater synergy with our Clients enabling us to continue to retain and grow our customer base.</p>
      </div>

      <div className=" container client">
      <Container className="partner">
        <Row className="">
          <Col md={2} >
          <img
              className=" container-fluid d-block w-100" id="about"

              src={A}
              alt="part.jpg"
            />
          </Col>
          <Col md={2}  className="">
          <img
              className=" container-fluid d-block w-100" id="about"
              src={B}
              alt="part.jpg"
            />
          </Col>
          <Col md={2} >
          <img
              className=" container-fluid d-block w-100" id="about"
              src={C}
              alt="part.jpg"
            />
          </Col>
          <Col md={2} >
          <img
              className=" container-fluid d-block w-100" id="about"
              src={D}
              alt="part.jpg"
            />
          </Col>
          <Col md={2}>
          <img
              className=" container-fluid d-block w-100" id="about"
              src={E}
              alt="part.jpg"
            />
          </Col>
        </Row>
      </Container>

      <Container className="partner">
        <Row>
          <Col md={2} >
          <img
              className=" container-fluid d-block w-100" id="about"
              src={F}
              alt="part.jpg"
            />
          </Col>
          <Col md={2} >
          <img
              className=" container-fluid d-block w-100" id="about"
              src={G}
              alt="part.jpg"
            />
          </Col>
          <Col md={2} >
          <img
              className=" container-fluid d-block w-100" id="about"
              src={H}
              alt="part.jpg"
            />
          </Col>
          <Col md={2} >
          <img
              className=" container-fluid d-block w-100" id="about"
              src={I}
              alt="part.jpg"
            />
          </Col>
          <Col md={2}>
          <img
              className=" container-fluid d-block w-100" id="about"
              src={J}
              alt="part.jpg"
            />
          </Col>
        </Row>
      </Container>

      <Container className="partner">
        <Row>
          <Col md={2} >
          <img
              className=" container-fluid d-block w-100" id="about"
              src={K}
              alt="part.jpg"
            />
          </Col>
          <Col md={2} >
          <img
              className=" container-fluid d-block w-100" id="about"
              src={L}
              alt="part.jpg"
            />
          </Col>
          <Col md={2} >
          <img
              className=" container-fluid d-block w-100" id="about"
              src={M}
              alt="part.jpg"
            />
          </Col>
          <Col md={2} >
          <img
              className=" container-fluid d-block w-100" id="about"
              src={N}
              alt="part.jpg"
            />
          </Col>
          <Col md={2}>
          <img
              className=" container-fluid d-block w-100" id="about"
              src={O}
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