import React from 'react';
import '../scss/components/PageHeader.scss';

const PageHeader = ({ headline, subheading, img }) => {
  return (
    <section
      className='page-hero'
      style={
        img
          ? { backgroundImage: `url(${img})` }
          : { backgroundColor: '#1f2839' }
      }
    >
      <div className='container'>
        <h1>{headline}</h1>
        <h4>{subheading}</h4>
      </div>
    </section>
  );
};

export default PageHeader;
