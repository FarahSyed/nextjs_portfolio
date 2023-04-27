import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import ContactImg from '../public/assets/contact.jpg';


const Contact = () => {

   // This object will contain submitted form data
   const [object, setObject] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
   });
   const [errors, setErrors] = useState({});

   let validate = (e) => {
    e.preventDefault(); // Prevent page refresh on submit

    let isValid = true;

    if(object.name === '') {
        handleError('Enter your name', 'name');
        isValid = false;
    } 
    if(object.email === '') {
      handleError('Enter your email address', 'email');
      isValid = false;
    }
    if(object.message === '') {
        handleError('Enter your message', 'message');
        isValid = false;
    }
    if(isValid) {
    handleSubmit();
    }
   }
   
   const handleError = (error, input) => {
       setErrors(prevState => ({...prevState, [input]: error}));
   };

    // Saving form data in object
    const fillObject = (key, val) => {
      object[key] = val;
      setObject({ ...object });
    }

    const handleSubmit = () => {
      // console.log(object);
      setObject({
        name: "",
        phoneNumber: "",
        email: "",
        subject: "",
        message: "",
      })
      console.log("Form Submitted Successfully");
    
    }

  const fieldFocused = (input) => {
    setErrors(prevState => ({...prevState, [input]: ''}))
  }
  
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='uppercase text-lg font-semibold tracking-widest text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-3 pt-8'>Farah Syed</h2>
                <p>MERN Stack Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href={process.env.NEXT_PUBLIC_LINKEDIN}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href={process.env.NEXT_PUBLIC_GITHUB}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>

                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                  <Link href='/resume'>
                    {/* <a> */}
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                      </div>
                    {/* </a> */}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                // action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                method='POST'
                encType='multipart/form-data'
                onSubmit={validate}
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                      value={object.name} onFocus={() => fieldFocused('name')}
                      // required={true} 
                      onChange={(e) => fillObject('name', e.target.value)}
                    />
                  {errors && errors.name ? <small className='pt-2 pl-2 text-red-600'>{errors.name}</small> : null}
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='number'
                      name='phoneNumber'
                      value={object.phoneNumber}
                      onChange={(e) => fillObject('phoneNumber', e.target.value)}
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                    value={object.email} onFocus={() => fieldFocused('email')}
                    onChange={(e) => fillObject('email', e.target.value)}
                  />
                  {errors && errors.email ? <small className='pt-2 pl-2 text-red-600'>{errors.email}</small> : null}
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                    value={object.subject}
                    onChange={(e) => fillObject('subject', e.target.value)}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='8'
                    name='message'
                    value={object.message} onFocus={() => fieldFocused('message')}
                    // required={true}
                    onChange={(e) => fillObject('message', e.target.value)}
                  ></textarea>
                  {errors && errors.message ? <small className='pt-2 pl-2 text-red-600'>{errors.message}</small> : null}
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
       </div>
    </div>
  );
};


export default Contact;