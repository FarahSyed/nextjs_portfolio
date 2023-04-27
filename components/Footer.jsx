import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavLogo from '../public/assets/navLogo.png'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';


const Footer = () => {
  return (
    <div className='w-full md:h-50 mt-80 bg-[#d0d4d6] px-10 py-5 flex justify-between items-center'>
      <Link href='/'>
          {/* <a> */}
          <div>
            <Image
              src={NavLogo}
              alt='/'
              width='55'
              height='20'
              className='cursor-pointer'
              />
            </div>
          {/* </a> */}
        </Link>
        
      <div>
      <small><b>Copyright &#169;
        {/* <BiCopyright size={12} /> */}
         {new Date().getFullYear()} - All rights reserved.</b></small>
      </div>
        
          <div>
            <Link href='/'>
              {/* <a> */}
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#ecf0f3]'>
                  <HiOutlineChevronDoubleUp
                    className='text-[#5651e5]'
                    size={20}
                  />
                </div>
              {/* </a> */}
            </Link>
          </div>
    </div>
  );
};


export default Footer;