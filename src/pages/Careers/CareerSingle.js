import React from 'react';
import { FadeInWhenVisible } from '../../animation';
import '../../scss/pages/Careers.scss';

const CareerSingle = ({ position, description }) => {
  return (
    <FadeInWhenVisible>
      <div className='career'>
        <div className='career-info'>
          <h3>{position}</h3>
          <p>{description}</p>
        </div>
        <button className='btn'>Apply</button>
      </div>
    </FadeInWhenVisible>
  );
};

export default CareerSingle;
