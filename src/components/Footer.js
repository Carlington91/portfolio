import React, { useEffect, useRef } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const backToTopRef = useRef('');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const backToTopBtn = backToTopRef.current.classList;

    return window.scrollY > 150
      ? backToTopBtn.add('scroll')
      : backToTopBtn.remove('scroll');
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer>
      <div className='container'>
        <div className='copyright'>
          &copy; {new Date().getFullYear()}, Carlington Ferguson
        </div>

        <button
          className='back_to_top'
          ref={backToTopRef}
          onClick={handleClick}
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
