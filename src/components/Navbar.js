import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useWindowScroll } from 'react-use';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaClock,
} from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';
import logo from '../logo.svg';
import logoAlt from '../logo_alt.svg';
import '../scss/components/Navbar.scss';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [fixedNav, setFixedNav] = useState(false);

  const { y: pageYOffset } = useWindowScroll();

  const showFixedNav = () => {
    if (pageYOffset > 100) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  };

  if (click) {
    document.body.classList.add('no-overflow');
  } else {
    document.body.classList.remove('no-overflow');
  }

  const toggleMenu = () => {
    setClick(!click);
  };
  const closeMenu = () => setClick(false);

  useEffect(() => {
    showFixedNav();
  }, [pageYOffset]);

  return (
    <header>
      {click ? (
        <div className='menu active'>
          <MobileMenu closeMenu={closeMenu} />
        </div>
      ) : (
        <div className='menu'>{<MobileMenu />}</div>
      )}

      <div className='mobile'>
        <div className='container'>
          <div className='mobile-nav'>
            <Link to='/' onClick={closeMenu} className='mobile-logo'>
              <img src={logoAlt} alt='Bailey' />
            </Link>
            <div className='mobile-burger' onClick={toggleMenu}>
              {click ? <AiOutlineCloseCircle /> : <AiOutlineMenu />}
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

        <div className={fixedNav ? 'nav-bottom fixed-nav' : 'nav-bottom'}>
          <div className='container'>
            <Link to='/' className='nav-bottom-logo'>
              {fixedNav ? (
                <img src={logo} alt='Bailey' />
              ) : (
                <img src={logoAlt} alt='Bailey' />
              )}
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
