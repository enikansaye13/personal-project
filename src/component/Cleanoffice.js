import React from 'react';
import Clean from '../officeclean.jpg';




function Cleanoffice() {
    return (
        <section className="off">
            <div className="container">
                <h2>Janitorial/Office Cleaning</h2>
            </div>
            <img
                className=" container-fluid d-block w-100"
                src={Clean}
                alt="officeclean.jpg" />

            <div className="container">
                <p>Whatever your business, organization or sector, we'll adapt our cleaning services to match your needs. We will discuss your requirements, design the perfect office cleaning specification and deliver the very best service in tune with best hygiene practices.</p>

            
                <p>A clean and hygienic office is a more productive place for your staff to work and a more pleasant place for your clients to visit. We provide high quality, cost-effective office cleaning solutions, and currently work with a number of companies across Lagos.</p>

                <h3>OUR JANITORIAL CLEANING PLAN</h3>

                <p>
                    We will draw up a plan to cater for your specific requirements and will work at a time that is most convenient for you and your staff. Your Account Manager will take personal responsibility for the cleaning work at your offices, and will make regular site visits in order to audit the work of our janitors. Your Account Manager will also be contactable by you at any time, and will be keen to meet with you on a regular basis to discuss our work
            </p>

                <h3>Our janitorial service includes:</h3>

                <p>
                    <ul>
                        <li>Uniformed and experienced cleaning staff/ uniformed, trained and vetted (well kitted)janitors</li>
                        <li>Backup janitors always on standby</li>
                        <li>Our Personal Management System</li>
                        <li>Provision of all equipment/consumables included in the price</li>
                        <li>A responsible approach to Health & Safety</li>
                        <li>Environmentally aware working practices</li>

                    </ul>
                </p>
                

            </div>
        </section>

    );

}
export default Cleanoffice;