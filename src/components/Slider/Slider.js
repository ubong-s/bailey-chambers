import React, { useState, useEffect } from 'react';
import { SliderData } from './SliderData';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import '../../scss/components/Slider.scss';

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    if (current < 0) {
      setCurrent(slides.length - 1);
    }

    if (current > slides.length - 1) {
      setCurrent(0);
    }
  }, [current, slides]);

  useEffect(() => {
    let slider = setInterval(() => {
      setCurrent(current + 1);
    }, 9000);
    return () => clearInterval(slider);
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className='slide'>
      <FaChevronCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaChevronCircleRight className='right-arrow' onClick={nextSlide} />

      {SliderData.map((slide, index) => {
        return (
          <article
            className={index === current ? 'slide-img active' : 'slide-img'}
            key={index}
          >
            {index === current && (
              <>
                <img src={slide.image} alt={slide.altText} />
                <div className='slide-img-info'>
                  <h1>{slide.headline}</h1>
                  <p>{slide.subheading}</p>
                </div>
              </>
            )}
          </article>
        );
      })}
    </div>
  );
};

export default Slider;
