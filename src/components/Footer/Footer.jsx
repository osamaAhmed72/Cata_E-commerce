import React from 'react'
import './Footer.css'
import { app, logo, pay, play } from '../../assets/assets'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="section-p1 ">
        <div className="col">
            <Link to={'/'}><img class="logo" src={logo} alt="" /></Link>
            <h4>Contacts</h4>
            <p><strong>Adress: </strong> 563 Welligntone Roas , Street,San Fransisco</p>
            <p><strong>Phone: </strong> +002 010 64 50 16 82 </p>
            <p><strong>Hours: </strong> 10:00 - 18:00 , Mon - Sat</p>

            <div class="folow">
                <h4>Follow Us </h4>
                <div class="icon">
                    <FaFacebook className='facebook iconSoc'/>
                    <FaTwitter className='twitter iconSoc'/>
                    <FaSquareInstagram className='inst iconSoc'/>
                    <FaYoutube className='youtube iconSoc'/>
                    <FaPinterest className='pinter iconSoc'/>
                </div>
            </div>
        </div>

        <div class="col">
            <h4>About</h4>
            <Link>About Us</Link>
            <Link>Delivery Information</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms & Condition</Link>
            <Link>Contact Us</Link>
         </div>


         <div class="col">
            <h4>My Account</h4>
            <Link>Sign In</Link>
            <Link>View Cart</Link>
            <Link>My Wishlist</Link>
            <Link>Track My Order</Link>
            <Link>Help</Link>
         </div>

         <div className="col install">
            <h4>Install App</h4>
            <p>From App Store Or Google Play</p>
            <div className="row">
                <img src={app} alt="" />
                <img src={play} alt="" />
            </div>
            <p>Secured Payment Gateways</p>
            <img src={pay} alt="" />

         </div>

         <div class="copyRight">
            <p>@ 2022, Tech2 etc - HTML CSS ECOMMERCE TEMPLETS</p>
         </div>


    </footer>
  )
}

export default Footer
