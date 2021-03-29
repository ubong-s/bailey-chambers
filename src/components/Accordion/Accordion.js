import React, { useState } from 'react';
import { AccordionData } from './AccordionData';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import Heading from '../Heading';
import '../../scss/components/Accordion.scss';

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (id) => {
    if (clicked === id) {
      //   if clicked is already active, then close it
      return setClicked(null);
    }

    setClicked(id);
  };

  return (
    <IconContext.Provider value={{ color: '#1f2839', size: '25px' }}>
      <section className='accordion'>
        <Heading
          title='Frequently asked questions'
          subtitle='got any questions?'
          bgColor='white-bg'
        />

        <div className='accordion-grid container'>
          <div className='accordion-grid-list'>
            {AccordionData.slice(0, 4).map((item) => {
              const id = item.id;
              return (
                <article className='question' key={id}>
                  <div className='question-wrap' onClick={() => toggle(id)}>
                    <h4>{item.question}</h4>
                    <span>{clicked === id ? <FiMinus /> : <FiPlus />}</span>
                  </div>
                  {clicked === id ? <p>{item.answer}</p> : null}
                </article>
              );
            })}
          </div>
          <div className='accordion-grid-list'>
            {AccordionData.slice(4, 8).map((item) => {
              const id = item.id;
              return (
                <article className='question' key={id}>
                  <div className='question-wrap' onClick={() => toggle(id)}>
                    <h4>{item.question}</h4>
                    <span>{clicked === id ? <FiMinus /> : <FiPlus />}</span>
                  </div>
                  {clicked === id ? <p>{item.answer}</p> : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </IconContext.Provider>
  );
};

export default Accordion;
