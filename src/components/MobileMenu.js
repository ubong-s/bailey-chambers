import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaLocationArrow,
  FaPhone,
  FaClock,
  FaTimes,
  FaBars,
} from 'react-icons/fa';
import logo from '../logo.svg';
import '../scss/Navbar.scss';

const MobileMenu = ({ closeMenu }) => {
  return (
    <div className='container'>
      <Link to='/' className='menu-list-link'>
        <img className='menu-nav-logo' src={logo} />
      </Link>
      <ul className='menu-list'>
        <li className='menu-list-item'>
          <Link to='/about' className='menu-list-link' onClick={closeMenu}>
            About
          </Link>
        </li>
        <li className='menu-list-item'>
          <Link to='/services' className='menu-list-link' onClick={closeMenu}>
            Services
          </Link>
        </li>
        <li className='menu-list-item'>
          <Link to='/cases' className='menu-list-link' onClick={closeMenu}>
            Cases
          </Link>
        </li>
        <li className='menu-list-item'>
          <Link to='/careers' className='menu-list-link' onClick={closeMenu}>
            Careers
          </Link>
        </li>
        <li className='menu-list-item'>
          <Link to='/contact' className='menu-list-link' onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
      <ul className='menu-social'>
        <li className='menu-social-item'>
          <a href='#' target='_blank' onClick={closeMenu}>
            <FaFacebook />
          </a>
        </li>
        <li className='menu-social-item'>
          <a href='#' target='_blank' onClick={closeMenu}>
            <FaTwitter />
          </a>
        </li>
        <li className='menu-social-item' onClick={closeMenu}>
          <a href='#' target='_blank'>
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <ul className='menu-contact'>
        <li className='menu-contact-item'>
          Open Hours: Mon-Fri 9.00AM - 5.00PM
        </li>
        <li className='menu-contact-item'>
          <a href='#'>
            <FaPhone /> +234-123-456-7890
          </a>
        </li>
        <li className='menu-contact-item'>
          <a href='#'>
            <FaLocationArrow /> 123 Address, Uyo, Akwa Ibom State.
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
