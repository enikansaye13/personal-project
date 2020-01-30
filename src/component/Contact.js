import React, { state } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
// import { Map, GoogleApiWrapper } from 'google-maps-react';

// import Form from 'react-bootstrap/Form';
// import Form from 'react-bootstrap/Form';
import Form from 'react-bootstrap/Form'
//import { validate } from '@babel/types';

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  location: "",
  message: "",
  emailError: "",
  nameError: "",
  phoneError: "",
  addressError: "",
  locationError: ""
}
export default class Contact extends React.Component {

  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };
  validate = () => {
    let emailError = "";
    let nameError = "";
    let phoneError = "";
    let addressError = "";
    let locationError = "";


    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }
    if (!this.state.name) {
      nameError = "name cannot be blank";
    }
    if (!this.state.phone < 11) {
      phoneError = "invalid number";
    }
    if (!this.state.address) {
      addressError = "address cannot be blank";
    }
    if (!this.state.location) {
      locationError = "input location";
    }

    if (emailError || nameError || phoneError || addressError || locationError) {
      this.setState({ emailError, nameError, phoneError, addressError, locationError })
      return false;
    }
    return true;
  }

  handleSubmit = event => {
    //event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      //clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <section>
        <div>
          <Container className="contact">
            <h2>CONTACT US</h2>
            <Row>
              <Col md={8} className="con">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.78241172226!2d3.3747852142666597!3d6.54913422468299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b1b5899a8bd%3A0x8b88313d1d73d3b0!2sStutern!5e0!3m2!1sen!2sng!4v1574945819357!5m2!1sen!2sng" width="600" height="450" frameBorder="0" allowFullScreen=""></iframe>


              </Col>

              <Col md={2}>
                <div className="mapcontent">
                  < h5> HEAD OFFICE</h5>
                  <p>16 Folajinadu<br></br>gbagada,lagos<br></br>08149514729<br></br>08057639453<br></br>08147639123</p>
                  <h5>EMAIL: <span>office@soo-kleen.com</span></h5>
                </div>
              </Col>

              <Col md={2}>
                <div>
                  < h5> HEAD OFFICE</h5>
                  <p>16 Folajinadu<br></br>gbagada,lagos<br></br>08149514729<br></br>08057639453</p>
                  <h5>EMAIL: <span>office@soo-kleen.com</span></h5>
                </div>

              </Col>


            </Row>


          </Container>
        </div >
        <Container>
          <Row>
            <Col md={6} className="we">
              <p> WE
              <br></br>LOOK
              <br></br> FORWARD TO WORKING <br></br>WITH YOU. <br></br>SAY HELLO, <br></br>IT'S THE FIRST STEP <br></br>TO A STRONG PARTNERSHIP.</p>
            </Col>
            <Col md={6}>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  {/* <Form.Label></Form.Label> */}
                  <Form.Control type="email" placeholder="Enter email" name="email"
                    onChange={this.handleChange} />
                  <div style={{ fontSize: 12, variant: "success" }}>{this.state.emailError}</div> {/* <Form.Text className="text-muted"> */}
                  {/* </Form.Text> */}
                </Form.Group>
                <Form.Group controlId="formBasicText">
                  <Form.Label></Form.Label>
                  <Form.Control type="text" placeholder="full name" name="name"
                    onChange={this.handleChange} />
                  <div style={{ fontSize: 12, variant: "success" }}>{this.state.nameError}</div>
                </Form.Group>
                <Form.Group controlId="formBasicText">
                  {/* <Form.Label></Form.Label> */}
                  <Form.Control type="number" placeholder="080" name="phone"
                    onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicText">
                  {/* <Form.Label></Form.Label> */}
                  <Form.Control type="text" placeholder="address" name="address"
                    onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  {/* <Form.Label></Form.Label> */}
                  <Form.Control as="select" name="location"
                    onChange={this.handleChange}>
                    <option>Abuja</option>
                    <option>Lagos</option>
                    <option>Porthacourt</option>
                    <option>Delta</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  {/* <Form.Label>MASSAGE</Form.Label> */}
                  <Form.Control as="textarea" rows="5 " placeholder="message" name="message"
                    onChange={this.handleChange} />
                </Form.Group>


                <Button variant="success" type="submit">SUBMIT</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}