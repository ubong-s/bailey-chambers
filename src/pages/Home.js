import { motion } from 'framer-motion';
import React from 'react';
import { containerVariants } from '../animation';
import {
  Slider,
  SliderData,
  AboutUs,
  CTA,
  Testimonials,
  TestimonialsData,
  OurExperts,
  Heading,
  PracticeAreas,
} from '../components';

const Home = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <main>
        <Slider slides={SliderData} />
      </main>
      <AboutUs />
      <PracticeAreas />
      <section className='grey-bg'>
        <Heading
          title='Our Experts'
          subtitle='meet the experts'
          bgColor='grey-bg'
        />
        <OurExperts />
      </section>
      <Testimonials testimonials={TestimonialsData} />
      <CTA headline='Want to find out more?' />
    </motion.div>
  );
};

export default Home;
