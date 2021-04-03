import React, { useState, useEffect } from 'react';
import Heading from '../Heading';
import { TestimonialsData } from './TestimonialsData';
import '../../scss/components/Testimonials.scss';
import { FaQuoteLeft } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { SlideUpWhenVisible } from '../../animation';

const Testimonials = ({ testimonials }) => {
  const [testIndex, setTestIndex] = useState(0);
  const length = testimonials.length;

  useEffect(() => {
    if (testIndex < 0) {
      setTestIndex(testimonials.length - 1);
    }

    if (testIndex > testimonials.length - 1) {
      setTestIndex(0);
    }
  }, [testIndex, testimonials]);

  useEffect(() => {
    let slider = setInterval(() => {
      setTestIndex(testIndex + 1);
    }, 6000);
    return () => clearInterval(slider);
  }, [testIndex]);

  const next = () => {
    setTestIndex(testIndex === length - 1 ? 0 : testIndex + 1);
  };
  const prev = () => {
    setTestIndex(testIndex === 0 ? length - 1 : testIndex - 1);
  };

  if (!Array.isArray(testimonials) || testimonials.length <= 0) {
    return null;
  }

  return (
    <SlideUpWhenVisible>
      <section className='testimonials'>
        <div className='container'>
          <Heading
            subtitle='Testimonials'
            title='what our clients say'
            bgColor='white-bg'
          />
          <div className='testimonials-slider'>
            <FiChevronLeft className='chevron prev' onClick={prev} />
            <FiChevronRight className='chevron next' onClick={next} />
            {TestimonialsData.map((item, index) => {
              return (
                <article
                  className={
                    testIndex === index
                      ? 'testimonials-single active'
                      : 'testimonials-single'
                  }
                  key={index}
                >
                  {testIndex === index && (
                    <div className='inner-wrapper'>
                      <FaQuoteLeft className='quote' />
                      <p>{item.review}</p>
                      <h4>{item.name}</h4>
                      <h5>{item.company}</h5>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </SlideUpWhenVisible>
  );
};

export default Testimonials;
