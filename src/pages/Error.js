import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/pages/Error.scss';

const Error = () => {
  return (
    <div className='error'>
      <div className='container'>
        <h1>Ouch, page doesn't exist</h1>
        <Link to='/' className='btn'>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
