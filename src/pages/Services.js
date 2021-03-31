import React from 'react';
import { PageHeader, ServiceBox, CTA } from '../components';
import injury from '../images/injury.jpg';
import banking from '../images/banking.jpg';
import corporate from '../images/corporate.jpg';
import justice from '../images/justice.jpg';
import family from '../images/family.jpg';
import business from '../images/business.jpg';
import bgImg from '../images/image-2.jpg';
import '../scss/pages/Services.scss';

const Services = () => {
  return (
    <>
      <PageHeader
        headline='Services'
        subheading='Bailey Chambers // Services'
        img={bgImg}
      />
      <section className='services-grid'>
        <div className='container'>
          <ServiceBox
            name='Business Law'
            desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, quam atque? Voluptatum magnam nihil neque '
            img={business}
          />
          <ServiceBox
            name='Family Law'
            desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, quam atque? Voluptatum magnam nihil neque '
            img={family}
          />
          <ServiceBox
            name='Justice Fight'
            desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, quam atque? Voluptatum magnam nihil neque '
            img={justice}
          />
          <ServiceBox
            name='Bank And Financial'
            desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, quam atque? Voluptatum magnam nihil neque '
            img={banking}
          />
          <ServiceBox
            name='Corporate Law'
            desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, quam atque? Voluptatum magnam nihil neque '
            img={corporate}
          />
          <ServiceBox
            name='Personal Injury'
            desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, quam atque? Voluptatum magnam nihil neque '
            img={injury}
          />
        </div>
      </section>

      <CTA headline='Interested in our services' />
    </>
  );
};

export default Services;
