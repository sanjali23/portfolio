import React from "react";
import "./skillgrid.css";
const SkillGrid = () => {
  return (
    <>
      <section class="client-logos-wrapper">
        <div class="client-content">
          <div class="section-container rounded-xl ">
            <div class="box-container rounded-xl ">
              <div class="box head heading-wrapper lg:pl-0 md:pl-8 pl-4 rounded-xl">
                <h1 className="font-bold font-russo lg:text-8xl md:text-5xl ">
                  Technical Skills
                </h1>
              </div>
              <div class="box logo ">
                {/* <img class="back" src="https://i.imgur.com/riBjdZ5.png" alt=""/> */}
                {/* <img class="fore-tr" src="https://i.imgur.com/8NauMMs.png" alt=""/> */}
                <div className="text-white flex justify-center items-center font-russo lg:text-4xl md:text-3xl font-bold">
                  <h5>ReactJS</h5>
                </div>
              </div>
              <div class="box illus illus1 right-top">
                <img src="https://i.imgur.com/c9cj76j.png" alt="" />
              </div>
              <div class="box illus illus2">
                <img src="https://i.imgur.com/Ihao3jT.png" alt="" />
              </div>
              <div class="box logo">
                {/* <img class="back" src="https://i.imgur.com/riBjdZ5.png" alt=""/>
                        <img class="fore-tl" src="https://i.imgur.com/8NauMMs.png" alt=""/> */}
                <div className="text-white flex justify-center items-center font-russo lg:text-4xl md:text-3xl font-bold">
                  <h5>NextJS</h5>
                </div>
              </div>
              <div class="box logo">
                {/* <img class="back" src="https://i.imgur.com/riBjdZ5.png" alt=""/>
                        <img class="fore-tr" src="https://i.imgur.com/8NauMMs.png" alt=""/> */}
                <div className="text-white flex justify-center items-center font-russo lg:text-4xl md:text-3xl font-bold">
                  <h5>NodeJS</h5>
                </div>
              </div>
              <div class="box illus illus3">
                <img src="https://i.imgur.com/PHq7jGE.png" alt="" />
              </div>
              <div class="box logo">
                {/* <img class="back" src="https://i.imgur.com/riBjdZ5.png" alt=""/>
                        <img class="fore-tr" src="https://i.imgur.com/8NauMMs.png" alt=""/> */}
                <div className="text-white flex justify-center items-center font-russo lg:text-4xl md:text-3xl font-bold">
                  <h5>ExpressJS</h5>
                </div>
              </div>
              <div class="box illus illus4">
                <img src="https://i.imgur.com/pwKPad3.png" alt="" />
              </div>
              <div class="box illus illus5">
                <img src="https://i.imgur.com/MlbyZ3b.png" alt="" />
              </div>
              <div class="box logo">
                {/* <img class="back" src="https://i.imgur.com/riBjdZ5.png" alt=""/>
                        <img class="fore-tl" src="https://i.imgur.com/8NauMMs.png" alt=""/> */}
                <div className="text-white flex justify-center items-center font-russo lg:text-4xl md:text-3xl font-bold">
                  <h5>MongoDB</h5>
                </div>
              </div>
              <div class="box illus illus6">
                <img src="https://i.imgur.com/m9DzG9X.png" alt="" />
              </div>
              <div class="box logo">
                {/* <img class="back" src="https://i.imgur.com/riBjdZ5.png" alt=""/>
                        <img class="fore-tl" src="https://i.imgur.com/8NauMMs.png" alt=""/> */}
                <div className="text-white flex justify-center items-center font-russo lg:text-4xl md:text-3xl font-bold">
                  <h5>MySQL</h5>
                </div>
              </div>
              <div class="box logo left-bottom">
                {/* <img class="back" src="https://i.imgur.com/riBjdZ5.png" alt=""/>
                        <img class="fore-tl" src="https://i.imgur.com/8NauMMs.png" alt=""/> */}
                <div className="text-white flex justify-center items-center font-russo lg:text-4xl md:text-3xl font-bold">
                  <h5 className="md:pl-8 pl-3 lg:pl-0">Tailwind CSS</h5>
                </div>
              </div>

              <div class="box illus illus6">
                <img src="https://i.imgur.com/m9DzG9X.png" alt="" />
              </div>

              <div class="box logo">
                {/* <img class="back" src="https://i.imgur.com/riBjdZ5.png" alt=""/>
                        <img class="fore-tl" src="https://i.imgur.com/8NauMMs.png" alt=""/> */}
                <div className="text-white flex justify-center items-center font-russo lg:text-4xl md:text-3xl font-bold">
                  <h5>SCSS</h5>
                </div>
              </div>
              <div class="box illus illus5 right-bottom">
                <img src="https://i.imgur.com/MlbyZ3b.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SkillGrid;
