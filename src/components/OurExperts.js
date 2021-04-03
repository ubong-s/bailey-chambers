import React from 'react';
import '../scss/components/OurExperts.scss';
import SingleExpertBox from './SingleExpertBox';
import exImg1 from '../images/expert-1.jpg';
import exImg2 from '../images/expert-2.jpg';
import exImg3 from '../images/expert-3.jpg';
import { FadeInWhenVisible } from '../animation';

const OurExperts = () => {
  return (
    <FadeInWhenVisible>
      <div className='experts container'>
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
      </div>
    </FadeInWhenVisible>
  );
};

export default OurExperts;
