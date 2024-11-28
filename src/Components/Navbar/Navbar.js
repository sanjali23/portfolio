import React, { useState } from "react";
import "./navbar.css";
import profilePic from "../../assets/profile.jpeg";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const downloadPdf = () => {
    var pdfPath = "/pdf/Sanjali Sahu.pdf";
    var link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Sanjali Sahu.pdf";
    document.body.appendChild(link);
    link.click();
  };
  const bodyIndex = () => {
    // if(document.body.style.overflow==='hidden'){
    //   document.body.style.overflow='auto'
    // document.documentElement.style.overflow = 'auto';
    // }
    // if(document.body.style.overflow!=='hidden'){
    // document.body.style.overflow='hidden'
    // document.documentElement.style.overflow = 'hidden';
    // }
  };

  return (
    <section
      className={`flex lg:justify-between md:justify-between lg:px-14 px-6 sticky top-0 z-20 header lg:py-6 py-4 border-b z-10 ${
        isNavOpen && "h-screen"
      }`}
    >
      <button className="lg:flex md:flex sm:hidden hidden">
        <a href="/" className="bttn bttn-primary">
          {" "}
          <span className="flex items-center gap-4">
            <img className="h-7 w-7 rounded-full" src={profilePic} />
            <p className="font-syne whitespace-nowrap">SANJALI SAHU</p>
          </span>
        </a>
      </button>
      <img
        className="lg:hidden md:hidden flex h-16 w-16 rounded-full"
        src={profilePic}
      />
      <div className="text-sm font-medium items-center tracking-widest uppercase font-syne text-white md:flex lg:flex hidden lg:gap-12 md:gap-12 gap-4">
        <a href="/about">
          <span className="">About</span>
        </a>
        <a href="/work">
          <span className="">Work</span>
        </a>
        <button
          className="text-sm font-medium tracking-widest uppercase font-syne text-white"
          onClick={downloadPdf}
        >
          Download Resume
        </button>
      </div>
      <div className="md:hidden lg:hidden flex flex-col gap-4">
        <div
          onClick={() => {
            toggleNav();
            bodyIndex();
          }}
          className="md:hidden lg:hidden hamberger mt-6 ml-64 items-start flex-col gap-2 flex"
        >
          <span className="span1 span"></span>
          <span className="span2 span"></span>
          <span className="span3 span"></span>
        </div>
        {isNavOpen ? (
          <div
            className={`mb-4 justify-start text-white md:hidden lg:hidden flex flex-col gap-4 transition-max-height duration-300 ease-in-out overflow-hidden ${
              isNavOpen ? "max-h-96" : "max-h-0"
            } `}
          >
            <div className="flex flex-col gap-8 mt-12  text-right text-sm font-medium tracking-widest uppercase font-syne text-white">
              <a href="/about">
                <span className=" ">About</span>
              </a>
              <a href="/work">
                <span className=" ">work</span>
              </a>
              <a href="mailto:sanjalisahu100@gmail.com">
                <span className=" ">Email</span>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/-sanjalisahu/"
              >
                <span className=" ">linkedin</span>
              </a>

              <button
                className="text-right text-sm font-medium tracking-widest uppercase font-syne text-white"
                onClick={downloadPdf}
              >
                Download Resume
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Navbar;
