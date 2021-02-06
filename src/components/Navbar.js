import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';

const NavItem = ({ to, label }) => {
  return (
    <li>
      <a href={`#${to}`}>{label}</a>
    </li>
  );
};

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (e) => {
    setOpen(false);

    return window.scrollY > 450 ? setIsSticky(true) : setIsSticky(false);
  };

  const handleMobileBtn = () => {
    setOpen((current) => !current);
  };

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className='navbar'>
        <div className='container'>
          <div className='nav-flex'>
            <a href='/' className='logo'>
              E-Porfolio
            </a>
            <button className='mobile_btn' onClick={handleMobileBtn}>
              <FaBars />
            </button>
            <nav className={`nav ${open ? 'show' : 'hide'}`}>
              <NavItem to='hero' label='Home' />
              <NavItem to='about' label='About' />
              <NavItem to='resume' label='Resume' />
              <NavItem to='portfolio' label='Portfolio' />
              <NavItem to='contact' label='Contact' />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
