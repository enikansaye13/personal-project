import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
 import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Form from 'react-bootstrap/Form';
import Form from 'react-bootstrap/Form'


function Contact(){
  return(
    <section>
      <Container>
        <Row>
          <Col xs={6}>
            <p> WE LOOK FORWARD TO WORKING WITH YOU. SAY HELLO, IT'S THE FIRST STEP TO A STRONG PARTNERSHIP.</p>
          </Col>
          <Col xs={6}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicText">
                <Form.Label>FULL NAME</Form.Label>
                <Form.Control type="text" placeholder="full name" />
                </Form.Group>
                <Form.Group controlId="formBasicText">
                <Form.Label>PHONE NUMBER</Form.Label>
                <Form.Control type="number" placeholder="080" />
                </Form.Group>
                <Form.Group controlId="formBasicText">
                <Form.Label>ADDRESS</Form.Label>
                <Form.Control type="text" placeholder="address" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>LOCATION</Form.Label>
    <Form.Control as="select">
      <option>Abuja</option>
      <option>Lagos</option>
      <option>Porthacourt</option>
      <option>Delta</option>
    </Form.Control>
  </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>MASSAGE</Form.Label>
                <Form.Control as="textarea" rows="10" />
              </Form.Group>


              <Button variant="success" type="submit">SUBMIT</Button>
            </Form>
          </Col>
        </Row>
      </Container>    
    </section>
  );
}
export default Contact;