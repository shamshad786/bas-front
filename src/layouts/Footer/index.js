import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css';
import { BsFacebook, BsInstagram, BsWhatsapp,BsTelephoneOutboundFill } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

const index = () => {
  return (
    <>
      <div className='footer-main-bg-div container-fluid d-print-none'>

      <div className='footer-menu-list-div container'>
       <Link to={'/whyaviation'}>Why Aviation</Link>
       <span className='verticle-line'></span>
       <Link to={'/visionandvalue'}>Vission & Value</Link>
       <span className='verticle-line'></span>
       <Link to={'/contactus'}>Contact Us</Link>
       <span className='verticle-line'></span>
       <Link to={'/help'}>Help</Link>
       <span className='verticle-line'></span>
       <Link to={'/privacyrefund'}>Privacy/Refund/Cancellation Policy</Link>
      </div>
      </div>
      <div className='footer-blue-bg-div container-fluid d-print-none'>
          <div className='footer-inner-details-div container'>
            <div className='row'>
            <div className='col-lg-3'>
              <div className='footer-inner-left-div'>
                <h4>More</h4>
                <div className='footer-left-list-div'>
                  <ul>
                  <Link to={'/'}>
                    <li>Home</li>
                  </Link>
                  <Link to={'/services'}>
                    <li>Services</li>
                  </Link>
                  <Link to={'/latestnews'}>
                    <li>Latest News</li>
                  </Link>
                  <Link to={'/notice'}>
                    <li>Important Notice Dis/Policy</li>
                  </Link>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='footer-center-list-div'>
              <h4>Social</h4>
            <ul>
              <a href="#">
              <li><BsFacebook/> Facebook</li>
              </a>
              <a href="#">
              <li><BsInstagram/> Instagram</li>
              </a>
              <a href="#">
              <li><BsWhatsapp/> Whatsapp</li>
              </a>
            </ul>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='footer-right-list-div'>
                  <h4>Helpline No.</h4>
                  <ul>  
                    <span className='phone-num'>For Hindi</span>
                    <a href="tel:+918447588447">
                    <li><BsTelephoneOutboundFill/> 8447-58-8447</li>
                    </a>
                    <span className='phone-num'>For English</span>
                    <a href="tel:+918447798447">
                    <li><BsTelephoneOutboundFill/> 8447-79-8447</li>
                    </a>
                    <a href="mailto: info@nias.com">
                    <li><MdOutlineMailOutline/> info@nias.com</li>
                    </a>
                  </ul>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='footer-last-list-div'>
              <Link to={'/'}>
                 <img src="/images/logo.png" width={160} height={160} alt="" />
              </Link>
              </div>
            </div>

            </div>
          </div>
          <div className='copy-right-main-div'>
              <p className='copy-right'>
              Copyright © 2020 - 2021 Noida International Aviation Services Pvt Ltd. All Rights Reserved.
              </p>
          </div>
          <div className='kwiqsoft-div'>
            <p>Design & Developed By  <a className='kwiqsoft'  href="https://www.kwiqsoft.com/">  KWIQSOFT </a></p>
          </div>
      </div>
    </>
  )
}

export default index