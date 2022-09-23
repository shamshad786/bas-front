import React from 'react'
import { MdPhoneCallback, MdOutlineEmail, MdPinDrop } from "react-icons/md";

import ContactForm from './ContactForm';

const Contactquery = () => {
  return (
    <>
        <div className='contact-main-container'>
            <div className='container inner-main-contact-container'>
                    <div className='contact-title-div'>
                        <h3>Contact Us</h3>
                    </div>
                   <div className='contact-detail-upper-div shadow-sm'>
                        <div className='conat-email-detail-cnt-pg'>
                            <h4><MdPhoneCallback className='contact-form-icons'/> <span className='inner-details'>987456321 (hindi)<br/>
                            321456970(english)
                            </span></h4>
                            <h4><MdOutlineEmail className='contact-form-icons'/> <span className='inner-details'>info@nia.com</span> </h4>
                        </div>
                        <h4>Address <MdPinDrop className='contact-form-icons'/> <span className='inner-details'>Plot no 18, Top floor. Sewak park gram sabha Dwarka Mor near metro pillar no 773. New Delhi 110058</span></h4>
                   </div>

                   <div className='cnt-form-lower-div'>
                    <ContactForm/>
                   </div>
                  
            </div>
        </div>
    </>
  )
}

export default Contactquery