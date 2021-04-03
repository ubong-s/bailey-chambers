import React from 'react';
import { motion } from 'framer-motion';
import { fadeInVar } from '../animation';
import '../scss/components/PageHeader.scss';

const PageHeader = ({ headline, subheading, img }) => {
  return (
    <section
      variants={fadeInVar}
      className='page-hero'
      style={
        img
          ? { backgroundImage: `url(${img})` }
          : { backgroundColor: '#1f2839' }
      }
    >
      <div className='container'>
        <motion.h1 variants={fadeInVar}>{headline}</motion.h1>
        <motion.h4 variants={fadeInVar}>{subheading}</motion.h4>
      </div>
    </section>
  );
};

export default PageHeader;
