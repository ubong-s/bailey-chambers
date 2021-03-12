import React from 'react';
import { Link } from 'react-router-dom';
import { FaLink } from 'react-icons/fa';
import '../scss/components/ServiceBox.scss';

const ServiceBox = ({ name, desc, img }) => {
  return (
    <Link to='#'>
      <div className='service-box'>
        <div className='service-box-img'>
          <img src={img} alt={name} />
          <FaLink className='icon' />
        </div>
        <div className='service-box-info'>
          <h4 className='title'>{name}</h4>
          <p className='text'>{desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceBox;
