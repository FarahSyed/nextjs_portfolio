import Image from 'next/image';
import React from 'react';
import signuploginImg from '../public/assets/projects/signuplogin.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const signuplogin = () => {
  return (
    <div className='w-full'>
      <div className='w-full h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={signuploginImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>SignUp / Login UI</h2>
          <h3>HTML / CSS</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using HTML, CSS and is hosted on Firebase. It is a simple
            Signup and login UI created with several HTML elements including HTML5 
            form controls with validation and styled using CSS external style sheet.
            Users are able to signup using their Full Name, Email, and a Password of 
            their choice which must be atleast 6 characters long. They can also login 
            using Email and Password.
          </p>
          <a
            href='https://github.com/Dev-Farah/Login_and_Signup_Form'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://signup-and-login-forms.web.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HTML
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};


export default signuplogin;