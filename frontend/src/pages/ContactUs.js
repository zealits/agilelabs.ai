import React, { useEffect } from 'react';
import './ContactUs.css';
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }

    function blurFunc() {
      let parent = this.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      });
    };
  }, []);

  return (
    <div className="contactus">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="titleContact">Let's get in touch</h3>
          <p className="text">
         
          </p>

          <div className="info">
            <div className="information">
              <i className="fas fa-map-marker-alt"></i> &nbsp;&nbsp;
              <p> <FaMapMarkerAlt/> &nbsp;  450 Century Pkwy, Ste 250, Allen, Texas 75013 </p>
            </div>
            <div className="information">
              <i className="fas fa-envelope"></i> &nbsp;&nbsp;
              <p> <FaEnvelope /> &nbsp; network@agilelabs.ai</p>
            </div>
            <div className="information">
              <i className="fas fa-phone"></i> &nbsp;&nbsp;
              <p>  <FaPhone /> &nbsp; +1 (650) 597-3601</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="socialContactIcons">
              <a href="https://www.facebook.com/people/Agile-LabsAI/100093562100160/">
              <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/company/agile-labs-axpert/?originalSubdomain=in">
              <FaLinkedin />
              </a>
              
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autocomplete="off">
            <h3 className="titleContact1">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" />
              <label htmlFor="">Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" />
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" />
              <label htmlFor="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input"></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btnc" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
