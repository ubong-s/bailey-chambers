import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { useWindowScroll } from 'react-use';
import '../scss/App.scss';

const BackToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  const showOnScroll = () => {
    if (pageYOffset > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const topScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    showOnScroll();
  }, [pageYOffset]);

  if (!visible) {
    return false;
  }

  return (
    <div className='to-top' onClick={topScroll}>
      <FaArrowUp />
    </div>
  );
};

export default BackToTop;
