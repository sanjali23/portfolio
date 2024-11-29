import React, { useEffect } from "react";
import propertyApp from "../../assets/prop.png";
import learningApp from "../../assets/learningapp.jpeg";
import gymApp from "../../assets/gym-app.jpeg";
import ecomApp from "../../assets/ecom.png";
import "./projects.css";
const Project = () => {
  return (
    <section className="project-section flex flex-col lg:py-16 lg:px-16 md:py-12 md:px-12 flex-column">
      <div data-aos="fade-up" className="">
        <div
          className="first-card"
          style={{ backgroundImage: `url(${propertyApp})` }}
        ></div>
        <p className="font-syne project-head text-white lg:font-extrabold md:font-extrabold font-semibold text-3xl lg:mt-8 md:mt-4 mt-4">
          Property Application
        </p>
        <p className="text-grey text-lg mt-2">
          Cutting-edge Property Management App built in NextJS, your all-in-one
          solution for streamlined real estate transactions and property-related
          tasks. This app is designed to simplify the complexities of property
          management, offering a seamless and intuitive experience for property
          buyers, sellers, and agents. Experience properties like never before
          with our immersive 3D viewing feature. Explore every corner and detail
          of a property from the comfort of your device. Filter and search based
          on your preferences, including location, price range, and property
          type.
        </p>
      </div>
      <div
        data-aos="fade-up"
        className="lg:w-thirtyRem md:w-full w-full md:mt-8 lg:mt-16 mt-12 "
      >
        <div
          className="cards"
          style={{ backgroundImage: `url(${learningApp})` }}
        ></div>
        <p className="font-syne project-head text-white lg:font-extrabold md:font-extrabold font-semibold  text-3xl mt-8">
          Learning Management System
        </p>
        <p className="text-grey text-lg mt-2">
          Learning App, an empowering platform designed to revolutionize
          education by seamlessly connecting students, parents, and teachers.
          Built with cutting-edge Node.js and React.js technologies, this app
          redefines the learning experience with interactive courses, lectures,
          and collaborative features. It simplifies the course enrollment
          process with our secure payment system.
        </p>
      </div>
      <div
        data-aos="fade-up"
        className="lg:w-thirtyRem md:w-full w-full lg:ml-fourtyfiveRem lg:mt-0  md:mt-8  mt-4"
      >
        <div
          className="cards"
          style={{ backgroundImage: `url(${gymApp})` }}
        ></div>
        <p className="font-syne project-head text-white lg:font-extrabold md:font-extrabold font-semibold  text-3xl mt-8 ">
          Gym Application
        </p>
        <p className="text-grey text-lg mt-2">
          Revolutionary Gym Application, the ultimate fitness companion for both
          gym trainers and trainees. Engineered with cutting-edge technology,
          this app seamlessly integrates attendance tracking with our QR code
          attendance system, personalized fitness planning, and convenient
          payment solutions for an all-encompassing fitness experience. Elevate
          your fitness journey with personalized diet and exercise plans
          tailored by experienced trainers.
        </p>
      </div>
      <div
        data-aos="fade-up"
        className="lg:w-thirtyRem md:w-full w-full md:mt-6 mt-4"
      >
        <div
          className="cards"
          style={{ backgroundImage: `url(${ecomApp})` }}
        ></div>
        <p className="font-syne project-head text-white lg:font-extrabold md:font-extrabold font-semibold  text-3xl mt-8 ">
          E-commerce App
        </p>
        <p className="text-grey text-lg mt-2">
          A versatile E-commerce App, where style meets convenience. This app is
          your one-stop destination for fashion, offering a vast collection of
          clothing for men, women, and children. With seamless navigation, a
          secure payment system, and a user-friendly interface, your shopping
          experience has never been more enjoyable. It allows you to easily
          manage your shopping cart, shop with confidence using our secure and
          reliable payment system and keep track of your orders in real-time.{" "}
        </p>
      </div>
    </section>
  );
};

export default Project;
