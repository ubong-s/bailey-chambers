import React from 'react';
import '../scss/components/Heading.scss';

const Heading = ({ subtitle, title, bgColor }) => {
  return (
    <>
      <div className='heading'>
        <div className='subheading'>
          <h3 className={bgColor}>{subtitle}</h3>
          <div className='line'></div>
        </div>
        <h2>{title}</h2>
      </div>
    </>
  );
};

export default Heading;
