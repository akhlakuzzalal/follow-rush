import { Disclosure } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { CgMenuRightAlt } from 'react-icons/cg';
import MainLogo from '../public/mainlogo.svg';
import CheckOutsideClick from './context/CheckOutsideClick';

const Navbar = ({ current, setCurrent }) => {
  const navigation = [
    { name: 'Blog', href: '/blog', current: true },
    { name: 'About Us', href: '/aboutUs', current: true },
    { name: 'Shop', href: '/shop', current: true },
    { name: 'Home', href: '/', current: true },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Disclosure as="nav">
      {/* {({ open }) => ( */}
      <>
        <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8 md:mt-2">
          <div className="flex items-center h-16">
            <div className="flex-1 flex items-center justify-center md:justify-between">
              <div className="flex-shrink-0 flex items-center md:items-start cursor-pointer">
                <Link href="/" passHref>
                  <Image
                    onClick={() => setCurrent('/')}
                    className="block lg:hidden w-auto"
                    src={MainLogo}
                    alt="Workflow"
                    height={50}
                    width={200}
                  />
                </Link>
              </div>
              <div className="hidden md:block md:ml-6">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link href={item?.href} key={item.name} passHref>
                      <p
                        onClick={() => setCurrent(item?.href)}
                        className={classNames(
                          item.href === current
                            ? 'text-[#000000] border-b-4 border-[#FFCE1E]'
                            : 'text-[#1E1E1E]',
                          'px-2 py-1 font-medium'
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
            <div className="fixed top-0 right-0 flex items-center md:hidden mt-5">
              {/* Mobile menu button*/}
              <button className="flex items-center justify-end px-[20px] pt-2 rounded-md text-gray-600 ">
                {isOpen ? (
                  <XIcon
                    onClick={() => setIsOpen(false)}
                    className="block h-6 w-6"
                    aria-hidden="true"
                  />
                ) : (
                  <CgMenuRightAlt
                    className="block h-6 w-6"
                    aria-hidden="true"
                    onClick={() => setIsOpen(true)}
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <CheckOutsideClick onClickOutside={handleClose}>
            <div className="md:hidden fixed inset-x-0 z-50 bg-white pt-0">
              <div className="px-2 pt-2 pb-4 space-y-1 text-center">
                {navigation.map((item) => (
                  <div
                    key={item?.name}
                    onClick={() => {
                      setCurrent(item?.href);
                      setIsOpen(false);
                    }}
                  >
                    <button
                      className={classNames(
                        item.href === current
                          ? 'text-[#000000] border-b-4 border-[#FFCE1E] w-3/12 mx-auto font-bold'
                          : 'text-[#1E1E1E] w-3/12 mx-auto',
                        'block py-[12px] font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <Link href={item?.href}>{item.name}</Link>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </CheckOutsideClick>
        )}
      </>
      {/* )} */}
    </Disclosure>
  );
};

export default Navbar;
