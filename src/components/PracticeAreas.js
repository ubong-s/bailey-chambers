import React from 'react';
import '../scss/components/PracticeAreas.scss';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FadeInWhenVisible } from '../animation';

const PracticeAreas = () => {
  return (
    <FadeInWhenVisible>
      <section className='practice-areas'>
        <div className='practice-areas-grid container'>
          <div className='practice-areas-intro'>
            <h2>Our Practice Areas</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sit
              minus ducimus corrupti repudiandae non incidunt cumque hic,
              eveniet quod, maiores sunt? Eos dolorum molestiae eaque! Aut totam
              dolore enim?
            </p>
          </div>
          <div className='practice-areas-services'>
            <ul>
              <li>
                <FiArrowRight className='icon' />
                <span>Business</span>
              </li>
              <li>
                <FiArrowRight className='icon' />
                <span>Family</span>
              </li>
              <li>
                <FiArrowRight className='icon' />
                <span>Justice Fight</span>
              </li>
              <li>
                <FiArrowRight className='icon' />
                <span>Justice Fight</span>
              </li>
            </ul>
            <ul>
              <li>
                <FiArrowRight className='icon' />
                <span>Bank and Financial</span>
              </li>
              <li>
                <FiArrowRight className='icon' />
                <span>Corporate</span>
              </li>
              <li>
                <FiArrowRight className='icon' />
                <span>Personal Injury</span>
              </li>
              <li>
                <FiArrowRight className='icon' />
                <span>Personal Injury</span>
              </li>
            </ul>
          </div>
        </div>
        <div className='cta-p container'>
          <Link to='/services' className='btn'>
            Find out more
          </Link>
        </div>
      </section>
    </FadeInWhenVisible>
  );
};

export default PracticeAreas;
