import React from 'react';
import { Link } from 'react-router-dom';

//Assets
import Logo from './../assets/Logo.png';
import { ReactComponent as FBLight } from './../assets/lite.svg';
import { ReactComponent as TwitterLight } from './../assets/tw-lite.svg';
import { ReactComponent as InstagramLight } from './../assets/ig-lite.svg';

const Footer = () => {
  const menu1 = [
    {
      id: 1,
      text: 'About Us',
      link: '/',
    },
    {
      id: 2,
      text: 'Responsibilities',
      link: '/',
    },
    {
      id: 3,
      text: 'Contact Us',
      link: '/',
    },
    {
      id: 4,
      text: 'Our Services',
      link: '/',
    },
  ];

  const menu2 = [
    {
      id: 1,
      text: 'Disclaimer',
      link: '/',
    },
    {
      id: 2,
      text: 'Testimonials',
      link: '/',
    },
    {
      id: 3,
      text: 'Privacy Policy',
      link: '/',
    },
    {
      id: 4,
      text: 'Terms of Service',
      link: '/',
    },
  ];

  const menu3 = [
    {
      id: 1,
      text: 'Affiliate',
      link: '/',
    },
    {
      id: 2,
      text: 'Become Partner',
      link: '/',
    },
  ];
  const socialIcons = [
    {
      id: 1,
      icon: <FBLight />,
      link: '/',
    },
    {
      id: 2,
      icon: <TwitterLight />,
      link: '/',
    },
    {
      id: 3,
      icon: <InstagramLight />,
      link: '/',
    },
  ];

  const headers = [
    {
      id: 1,
      text: 'Product',
    },
    {
      id: 1,
      text: 'Engage',
    },
    {
      id: 1,
      text: 'Earn Money',
    },
  ];

  return (
    <div className='bg-footer text-grey'>
      <div className=' sm:px-36 lg:mx-8 ml-4  py-20'>
        <div className='flex flex-col sm:flex-row justify-between'>
          <div className='flex flex-col'>
            <Link to='/'>
              <img src={Logo} className='mb-6' height='100' alt='' />
            </Link>
            <div>
              <p className='font-medium'>
                LaslesVPN is a private virtual network <br /> that has unique
                features and has high security.{' '}
              </p>
            </div>

            <div className='flex flex-row items-center mt-4'>
              {socialIcons.map((x) => (
                <a
                  key={x.id}
                  href={x.link}
                  className={x.id === 3 ? '' : '  mr-5'}
                >
                  {x.icon}
                </a>
              ))}
            </div>
            <span className='mb-4 sm:mt-8'>
              © {new Date().getFullYear()} Lasles VPN
            </span>
          </div>

          {headers.map((x) => (
            <div className='flex flex-col'>
              <h3 className='text-dark font-medium mb-5'>{x.text}</h3>
              {x.id === 1 &&
                menu1.map((x) => (
                  <a key={x.id} href={x.link} className='mb-2.5 '>
                    {x.text}
                  </a>
                ))}
              {x.id === 2 &&
                !(x.id === 3 || x.id === 1) &&
                menu2.map((x) => (
                  <a key={x.id} href={x.link} className='mb-2.5 '>
                    {x.text}
                  </a>
                ))}
              {x.id === 3 &&
                menu3.map((x) => (
                  <a key={x.id} href={x.link} className='mb-2.5 '>
                    {x.text}
                  </a>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
