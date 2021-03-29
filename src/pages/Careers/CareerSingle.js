import React from 'react';
import '../../scss/pages/Careers.scss';

const CareerSingle = ({ position, description }) => {
  return (
    <div className='career'>
      <div className='career-info'>
        <h3>{position}</h3>
        <p>{description}</p>
      </div>
      <button className='btn'>Apply</button>
    </div>
  );
};

export default CareerSingle;
