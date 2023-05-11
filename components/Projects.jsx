import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import allProjects from './AllProjects';
import { FaGithub } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';
import { IoIosArrowDroprightCircle } from 'react-icons/io';


const Projects = () => {

  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filterList, setFilterList] = useState([]); //  List of items filtered by the user

  // Extract Unique Categories from allProjects list
  const getCategory = e => {
    let li = allProjects.map(x => x.category);
    li = [...new Set([...li])];
    setCategory([...li]);
  };

  // Set selected Category in selectedCategory and Update Filtered List
  const selectChip = e => {
    if (e === "All") {
      // console.log(e)
      setSelectedCategory("");
      setFilterList("");
    } else {
      // console.log(e)
      setSelectedCategory(e);
      setFilterList([e]);
      let arr = [];
      arr = [...allProjects.filter(x => x.category == e)];
      
      setFilterList([...arr]); // Update the filtered Products
    }
  };

  useEffect(() => {
    getCategory();
  }, [])


  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='uppercase text-lg font-semibold tracking-widest text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        
        
        <section className='flex justify-center items-center mt-5 mb-12'>
        {/* Mapping all Chips */}
        <div onClick={() => selectChip('All')} className={`mr-5 p-1.5 px-3 ${selectedCategory == "" ?'text-white bg-[#5651e5]':'text-black bg-white'} font-bold rounded-md hover:cursor-pointer hover:text-white hover:bg-[#5651e5]`}>
          <small>All</small>
        </div>
        {
          category && category.length > 0
            ? category.map((e, i) => {
              return (
                  <div key={i} onClick={() => selectChip(e, i)} className={`mr-5 p-1.5 px-3 ${selectedCategory === "Web App" && i === 0 ? 'text-white bg-[#5651e5]' : selectedCategory === "Mobile App" && i === 1 ? 'text-white bg-[#5651e5]' :'text-black bg-white'} font-bold rounded-md hover:cursor-pointer hover:text-white hover:bg-[#5651e5]`}>
                    <small>{e}</small>
                  </div>
                );
              })
            : null
              // <View style={[{width: fullWidth}]}>
              //   <Loader size={25} color={'#ddd'} />
              // </View>
          }
        </section> 
      

        {/* Filter Cards According to their Category */}
        {filterList && filterList.length > 0 ? 
        <div className='grid md:grid-cols-3 gap-16'>
        {filterList.map((e, i) => {
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
        }
        </div> 

        : 
        <div className='grid md:grid-cols-3 gap-16'>
          {/* Mapping All Cards */}
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
        }
      </div>
    </div>
  );
};


export default Projects;