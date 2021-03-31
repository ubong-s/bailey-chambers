import React from 'react';
import { PageHeader, CTA, CaseSection } from '../../components';
import bgImg from '../../images/image-1.jpg';
import { CasesData } from './CasesData';
import '../../scss/pages/Cases.scss';

const Cases = () => {
  return (
    <>
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
    </>
  );
};

export default Cases;
