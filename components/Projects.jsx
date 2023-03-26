import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import signuploginImg from '../public/assets/projects/signuplogin.png';
import appleImg from '../public/assets/projects/apple.png'
import pokemonImg from '../public/assets/projects/pokemon.png'
import upworkImg from '../public/assets/projects/upwork.png'
import dommanipulationImg from '../public/assets/projects/dommanipulation.png'
import todoImg1 from '../public/assets/projects/todo1.png'
import calculatorImg from '../public/assets/projects/calculator.png'
import quizImg1 from '../public/assets/projects/quiz1.png'
import mascoImg from '../public/assets/projects/masco.png'
import stopwatchImg from '../public/assets/projects/stopwatch.png'
import quizImg2 from '../public/assets/projects/quiz2.png'
import todoImg2 from '../public/assets/projects/todo2.png'
import mcdonaldsImg from '../public/assets/projects/mcdonalds.png'
import apiintegrationImg from '../public/assets/projects/apiintegration.png'
import lmsImg from '../public/assets/projects/lms.png'
import searchingImg from '../public/assets/projects/searching.png'
import searchFilterImg from '../public/assets/projects/search-filter.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='uppercase text-lg font-semibold tracking-widest text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-3 gap-16'>
          <ProjectItem
            title='Sign Up/Login UI'
            backgroundImg={signuploginImg}
            projectUrl='/signuplogin'
            tech='HTML, CSS'
          />
          <ProjectItem
            title='Apple - Landing Page'
            backgroundImg={appleImg}
            projectUrl='/apple'
            tech='HTML, CSS'

          />
          <ProjectItem
            title='Pokemon App'
            backgroundImg={pokemonImg}
            projectUrl='/pokemon'
            tech='HTML, CSS'

          />
          <ProjectItem
            title='Upwork'
            backgroundImg={upworkImg}
            projectUrl='/upwork'
            tech='HTML, CSS'

          />
          <ProjectItem
            title='DOM Manipulation'
            backgroundImg={dommanipulationImg}
            projectUrl='/dommanipulation'
            tech='HTML, CSS, JS'

          />
          <ProjectItem
            title='Todo App'
            backgroundImg={todoImg1}
            projectUrl='/todo1'
            tech='HTML, CSS, JS'

          />
          <ProjectItem
            title='Calculator'
            backgroundImg={calculatorImg}
            projectUrl='/calculator'
            tech='HTML, CSS, JS'

          />
          <ProjectItem
            title='Stopwatch'
            backgroundImg={stopwatchImg}
            projectUrl='/stopwatch'
            tech='HTML, CSS, JS'

          />
          <ProjectItem
            title='Quiz'
            backgroundImg={quizImg1}
            projectUrl='/quiz'
            tech='HTML, CSS, JS'

          />
          <ProjectItem
            title='Masco'
            backgroundImg={mascoImg}
            projectUrl='/masco'
            tech='HTML, CSS, JS'

          />
          <ProjectItem
            title='Site Search'
            backgroundImg={searchingImg}
            projectUrl='/searching'
            tech='HTML, CSS, JS-ES2105'

          />
            <ProjectItem
              title='React Todo'
              backgroundImg={todoImg2}
              projectUrl='/todo2'
              tech='ReactJS'
  
            />
            <ProjectItem
              title='Site Search/Filter'
              backgroundImg={searchFilterImg}
              projectUrl='/searchFilter'
              tech='ReactJS'
  
            />
          <ProjectItem
            title='Quiz'
            backgroundImg={quizImg2}
            projectUrl='/quiz2'
            tech='ReactJS'

          />
          <ProjectItem
            title='Mc Donalds'
            backgroundImg={mcdonaldsImg}
            projectUrl='/mcdonalds'
            tech='ReactJS'

          />
          <ProjectItem
            title='API Integration'
            backgroundImg={apiintegrationImg}
            projectUrl='/apiintegration'
            tech='ReactJS'

          />
          <ProjectItem
            title='LMS'
            backgroundImg={lmsImg}
            projectUrl='/lms'
            tech='ReactJS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
