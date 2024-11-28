import React, { useState, useEffect, useRef } from "react";
import "./description.css";
const Description = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Calculate the rotation angle based on the scroll position
  const rotationAngle = scrollPosition / 2;

  // Style object with the rotation transformation
  const imageStyle = {
    // width: '200px', // Adjust image size as needed
    transition: "transform 0.5s ease", // Smooth transition for rotation
    transform: `rotate(${rotationAngle}deg)`,
  };

  return (
    <section className="lg:py-0 md:py-8 py-8 lg:justify-unset md:justify-unset lg:items-unset md:items-unset justify-center items-center flex w-full gap-20">
      <div className="w-1/2 lg:flex md:hidden hidden items-center justify-center">
        <img style={imageStyle} className="w-20" src="/star.svg" />
      </div>
      <div className="descriptive-content lg:w-1/2 md:w-full w-11/12 text-white font-syne">
        <h4 className="lg:text-left  md:text-center text-center font-semibold lg:mb-4 md:mb-4 mb-4">
          I'm a <span className="gradient">Software Developer</span> with 1+
          years of hands-on experience in developing and implementing innovative
          solutions.
        </h4>
        <p className="lg:text-left md:text-center text-center">
          I'm passionate about creating efficient and scalable applications.
          I’ve had the privilege to work on a diverse range of projects across
          industries ranging from e-commerce, education, health and real estate.
          Proficient in front-end and back-end technologies, dedicated to
          delivering high-quality code and exceptional user experiences. I've
          collaborated with cross-functional teams to deliver finest software
          solutions.
        </p>
      </div>
    </section>
  );
};
export default Description;
