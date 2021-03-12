import React, { useState } from 'react';
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
import logoAlt from '../logo_alt.svg';
import '../scss/components/Navbar.scss';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const toggleMenu = () => {
    setClick(!click);
  };
  const closeMenu = () => setClick(false);

  return (
    <header>
      {click ? (
        <div className='menu active'>
          <MobileMenu closeMenu={closeMenu} />
        </div>
      ) : (
        <div className='menu'>
          <MobileMenu />
        </div>
      )}
      <div className='container'>
        <div className='mobile'>
          <div className='mobile-nav'>
            <img className='mobile-logo' src={logoAlt} alt='Bailey' />
            <div className='mobile-burger' onClick={toggleMenu}>
              {click ? <FaTimes style={{ color: '#8d99ae' }} /> : <FaBars />}
            </div>
          </div>
        </div>
      </div>

      <nav className='nav'>
        <div className='nav-top'>
          <div className='container'>
            <ul className='nav-top-col-links'>
              <li>
                <FaClock className='icon' /> Open Hours: Mon-Fri 9.00AM - 5.00PM
              </li>
              <li>
                <a href='#'>
                  <FaPhone className='icon' /> +234-123-456-7890
                </a>
              </li>
              <li>
                <a href='#'>
                  <FaLocationArrow className='icon' /> 123 Address, Uyo, Akwa
                  Ibom State.
                </a>
              </li>
            </ul>

            <ul className='nav-top-col-social'>
              <li className='nav-top-col-social-item'>
                <a href='#' target='_blank'>
                  <FaFacebook />
                </a>
              </li>
              <li className='nav-top-col-social-item'>
                <a href='#' target='_blank'>
                  <FaTwitter />
                </a>
              </li>
              <li className='nav-top-col-social-item'>
                <a href='#' target='_blank'>
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='nav-bottom'>
          <div className='container'>
            <Link to='/'>
              <img className='nav-bottom-logo' src={logoAlt} alt='Bailey' />
            </Link>
            <ul className='menu-nav'>
              <li className='menu-nav-item'>
                <Link to='/about'>About</Link>
              </li>
              <li className='menu-nav-item'>
                <Link to='/services'>Services</Link>
              </li>
              <li className='menu-nav-item'>
                <Link to='/cases'>Cases</Link>
              </li>
              <li className='menu-nav-item'>
                <Link to='/careers'> Careers</Link>
              </li>
              <li className='menu-nav-item'>
                <Link to='/contact'> Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
