import React from 'react';
import { PageHeader, CTA, CaseSection } from '../../components';
import bgImg from '../../images/image-1.jpg';
import { CasesData } from './CasesData';
import '../../scss/pages/Cases.scss';
import { motion } from 'framer-motion';
import { Actions, containerVariants } from '../../animation';

const Cases = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <PageHeader
        headline='Cases'
        subheading='Bailey Chambers // Cases'
        img={bgImg}
      />

      <section className='cases container'>
        {CasesData.map((item) => {
          const { id } = item;

          return <CaseSection key={id} {...item} />;
        })}
      </section>

      <CTA headline='Make an enquiry' />
    </motion.div>
  );
};

export default Cases;
