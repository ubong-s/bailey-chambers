import React from 'react';
import CaseSection from '../../components/CaseSection';
import PageHeader from '../../components/PageHeader';
import bgImg from '../../images/image-1.jpg';
import { CasesData } from './CasesData';
import '../../scss/pages/Cases.scss';
import CTA from '../../components/CTA';

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

          console.log(item);
          return <CaseSection key={id} {...item} />;
        })}
      </section>

      <CTA headline='Make an enquiry' />
    </>
  );
};

export default Cases;
