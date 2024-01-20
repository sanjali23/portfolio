import React from 'react';
import './about.css'
import profilePic from '../../assets/profile.jpeg'
import ThankYou from '../../Components/Thankyou/ThankYou';
const About = () => {
    return (
        <>
       <section className='flex gap-16 lg:flex-row md:flex-col flex-col lg:p-24 md:p-16 p-6 w-full'>
<div className='flex justify-center lg:w-1/2 md:w-full w-11/12 lg:pl-0 md:pl-0 pl-6'>
    <img src={profilePic} className='lg:rounded-xl md:rounded-full rounded-full'/>
</div>
<div className='flex flex-col gap-4 lg:w-1/2 md:w-full w-full lg:h-fourtyRem md:h-auto text-white border transition-transform transform hover:shadow-2xl rounded-xl font-syne py-8 lg:px-12 md:px-8 px-4'>
<h4 className='font-semibold lg:mb-2 md:mb-0 mb-0  about-text'>I'm a <span className='gradient'>Software Developer</span> with 1+ years of hands-on experience in developing and implementing innovative solutions.</h4>
<p className='about-text'>I'm passionate for crafting efficient, scalable, and maintainable solutions. With 1.5 years of hands-on experience, I have a strong foundation in ReactJS, NextJS, NodeJS, MongoDB, Express and so on, allowing me to contribute effectively to diverse projects. My expertise includes Front-end development, Back-end development, Database design, API integration, etc.</p>
</div>
       </section>
       <section className='text-white font-syne flex justify-center items-center lg:pb-12 md:pb-4 gap-8 lg:px-24 md:px-16 px-6 lg:py-0 md:py-0 py-4'>
       <div className='lg:w-4/5 md:w-full w-full flex-col flex lg:gap-0 md:gap-2 gap-2 tracking-wider leading-8'>
         <h5 className='text-sm font-regular text-grey uppercase'>My values</h5>
         <h6 className='lg:text-3xl md:text-3xl text-xl leading-8 font-semibold lg:mb-4 md:mb-2 mb-0 leading-10'>Continuous learning is at the core of professional philosophy</h6>
        <p className='text-xl font-normal text-greywhite'>I stay updated with the latest advancements in technology to ensure that I can provide innovative and effective solutions. I am a proactive problem solver, detail-oriented, and dedicated to delivering software that not only meets but exceeds expectations. I am adept at collaborating with cross-functional teams, understanding client requirements, and delivering high-quality software solutions that align with business objectives. Beyond the code, I am driven by a passion for innovation. I am constantly exploring ways to enhance user experiences, optimize performance, and contribute to the development of cutting-edge technologies.</p>
        
        </div>
       </section>
       <ThankYou/>
       </>
    );
  };
  
  export default About;