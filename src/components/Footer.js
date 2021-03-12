import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaLocationArrow,
  FaPhone,
} from 'react-icons/fa';
import '../scss/components/Footer.scss';
import logo from '../logo.svg';

const Footer = () => {
  return (
    <footer>
      <div className='container footer'>
        <div className='footer-col'>
          <Link to='/'>
            <img src={logo} alt='Bailey Chambers' className='footer-logo' />
          </Link>
          <p className='footer-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            eamaiores
          </p>
        </div>

        <div className='footer-col'>
          <h4 className='footer-col-title'>Links</h4>
          <ul className='footer-col-list'>
            <li className='footer-col-list-item'>
              <Link to='/'>Home</Link>
            </li>
            <li className='footer-col-list-item'>
              <Link to='/about'>About</Link>
            </li>
            <li className='footer-col-list-item'>
              <Link to='/services'>Services</Link>
            </li>
            <li className='footer-col-list-item'>
              <Link to='/cases'>Cases</Link>
            </li>
            <li className='footer-col-list-item'>
              <Link to='/careers'>Careers</Link>
            </li>
            <li className='footer-col-list-item'>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>

        <div className='footer-col'>
          <h4 className='footer-col-title'>Contact Us</h4>
          <ul className='footer-col-list'>
            <li className='footer-col-list-item'>
              <FaLocationArrow />
              <a href='#'>123 Address, Uyo, Akwa Ibom State.</a>
            </li>
            <li className='footer-col-list-item'>
              <FaPhone />
              <a href='#'>+234-123-456-7890 </a>
            </li>
            <li className='footer-col-list-item'>
              <FaEnvelope />
              <a href='#'>info@baileys.com</a>
            </li>
          </ul>
        </div>

        <div className='footer-col'>
          <h4 className='footer-col-title'>Social Media</h4>
          <p className='footer-col-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
          <ul className='footer-col-social'>
            <li className='footer-col-social-item'>
              <a href='#' target='_blank'>
                <FaFacebook />
              </a>
            </li>
            <li className='footer-col-social-item'>
              <a href='#' target='_blank'>
                <FaTwitter />
              </a>
            </li>
            <li className='footer-col-social-item'>
              <a href='#' target='_blank'>
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='copyright'>
        <div className='container'>
          <ul className='footer-col-notice'>
            <li className='footer-col-notice-item'>
              &copy; Bailey Chambers <span id='date'></span>. All rights
              reserved.
            </li>
            <li className='footer-col-notice-item'>
              <Link to='/privacy-policy'>Privacy Policy</Link>
            </li>
            <li className='footer-col-notice-item'>
              <Link to='/terms-of-service'>Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
