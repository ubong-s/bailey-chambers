import React from 'react';
import Slider from '../components/Slider/Slider';
import { SliderData } from '../components/Slider/SliderData';
import AboutUs from '../components/AboutUs';
import CTA from '../components/CTA';
import Testimonials from '../components/Testimonials/Testimonials';
import { TestimonialsData } from '../components/Testimonials/TestimonialsData';
import OurExperts from '../components/OurExperts';
import Heading from '../components/Heading';
import PracticeAreas from '../components/PracticeAreas';

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
