import React from 'react';
import Slider from '../components/Slider/Slider';
import { SliderData } from '../components/Slider/SliderData';
import AboutUs from '../components/AboutUs';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <main>
        <Slider slides={SliderData} />
      </main>
      <AboutUs />
      <CTA headline='Want to find out more?' />
    </>
  );
};

export default Home;
