import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, backgroundImg, tech, projectUrl}) => {
  return (
    <section>
      <div className='relative bg-white p-3 shadow-xl shadow-gray-400 rounded-xl'>
        <section className='relative flex items-center justify-center h-auto w-full rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
          <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' /> 
          <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              {/* <h3 className='text-2xl text-white text-center'>{title}</h3> */}
              <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
              <Link href={projectUrl}>
                  <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-md cursor-pointer'>More Info</p>
              </Link>
          </div>
        </section>
        <div className='p-3'>
            <h3 className='pt-2 text-center text-xl '>{title}</h3>
            <h3 className='pt-2 text-center text-xl tracking-wider'>{title}</h3>
          </div>
      </div>
    </section>
  )
}

export default ProjectItem