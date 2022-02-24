import React from 'react';
import { Link } from 'react-router-dom';

//Assets
import { ReactComponent as PlanIllustration } from './../assets/Free.svg';
import { ReactComponent as TickSmall } from './../assets/TickSmall.svg';

const Plans = () => {
  const plans = [
    {
      id: 1,
      img: <PlanIllustration />,
      heading: 'Free Plan',
      tick: <TickSmall />,
      offers: [
        { id: 1, text: 'Unlimited Bandwidth' },
        { id: 2, text: 'Encrypted Connection' },
        { id: 3, text: 'No Traffic Logs' },
        { id: 4, text: 'Works on All Devices' },
      ],
      price: 'Free ',
    },
    {
      id: 2,
      img: <PlanIllustration />,
      heading: 'Standard Plan',
      tick: <TickSmall />,
      offers: [
        { id: 1, text: 'Unlimited Bandwidth' },
        { id: 2, text: 'Encrypted Connection' },
        { id: 3, text: 'No Traffic Logs' },
        { id: 4, text: 'Works on All Devices' },
        { id: 5, text: 'Connect Anyware' },
      ],
      price: '$9  ',
      duration: 'mo',
    },
    {
      id: 3,
      img: <PlanIllustration />,
      heading: 'Premium Plan',
      offers: [
        { id: 1, text: 'Unlimited Bandwidth' },
        { id: 2, text: 'Encrypted Connection' },
        { id: 3, text: 'No Traffic Logs' },
        { id: 4, text: 'Works on All Devices' },
        { id: 5, text: 'Connect Anyware' },
        { id: 6, text: 'Get New Features' },
      ],
      price: '$12 ',
      duration: 'mo',
    },
  ];
  return (
    <div className='sm:px-24 lg:mx-20 px-8 mb-36'>
      <div className='text-center'>
        <h2 className='text-4xl mb-5 text-dark font-medium'>
          Choose Your Plan
        </h2>
        <p className='text-grey mb-14'>
          Let's choose the package that is best for you and
          <br className='hidden sm:inline' /> explore it happily and cheerfully.
        </p>
      </div>
      <div className='flex sm:flex-row flex-col  justify-between'>
        {plans.map((x) => (
          <div
            key={x.id}
            className='flex h-auto flex-col mb-4 sm:mb-0 rounded-sm plan-container hover:bg-white transition delay-100 hover:border-red-600 border-2'
          >
            <div className=' px-16'>
              <div className='pt-16 mb-8'>
                <PlanIllustration />
              </div>
              <h3 className='mb-8 text-lg text-dark font-medium text-center'>
                {x.heading}
              </h3>
              {x.offers.map((y) => (
                <span className='flex flex-row'>
                  <TickSmall />
                  <p className='ml-5 text-grey mb-2.5'>{y.text}</p>
                </span>
              ))}

              <h3 className='text-lg  mb-5 mt-10  font-medium text-center'>
                <span className='text-dark text-2xl'>{x.price}</span>{' '}
                {x.id !== 1 ? '/' : ''}{' '}
                <span className='text-grey'>{x.duration}</span>
              </h3>
              <div className='flex justify-center'>
                <Link to='/'>
                  <button
                    className={
                      ' border-2 my-auto mb-8 plan-button rounded-3xl hover:text-white text-primary border-red-600 font-bold   hover:mr-2  hover:scale-110  px-8 py-2.5 hover:bg-primary '
                    }
                  >
                    Select
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
