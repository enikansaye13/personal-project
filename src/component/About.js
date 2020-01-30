import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pic from '../why2.jpg';
import Movi from '../part.jpg';





function About() {
  return (
    <div className="about">
      <Container>
        <h1>ABOUT SOO-KLEAN</h1>

        <Row>
          <Col md={6}> 
          
          <div className="abo">

            <p> So- limkleenited is a professional cleaning and space brightening company.</p>

            <p >Founded in 2005, we quickly built a reputation as a leading provider of commercial and residential cleaning solution in the industry. Our solutions are designed to solve the mild to heavy dirt management problems that individuals, families and corporate organizations face.</p>
          </div>

          </Col>

          <Col md={6} className="staff">
            <img
              className=" container-fluid d-block w-100" id="about"
              src={Movi}
              alt="part.jpg"
            />

          </Col>
        </Row>
        <p className=" abo2">As an A-rated professional cleaning firm, we also know that  a cleaner environment supports a healthier, more productive and profitable       lifestyle; that is why our thorough cleaning service is made to leave you  happier and more satisfied.
      
      Our hands-on approach, coupled with our experience, our attention to details and the professionalism exhibited by management, employees and our commitment to customer satisfaction, sets us apart.
      
        Our continuous pursuit of service perfection has resulted in consistent growth each year.></p>
    </Container>

      <img
        className=" container-fluid d-block w-100"
        src={Pic}
        alt="why2.jpg"
      />

    </div>

  );
}
export default About;