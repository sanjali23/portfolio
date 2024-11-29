import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <section className="md:mb-8 lg:mt-0 md:mt-0 mt-8 lg:mb-0 hero-section flex flex-col align-center flex-column">
      {/* <div className='flex justify-between pr-8'>
        <button className='flex'>
        <a href="/" class="bttn bttn-primary"> <span className='flex items-center gap-4'><img className="h-7 w-7 rounded-full" src={profilePic}/><p className='font-syne'>SANJALI SAHU</p>
                    </span>
                  </a>
          </button>
          <div className='text-sm font-medium tracking-widest uppercase font-syne text-white flex gap-12'>
            <a href="/about"><span className=''>About</span></a>
            <span className=''>Work</span>
          </div>
          </div> */}
      {console.log(window.innerWidth)}
      <h2 className="relative pl-4 pt-4 lg:pl-24 md:pt-8 md:pl-0 md:text-7xl font-russo lg:pt-heroh1 md:pt-0 align-center text-4xl lg:text-8xl flex flex-col lg:gap-20 gap-4 md:gap-12 text-white leading-10">
        <span>
          <span className="gradient">Coding</span> dreams
        </span>{" "}
        <span className="lg:ml-56 md:ml-20 md:whitespace-nowrap">
          into digital reality.
        </span>
        <img
          className="absolute lg:top-60 lg:left-52 h-20 md:w-fourRem md:top-36 md:left-4 lg:w-20 w-8 top-[-50%]"
          src="/star.svg"
        />
      </h2>
      <span className="opac-text text-grey w-72 lg:mx-24 md:mx-0 md:mt-12 lg:mt-24 lg:mb-12 lg:ml-28 ml-4 mt-4  font-syne  font-normal">
        Passionate about code craftsmanship, problem-solving, and shaping
        seamless digital experiences. Currently leading the way as a Fullstack
        Developer.
      </span>
    </section>
  );
};

export default Hero;
