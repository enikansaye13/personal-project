import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../reason.css';
import Foo from '../firstback.jpg';

//  import Button from 'react-bootstrap/Button';


function Reason() {
  return (
    <div>
    <Container className="reason">
      <h1>WHY CHOOSEN US?</h1>
      
      <Row className="rea">
        <Col md={7}>
        <h4>Caring For Our premises</h4>
      <p>Having a clean building is about making a great impression, creating an endearing environment for visitors and clients, and maintaining a productive environment for your staff.</p>
          <p> We genuinely care about the buildings we work in. The way your space is presented speaks volume, and the responsibility for this will always start and end with us. Above all, we want to help you to free up your time so that you can do what you do best.</p>

          <p>Customers continue to patronize us because of our impeccable reputation, and solid work ethic. If you are on the fence considering hiring a cleaning service, please consider the following about our company:</p>
          <ul>
            <li>We offer a professional yet very personable approach</li>
            <li>We have high standards and a great attention to detai</li>
            <li>We understand the responsibility we have for the work we do</li>
            <li>Our team is made up of experienced and specialist personnel</li>
            <li>We are trusted exclusively by dozens of businesses and homes, with references available.</li>
            <li>We are experienced, with the majority of our employees having been with us for many years.</li>
            <li>We are knowledgeable and equipped; we know what cleaning solutions should be used per scenario, and what the dangers they can impose if not used correctly.</li>
            <li>Our cleaning process is supported by proactive managers who uphold the highest quality assurance standards.</li>
            <li>We are undisputedly the most detailed cleaning company in the industry, Period!</li>

          </ul>
        </Col>
        <Col md={5}>
          <h4>Our core value</h4>
          <ul>
            <li>Integrity</li>
            <li>Professionalism</li>
            <li>Innovation</li>
            <li>Responsibility</li>
            <li>Excellence</li>
            <li>High level of productivity</li>
            <li>Team work </li>
          </ul>
          <img
          className="d-block w-100"
          src={Foo}
          alt="firstback.jpg"
        />

        </Col>
      </Row>
    </Container>
    </div>

  );
}
export default Reason;
