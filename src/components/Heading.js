import React from 'react';
import '../scss/components/Heading.scss';

const Heading = ({ subtitle, title }) => {
  return (
    <>
      <div className='subheading'>
        <h3>{subtitle}</h3>
        <div className='line'></div>
      </div>
      <h2>{title}</h2>
    </>
  );
};

export default Heading;
