import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';



function Footer() {
    return (
        <div >
            <Breadcrumb collapseOnSelect expand="lg" bg="success" variant="dark" className="bread">
                <Breadcrumb.Item href="#"><i class="fa fa-facebook" aria-hidden="true" ></i></Breadcrumb.Item>
                <Breadcrumb.Item href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></Breadcrumb.Item>
                <Breadcrumb.Item href="#"><i class="fa fa-skype" aria-hidden="true"></i></Breadcrumb.Item>
                <Breadcrumb.Item href="#"><i class="fa fa-telegram" aria-hidden="true"></i></Breadcrumb.Item>
                <Breadcrumb.Item href="#"><i class="fa fa-twitter" aria-hidden="true"></i></Breadcrumb.Item>
            </Breadcrumb>
        </div>

    )
}
export default Footer;