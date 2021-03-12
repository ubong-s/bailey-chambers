import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../scss/components/OurExperts.scss';

const SingleExpertBox = ({ img, name, position }) => {
  return (
    <div className='experts-box'>
      <div className='experts-box-img'>
        <img src={img} alt={name} />

        <ul className='social-links'>
          <li>
            <a href='#'>
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href='#'>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href='#'>
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
      <div className='experts-box-info'>
        <h4>{name}</h4>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default SingleExpertBox;
