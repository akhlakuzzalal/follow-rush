import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Facebook from '../public/Facebook.svg';
import LinkedIn from '../public/LinkedIn.svg';

const Footer = ({ current, setCurrent }) => {
  const privacy = [
    { name: 'Terms', href: '/terms', current: false },
    { name: 'Privacy', href: '/privacy', current: true },
    { name: 'FAQ', href: '/faq', current: false },
  ];
  const navigation = [
    { name: 'Blog', href: '/blog', current: false },
    { name: 'About Us', href: '/aboutUs', current: true },
    { name: 'Shop', href: '/shop', current: false },
    { name: 'Home', href: '/', current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <footer className="h-[400px] xl:h-[250px] sm:h-[450px] bg-[#FFD84D85] xl:flex xl:flex-col xl:items-center xl:justify-center">
      <div className="xl:flex xl:flex-row xl:items-center xl:justify-evenly pt-5 text-center flex flex-col-reverse">
        <div className="space-y-4 xl:mr-[150px]">
          <div className="xl:flex flex items-center justify-center space-x-4">
            <p className="text-[18px] text-[#1E1E1E]">Follow Us on</p>
            <div className="opacity-50">
              <Link href="https://www.linkedin.com/" passHref>
                <Image
                  src={LinkedIn}
                  width={24}
                  alt="LinkedIn"
                  className="cursor-pointer"
                />
              </Link>
            </div>
            <div className="opacity-50">
              <Link href="https://www.facebook.com" passHref>
                <Image
                  src={Facebook}
                  width={24}
                  alt="Facebook"
                  className="cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="xl:flex xl:space-x-16 xl:flex-row flex flex-col-reverse">
          <div className="xl:flex xl:space-x-8 xl:mb-2 flex justify-center space-x-8 mb-4">
            {privacy.map((item) => (
              <Link href={item?.href} key={item.name} passHref>
                <p
                  onClick={() => setCurrent(item?.href)}
                  className={classNames(
                    item.href === current
                      ? 'text-[#000000] font-medium'
                      : 'text-[#1E1E1E]'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <Link href={item?.href}>{item.name}</Link>
                </p>
              </Link>
            ))}
          </div>

          <div className="border-r-2 border-[#1E1E1E] border-opacity-50 hidden xl:inline" />

          <div className="xl:flex xl:space-x-8 xl:space-y-0 xl:mb-2 space-y-4 mb-6">
            {navigation.map((item) => (
              <Link href={item?.href} key={item.name} passHref>
                <p
                  onClick={() => setCurrent(item?.href)}
                  key={item.name}
                  className={classNames(
                    item.href === current
                      ? 'text-[#000000] font-medium'
                      : 'text-[#1E1E1E]'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <Link href={item?.href}>{item.name}</Link>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-b-2 border-[#1E1E1E] border-opacity-30 my-[30px] w-10/12 mx-auto cursor-pointer" />
      <p className="text-center font-light">
        2022 -All rights reserved - Follow Rush
      </p>
    </footer>
  );
};

export default Footer;
