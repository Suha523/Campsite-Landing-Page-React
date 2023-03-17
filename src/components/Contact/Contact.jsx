import React from "react";
import { Button } from "reactstrap";
import Line from "../Line/Line";
import "./Contact.css";
import { Icon } from "@iconify/react";

function Contact() {
  return (
    <div className='contact' id="contact-section">
      <div className='container rounded'>
        <div className='contact-details rounded text-start'>
          <h2>Contact us</h2>
          <form>
            <div className='d-flex flex-column m-3'>
              <label>Your Name</label>
              <input type='text' className='rounded' id='name' />
            </div>
            <div className='d-flex flex-column m-3'>
              <label>Your Message</label>
              <textarea className='rounded' id='message'></textarea>
            </div>
            <Button className='btn btn-light-blue m-3 text-dark-green'>
              Send Message
            </Button>
          </form>
          <Line />
          <div className='d-flex ms-4'>
            <span className='m-2'>
              <Icon
                icon='logos:facebook'
                color='#168aff'
                width='30'
                height='30'
              />
            </span>
            <span className='m-2'>
              <Icon
                icon='skill-icons:instagram'
                color='#168aff'
                width='30'
                height='30'
              />
            </span>
            <span className='m-2'>
              <Icon
                icon='skill-icons:twitter'
                color='#168aff'
                width='30'
                height='30'
              />
            </span>
            <span className='m-2'>
              <Icon
                icon='logos:pinterest'
                color='#168aff'
                width='30'
                height='30'
              />
            </span>
            <span className='m-2'>
              <Icon
                icon='logos:telegram'
                color='#168aff'
                width='30'
                height='30'
              />
            </span>
          </div>
          <div className='contact-bg rounded'></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
