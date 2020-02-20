import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Foo from '../firstback.jpg';
import Moo from '../home1.jpg';
import Soo from '../secondback.jpg';
import '../home.css'

function Home() {
  return (
    <Carousel className="cars">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Foo}
          alt="firstback.jpg"
        />
        <Carousel.Caption>
          <h3>WE ARE HERE TO MAKE THINGS EASY</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Moo}
          alt="home1.jpg"
        />

        <Carousel.Caption>
          <h3>SOO-CLEAN THE SERVICE YOU CAN TRUST</h3>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Soo}
          alt="secondback"
        />

        <Carousel.Caption>
          <h3>KEEP IT CLEAN</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Home;