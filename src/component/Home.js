import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  Foo from '../firstback.jpg';
import Moo from '../cwg.jpg';
import Soo from '../secondback.jpg';

function Home(){
    return(
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Foo}
      alt="firstback.jpg"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Moo}
      alt="swg.jpg"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Soo}
      alt="secondback"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
}
export default Home;