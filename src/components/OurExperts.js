import React from 'react';
import '../scss/components/OurExperts.scss';
import SingleExpertBox from './SingleExpertBox';
import exImg1 from '../images/expert-1.jpg';
import exImg2 from '../images/expert-2.jpg';
import exImg3 from '../images/expert-3.jpg';

const OurExperts = () => {
  return (
    <section className='experts container'>
      <div className='experts-subheading'>
        <h3>Meet Our Experts</h3>
        <div className='line'></div>
      </div>
      <h2>Our Experts</h2>

      <div className='experts-grid'>
        <SingleExpertBox
          name='John Doe'
          position='CEO/Principal'
          img={exImg1}
        />
        <SingleExpertBox
          name='Jane Doe'
          position='Senior Partner'
          img={exImg2}
        />
        <SingleExpertBox
          name='John Doe'
          position='Senior Partner'
          img={exImg3}
        />
      </div>
    </section>
  );
};

export default OurExperts;
