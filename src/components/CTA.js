import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/components/CTA.scss';

const CTA = ({ headline }) => {
  return (
    <section className='cta'>
      <div className='container'>
        <h3>{headline}</h3>
        <Link to='/contact' className='btn'>
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default CTA;
