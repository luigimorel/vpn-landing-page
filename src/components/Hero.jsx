import React from 'react';

// Assets
import HeroImg from './../assets/Hero.png';
import { ReactComponent as User } from './../assets/user.svg';
import { ReactComponent as Location } from './../assets/location.svg';
import { ReactComponent as ServerIcon } from './../assets/Server.svg';

const Hero = () => {
  return (
    <>
      <div className='flex sm:flex-row flex-col-reverse sm:px-20 px-8 items-center justify-between'>
        <div className='mr-10 mt-8 sm:mb-0 lg:ml-24 '>
          <h2 className='text-5xl text-dark font-semibold mb-5 w-4/5'>
            Want anything to be easy with
            <span className='font-bold'> LaslesVPN</span>.
          </h2>
          <p className='text-grey font-medium mb-12 w-4/5 '>
            Provide a network for all your needs with ease and fun using
            <span className='font-bold'> LaslesVPN</span> discover interesting
            features from us.
          </p>

          <button className='bg-primary drop-shadow-2xl text-white font-bold py-4 px-16 rounded-lg'>
            Get Started
          </button>
        </div>
        <div>
          <img src={HeroImg} alt='' />
        </div>
      </div>

      <div className='flex sm:flex-row mt-28 sm:mx-20 lg:mx-44 py-16 px-8 bg-white flex-col justify-around sm:justify-between'>
        <div className='flex flex-row items-center justify-around sm:justify-between '>
          <span className='mr-9'>
            <User />
          </span>
          <div className='flex flex-col '>
            <span className='text-2xl font-bold mr-8 sm:mr-0 text-dark'>
              90+
            </span>
            <span className='text-grey text-xl'>Users</span>
          </div>
        </div>
        <div className='w-0.5	h-auto bg-grey'></div>
        <div className='flex flex-row items-center justify-around sm:justify-between mt-4 sm:mt-0 '>
          <span className='mr-9'>
            <Location />
          </span>
          <div className='flex flex-col '>
            <span className='text-2xl font-bold text-dark'>30+</span>
            <span className='text-grey text-xl'>Locations</span>
          </div>
        </div>{' '}
        <div className='w-0.5	h-auto  bg-grey'></div>
        <div className='flex flex-row items-center justify-around sm:justify-between mt-4 sm:mt-0 '>
          <span className='mr-9'>
            <ServerIcon />
          </span>
          <div className='flex flex-col '>
            <span className='text-2xl font-bold  mr-8 sm:mr-0 text-dark'>
              50+
            </span>
            <span className='text-grey text-xl'>Servers</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
