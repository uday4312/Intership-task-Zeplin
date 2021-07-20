import React from 'react'
import './style/style.css'
import footer from '../assets/footer.png'
import footer1 from '../assets/Group 220.png'
const Footer = () => {
    return (
        <div>
            <div className="footerimg">
                <img src={footer} />

            </div>
            <div className="left">
                <span>
                    <img className="foot-img" src={footer1} />

                </span>
                <span className="foot-org">organic</span>
                <span className="lorem8">Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor </span>
                    <span className="copyright">© Copyright 2020 Nature</span>
            </div>
            <div className="mid">
               <span className="information">Information</span>
               <span className="aboutus">About Us</span>
               <span className="pro">Products</span>
               <span className="cont">Contact Us</span>
               <span className="term">Terms of Service</span>
               <span className="about2">About Us</span>
               <span className="pro2">Products</span>
            </div>
            <div className="right">
                <span className="follow">Follow Us</span>
            </div>

        </div>
    )
}

export default Footer
