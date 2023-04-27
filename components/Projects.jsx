import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import allProjects from './AllProjects';
import { FaGithub } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';
import { IoIosArrowDroprightCircle } from 'react-icons/io';


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='uppercase text-lg font-semibold tracking-widest text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-3 gap-16'>

        {allProjects && allProjects.length > 0
          ? allProjects.map((e, i) => {
            return (
              <section key={i}>
                <div className="relative bg-white p-3 rounded-xl shadow-xl hover:scale-105 ease-in duration-300">
                  <section className="relative flex items-center justify-center h-auto w-full rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <Image
                      className="rounded-xl group-hover:opacity-10"
                      src={e.image}
                      alt={e.title}
                    />
                    <div className="hidden w-40 group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                      <section className="flex justify-between">
                        <a
                          href={e.projectUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="rounded-full p-3 bg-black bg-opacity-40 text-white text-2xl cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiFillEye />
                          </div>
                        </a>
                        <a
                          href={e.sourceCode}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="rounded-full p-3 bg-black bg-opacity-40 text-white text-2xl cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaGithub />
                          </div>
                        </a>
                      </section>
                      
                    </div>
                  </section>
                  <span className="p-1.5 bg-white rounded-lg absolute top-[67%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <small className="px-1 font-bold text-gray-500">
                      {e.category}
                    </small>
                  </span>
                  <section className="pt-2 px-2">
                    <h3 className="pt-3 text-center text-xl">{e.title}</h3>
                      <span className='flex justify-end'>
                      <Link href={e.relativeUrl}>
                        <IoIosArrowDroprightCircle className="text-3xl text-gray-600" />
                      </Link>
                      </span>
                  </section>
                </div>
              </section>
            );
          })
        : null}
        
        </div>
      </div>
    </div>
  );
};


export default Projects;