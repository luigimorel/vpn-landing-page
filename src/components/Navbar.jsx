import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

//Assets
import Logo from './../assets/Logo.png';
import { ReactComponent as BurgerMenu } from './../assets/BurgerMenu.svg';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  // State for the navbar
  const [open, setOpen] = useState(false);
  const scrollRef = useRef(null);

  const scroll = () => {
    scrollRef.current.scrollIntoView();
  };

  const menuList = [
    {
      id: 1,
      text: 'About',
      route: '#about',
    },
    {
      id: 2,
      text: 'Features',
      route: '#features',
    },
    {
      id: 3,
      text: 'Pricing',
      route: '#pricing',
    },
    {
      id: 4,
      text: 'Testimonials',
      route: '#testimonials',
    },
    {
      id: 5,
      text: 'Help',
      route: '#help',
    },
  ];
  return (
    <nav className='mx-4 sm:mx-8 lg:mx-40 px-4'>
      <div className='flex justify-between pt-3 sm:pt-4 sm:pb-8'>
        <img src={Logo} alt='Logo' className='' />
        <div ref={scrollRef} className='hidden md:flex items-center space-x-1'>
          {menuList.map((x) => (
            <Link
              key={x.id}
              onClick={scroll}
              to={x.route}
              className='py-3 px-2 font-semibold '
            >
              {x.text}
            </Link>
          ))}
          <Link to='/'>
            <button className=' ml-32  mr-8 text-dark font-bold border-0 transition duration-500 ease-in-out hover:mr-2  transform hover:-translate-y-1 hover:scale-110 rounded-md px-5 py-2.5 hover:bg-primary '>
              Sign In
            </button>
          </Link>

          <Link to='/'>
            <button className=' border-2  rounded-xl hover:text-white text-primary font-bold transition duration-500 ease-in-out  hover:mr-2 transform hover:-translate-y-1 hover:scale-110  px-5 py-2.5 hover:bg-primary '>
              Sign Up
            </button>
          </Link>
        </div>
        <div className='md:hidden flex items-center'>
          <button
            className='outline-none mobile-menu-button'
            onClick={() => setOpen(!open)}
          >
            <BurgerMenu />
          </button>
        </div>
      </div>

      {/* Start of the mobile nav bar  */}
      {open && <MobileNavbar />}
    </nav>
  );
};

export default Navbar;
