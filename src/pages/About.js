import React from 'react';
import { containerVariants } from '../animation';
import { motion } from 'framer-motion';
import {
  AboutUs,
  CTA,
  Heading,
  PageHeader,
  SingleExpertBox,
} from '../components';

import exImg1 from '../images/expert-1.jpg';
import exImg2 from '../images/expert-2.jpg';
import exImg3 from '../images/expert-3.jpg';
import bgImg from '../images/image-6.jpg';

const About = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <PageHeader
        headline='About Us'
        subheading='Bailey Chambers // About Us'
        img={bgImg}
      />

      <AboutUs />

      <section className='experts container'>
        <Heading
          title='Our Experts'
          subtitle='meet the experts'
          bgColor='white-bg'
        />

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

      <CTA headline='Got any questions?' />
    </motion.div>
  );
};

export default About;
