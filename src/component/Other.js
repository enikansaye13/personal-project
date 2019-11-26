import React from 'react'
import Other from '../otherservices.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';




function Others() {
    return (
        <section>
            <h2>Other Services</h2>
            <img
                className=" container-fluid d-block w-100"
                src={Other}
                alt="otherservices.jpg" />
            <p className="container">Whatever your cleaning needs we will adapt our cleaning services to match your needs. We will discuss your requirements, design the perfect cleaning specification and deliver the very best service in tune with best hygiene practices.</p>
            <Container>
                <Row>
                    <Col md={6}>
                        <h3>POST -CONSTRUCTION/RENOVATION CLEANING</h3>
                        <p>So-Kleen Ltd Is Undisputedly The Most Detailed Post Construction Cleaning Company In Nigeria, We Possess All The Required Human And Material Resources To Deliver Efficient Cleaning Services To Meet Your Needs.</p>
                        <p>Our Post-Construction Cleaning Services Include (But Not Limited To):</p>
                        <ul>
                            <li>Washing All Surfaces</li>
                            <li>High Dust Removal From Ceiling Pipes, Duct Work, Vents, Light Fixtures, Etc. </li>
                            <li>Stain Removal, Scrubbing, Dusting And Vacuuming Of All Surfaces.</li>
                            <li>Cleaning Of The Insides Of Desks And File Cabinets</li>
                            <li>Detailed Scrubbing And Sanitizing Of Kitchens And Bathrooms To Make Them Ready For Your Use.</li>
                            <li>Scrub Floors And Tiles, Polish Stainless Steel, Wipe Walls And More.</li>
                            <li>Floor Cleaning, Waxing And Buffing</li>
                            <li>Cleaning Window Sills And Window Frames</li>
                            <li>Window And Glass Cleaning Including Scraping And Etching Removal</li>
                        </ul>
                        <h3>WINDOW CLEANING</h3>
                        <p>We Offer A Thorough, High Quality Window Cleaning Service, Using Professional Cleaning Materials And Equipment. Our Competitive Prices And Reliable Service Guarantee That You Will See A Noticeable Difference In Your Home Or Office.</p>
                        <h3>END OF TENANCY CLEANING</h3>
                        <p>Moving Houses? Our Professional End Of Tenancy Cleaning Service Offers A Thorough Deep Clean Of The Entire Property, In Preparation For The Start Or End Of A Tenancy.  We Are Very Experienced In This Area And Have Many Satisfied Customers.</p>
                    </Col>
                    <Col md={6}>
                        <h3>FLOOR CARE AND MAINTENANCE</h3>
                        <p>Hard Surface Flooring - Such As Tile, Vinyl, Terrazzo, Granite And Marble – Requires Technical Knowledge To Properly Clean And Maintain. As A Janitorial Services Company, We Continually Train Our Technicians On New And Effective Trends In Floor Maintenance. Keep Your Hardwood And Tile Flooring Clean And Looking Great With Our Professional Services:</p>
                        <ul>
                            <li>Strip, Seal And Polish Floors (Marble, Terrazzo, Ceramic)</li>
                            <li>Scrub And Recoat Tile Floors</li>
                            <li>Scrub And Buff Tile Floors</li>
                            <li>High Speed Floor Burnishing</li>
                            <li>Scrub Concrete, Ceramic And Quarry Tile Floors</li>
                        </ul>
                        <h3>REST ROOM CLEANING</h3>
                        <p>We Are Dedicated To Creating And Maintaining Washroom Environments That Are Not Only Clean And Hygienic But Also Safe, Pleasant And Welcoming. We're Confident That You'll Be Impressed With Our Standards For Quality And Attention To Detail.</p>
                        <h3>SPECIAL REQUEST CLEANING</h3>
                        <h3>WHATEVER YOUR PROFESSIONAL CLEANING NEEDS ARE, WE’RE CONFIDENT WE’LL MAKE YOU SMILE ALWAYS.</h3>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Others;