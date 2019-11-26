import React from 'react';
import Car from '../carpet.jpg'






function Carpet() {
    return (
        <section>
            <h1 className="container">Carpet And Upholstery</h1>
            <img
                className="container-fluid d-block w-100"
                src={Car}
                alt="carpet.jpg" />
            <div className="container">
                <p>Carpets and upholsteries are an expensive investment and are constantly receiving high wear on a daily basis. Therefore routine vacuuming needs to be supported by specialist periodical programmes designed to both maintain and protect carpets and upholsteries in order to create the correct visual impression along with maintaining a healthy environment.</p>

                <h3>CARPETS & RUGS</h3>
                <p>At So-Kleen Limited we use the most advanced equipment and eco-friendly chemicals for our carpet and rug cleaning jobs
We offer hot water extraction, dry powder and bonnet cleaning methods to eliminate stains, dirt, bacteria and allergens, leaving your carpets looking their best whilst protecting their longevity and your investment.</p>

                <h3>UPHOLSTERY & LEATHER CLEANING</h3>
                <p>Sofas and chairs are expensive household items and regular professional cleaning will help to extend their life. Our chosen method is to use hot water extraction. It’s certainly one of the best proven methods for deep upholstery cleaning. Leather cleaning is not an easy task, we clean leather upholstery by hand with prochem leather cleaner before applying the appropriate conditioning cream. This helps preserve the leather.
</p>
                <p>Our operatives are fully trained to recognize the different fabrics and, if necessary, they will do a colour fast test and pile test before they begin cleaning.</p>
            </div>

        </section>

    );
}
export default Carpet;