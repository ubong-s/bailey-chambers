import React from 'react';
import '../scss/components/AboutUs.scss';
import aboutImg from '../images/image-4.jpg';

const AboutUs = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='about-col-2'>
          <img src={aboutImg} alt='About Bailey' />
        </div>
        <div className='about-col'>
          <h2 className='about-title title'>About Bailey</h2>
          <p className='about-text text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            sint ab. Natus reprehenderit corporis reiciendis amet alias possimus
            illum eaque, necessitatibus porro aperiam voluptas iure consequuntur
            tenetur provident id officiis dolores ab recusandae quidem aliquam
            velit ducimus itaque soluta autem?
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
