import {useRouter} from 'next/router'
import Image from 'next/image';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import allProjects from '../components/AllProjects';


function projectId() {

  const router = useRouter();
  const projectId = router.query.projectId;

  // Find the matching URL from all Projects
  let project = allProjects.find(function (obj, index) {
    if(obj.relativeUrl == `/${projectId}`){
    return obj
  }
  })
  // const { id, title, image, relativeUrl, sourceCode, tech, category, description} = project;

  return (
    <>{project ?
    <div className='w-full'>
      <div className='w-full h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={project.image}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>{project.title}</h2>
          {project && project.tech.length > 0
            ?
            <p className='text-white font-bold'>{project.tech.join(", ")}</p>
            : null }
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2 className='pb-1'>Overview</h2>
          <p>{project.description}</p>
          <a
            href={project.sourceCode}
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href={project.projectUrl}
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            {project && project.tech.length > 0
            ?
            project.tech.map((x, i) => {
              return (
                <div className='grid grid-cols-3 md:grid-cols-1'>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' />{x}
                  </p>
                </div>
              )
            })
             : null }
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
    : null}
    </>
  )
}

export default projectId