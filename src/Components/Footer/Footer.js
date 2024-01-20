import React, { useState, useEffect } from "react";
import "./footer.css";
const Footer = () => {
  const texts = ["Just Say hi!", "Enquire..", "Collaborate"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Change the text every 2 seconds
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-white footer-section">
      <div className="flex flex-col lg:gap-4 md:gap-4 gap-0 items-start">
        <p className="font-syne lg:text-5xl md:text-5xl text-2xl font-bold">
          Drop an email to
        </p>
        <div className="changing-text-container">
          {texts.map((text, index) => (
            <p
              key={index}
              className={`font-syne g:text-5xl md:text-5xl text-2xl gradient font-bold change-text ${
                index === currentTextIndex ? "visible" : "hidden"
              }`}
            >
              {text}
            </p>
          ))}
        </div>

        {/* <a className='button-gradient' href="mailto:sanjalisahu100@gmail.com"><a className='px-12 font-semibold uppercase leading-8 font-syne py-4 mt-4 rounded-full'>sanjalisahu100@gmail.com</a></a> */}
        <a
          href="mailto:sanjalisahu100@gmail.com"
          class="font-semibold uppercase mt-4 rounded-full button-gradient px-1 py-3 "
        >
          <span className="px-8 py-3 inner-span rounded-full bg-black font-syne font-semibold">
            sanjalisahu100@gmail.com
          </span>
        </a>
      </div>
      <div className="footer flex md:pt-20 pt-12 lg:gap-0 md:gap-0 gap-4 lg:justify-unset lg:items-unset md:justify-unset md:items-unset justify-center items-center lg:pt-20 uppercase lg:flex-row md:flex-row flex-col justify-between lg:pb-12 md:pb-12 pb-4 font-syne text-sm font-regular text-grey">
        <a href="/">
          <span className="">@SANJALI SAHU</span>
        </a>
        <div className="flex gap-6">
          <a target="_blank" href="https://www.linkedin.com/in/-sanjalisahu/">
            <span>Linkedin</span>
          </a>
          <div className="min-h-4 bg-grey border border-grey"></div>
          <a href="about">
            <span>About</span>
          </a>
          <div className="min-h-4 bg-grey border border-grey"></div>

          <a href="/work">
            <span>Work</span>
          </a>
        </div>
      </div>
      {/* <div className='w-1/5 gap-2 grid py-12 text-lg font-syne font-medium grid-cols-2'>
        <span className='col-span-1'>Work↗︎</span>
        <span className='col-span-1'>Linkedin↗︎</span>
        <span>About↗︎</span>
        <span>Email↗︎</span>
       </div> */}
    </section>
  );
};
export default Footer;
