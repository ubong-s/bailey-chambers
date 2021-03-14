import React from 'react';
import CTA from '../../components/CTA';
import PageHeader from '../../components/PageHeader';

import bgImg from '../../images/image-3.jpg';
import { CareersData } from './CareersData';
import CareerSingle from './CareerSingle';

const Careers = () => {
  return (
    <>
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
    </>
  );
};

export default Careers;
