import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';


const resume = () => {
  return (
    <>
      <Head>
        <title>Farah | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Farah Syed</h2>
          <div className='flex'>
            <a
              href={process.env.NEXT_PUBLIC_LINKEDIN}
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href={process.env.NEXT_PUBLIC_GITHUB}
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Web Development <span className='px-1'>|</span> Team Work
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Web Development</p>
            <p className='py-2'>Team Work</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web and mobile hybrid application
           development professional with a passion for well-designed (UI) and functional (UX)
           web and mobile applications. I’ve recently completed Web and Mobile Hybrid
            Application Development (MERN Stack) and have built a few projects by myself.
            I am currently enrolled in web 3.0 and metaverse course by Jawan Pakistan.
            I am eager to bring my strong sense of dedication, motivation and 
            responsibility to an Organization and enhance my professional skills in a 
            stable and dynamic workplace.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>MERN Stack Developer
            <span className='px-2'>|</span>Mobile App Developer
            <span className='px-2'>|</span>HTML5
            <span className='px-2'>|</span>CSS3
            <span className='px-2'>|</span>JS-ES2015
            <span className='px-2'>|</span>Bootstrap
            <span className='px-2'>|</span>Git & GitHub
            <span className='px-2'>|</span>Firebase
            <span className='px-2'>|</span>ReactJS
            <span className='px-2'>|</span>Material UI
            <span className='px-2'>|</span>React-Redux
            <span className='px-2'>|</span>Redux Toolkit
            <span className='px-2'>|</span>React Native
            <span className='px-2'>|</span>NextJS
            <span className='px-2'>|</span>TailwindCSS
            <span className='px-2'>|</span>Sass
            <span className='px-2'>|</span>NodeJS
            <span className='px-2'>|</span>ExpressJS
            <span className='px-2'>|</span>MongoDB
            <span className='px-2'>|</span>REST APIs
          </p>
          {/* <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p> */}
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>

        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Teaching & Mentoring Web Development
            </span>
            <span className='px-2'>|</span>Karachi, Pakistan
          </p>
          <p className='py-1 italic'>Mentoring Online (2022 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              In August, 2022 I started mentoring online focused on
              sharing what I’m learning in web development, specifically
              MERN Stack development.
            </li>
            <li>
              Private 1 on 1 coaching on Google Meet related to web development.
              More specifically debugging, teaching web development
              concepts and code reviews.
            </li>
          </ul>
        </div>

        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Charter for Compassion - Pakistan
            </span>
            <span className='px-2'>|</span>Karachi, Pakistan
          </p>
          <p className='py-1 italic'>Academic Trainee (2020 - 2021)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Academic Curriculum Development
            </li>
            <li>
            Description: Worked in a team for more than 300 Schools across Pakistan 
            regarding Lesson Plans, Paper Development, Result Sheets, Worksheets, Students 
            Learning Outcomes, Teachers Training, Training Needs Analysis (TNA), etc.
            </li>
          </ul>
        </div>

        {/* <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5> */}
      
        {/* Experience */}
        {/* <div className='py-6'>
          
        </div> */}
      </div>
    </>
  );
};


export default resume;