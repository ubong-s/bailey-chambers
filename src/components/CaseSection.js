import React from 'react';
import '../scss/pages/Cases.scss';

const CaseSection = ({
  subheading,
  caseHeading,
  charges,
  verdict,
  img,
  imgReverse,
}) => {
  return (
    <div className={imgReverse ? 'case reverse' : 'case'}>
      <div className='case-img'>
        <img src={img} alt={caseHeading} />
      </div>
      <div className='case-info'>
        <h4>{subheading}</h4>
        <h2>{caseHeading}</h2>
        <div className='case-info-inner'>
          <h5>Charges</h5>
          <p>{charges}</p>
        </div>
        <div className='case-info-inner'>
          <h5>Verdict</h5>
          <p>{verdict}</p>
        </div>
      </div>
    </div>
  );
};

export default CaseSection;
