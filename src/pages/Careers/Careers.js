import React from 'react';
import { PageHeader, CTA } from '../../components';
import { CareersData } from './CareersData';
import CareerSingle from './CareerSingle';

import bgImg from '../../images/image-3.jpg';
import { motion } from 'framer-motion';
import { containerVariants } from '../../animation';

const Careers = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <PageHeader
        headline='Careers'
        subheading='Bailey Chambers // Careers'
        img={bgImg}
      />

      <section className='careers container'>
        {CareersData.map((item) => {
          const { id } = item;
          return <CareerSingle key={id} {...item} />;
        })}
      </section>

      <CTA headline='Make position enquiries' />
    </motion.div>
  );
};

export default Careers;
