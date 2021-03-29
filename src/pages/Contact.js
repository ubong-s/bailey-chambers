import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaMobile } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import '../scss/pages/Contact.scss';

import bgImg from '../images/image-5.jpg';
import Accordion from '../components/Accordion/Accordion';
import WrappedMap from '../components/Map';

const Contact = () => {
  return (
    <>
      <PageHeader
        headline='Contact'
        subheading='Bailey Chambers // Contact'
        img={bgImg}
      />

      <section className='contact'>
        <div className='container'>
          <div className='contact-form'>
            <h3>Get in Touch</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae assumenda a voluptatibus fugiat, numquam aspernatur unde
              molestias. Dolores, sit blanditiis.
            </p>
            <form className='form'>
              <div className='form-control'>
                <input type='text' name='name' placeholder='Your Name' />
                <input type='email' name='email' placeholder='Your Email' />
              </div>
              <div className='form-control'>
                <input type='number' name='phone' placeholder='Phone' />
                <input type='text' name='website' placeholder='Your Website' />
              </div>
              <textarea
                name='message'
                rows='6'
                placeholder='Your Message'
              ></textarea>
              <button type='submit' className='btn'>
                Submit
              </button>
            </form>
          </div>

          <div className='contact-details'>
            <h3>Head Office</h3>

            <div className='contact-details-info'>
              <FaMobile className='icon' />
              <div>
                <h4>Office Phone</h4>
                <p>+2341234567890</p>
              </div>
            </div>
            <div className='contact-details-info'>
              <FaEnvelope className='icon' />
              <div>
                <h4>Email</h4>
                <p>info@bailey.com</p>
              </div>
            </div>
            <div className='contact-details-info'>
              <FaMapMarkerAlt className='icon' />
              <div>
                <h4>Location</h4>
                <p>123 Address, Uyo, Akwa Ibom State.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Accordion />

      {/* <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?&key=${process.env.REACT_APP_GOOGLE_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `500px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      /> */}
    </>
  );
};

export default Contact;
