import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Avatar from '../public/assets/avatar.png';


const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-lg font-semibold tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            I specialize in building full stack web and mobile hybrid applications 
            using latest technologies. I’m passionate about learning new technologies 
            and understand there is more than one way to accomplish a task. Though I am 
            most proficient in building applications using HTML, CSS, JavaScript, 
            TypeScript, ReactJS, NextJS, React Native, NodeJS, ExpressJS, MongoDB, 
            I systematically acquire and apply knowledge, continuously refine my skills, 
            and work towards a deep understanding of complex software engineering concepts 
            and technologies.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={Avatar} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};


export default About;