import React from "react";
import "./work.css";
import ThankYou from "../../Components/Thankyou/ThankYou";
const Work = () => {
  return (
    <>
      <section class="faqs-wrapper flex justify-center w-full text-white">
        <div class="div-wrap lg:w-4/5 md:w-4/5 w-11/12 xs:w-ninetyFive">
          <div class="container">
            <div className="position-relative work-head flex lg:flex-row md:flex-row flex-col  justify-between lg:p-8 md:p-4 p-4 lg:text-3xl md:text-xl text-xl">
              <p className="position-absolute  font-russo leading-8 font-bold uppercase tracking-wider ">
                <span>Work </span>
                <br />
                <br /> Experience
              </p>
              {/* <p className='font-russo leading-8 font-light uppercase'>Years of experience → 1.5</p> */}
            </div>
            <div class="accordions">
              <details>
                <summary>
                  <div className="flex flex-col gap-2 py-4">
                    <span className="font-roboto lg:text-2xl md:text-xl text-lg font-light uppercase whitespace-nowrap">
                      Third Essential Solutions
                    </span>
                    <span className="text-grey font-syne uppercase lg:text-xl md:text-lg text-md whitespace-nowrap font-normal">
                      MERN STACK DEVELOPER
                    </span>
                  </div>
                  <div className="py-6">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="25"
                        cy="25"
                        r="24"
                        stroke="#C8C8C8"
                        stroke-width="2"
                      />
                      <path
                        id="horizontal"
                        d="M23.625 25.8125L19.125 25.8125C18.8432 25.8125 18.573 25.7006 18.3737 25.5013C18.1744 25.302 18.0625 25.0318 18.0625 24.75C18.0625 24.4682 18.1744 24.198 18.3737 23.9987C18.573 23.7994 18.8432 23.6875 19.125 23.6875L23.625 23.6875L25.8095 23.6875L30.375 23.6875C30.6568 23.6875 30.927 23.7994 31.1263 23.9987C31.3256 24.198 31.4375 24.4682 31.4375 24.75C31.4375 25.0318 31.3256 25.302 31.1263 25.5013C30.927 25.7006 30.6568 25.8125 30.375 25.8125L23.625 25.8125Z"
                        fill="white"
                        stroke="#fff"
                        stroke-width="0.125"
                      />
                      <path
                        id="vertical"
                        d="M23.6875 23.625L23.6875 19.125C23.6875 18.8432 23.7994 18.573 23.9987 18.3737C24.1979 18.1744 24.4682 18.0625 24.75 18.0625C25.0318 18.0625 25.302 18.1744 25.5013 18.3737C25.7005 18.573 25.8125 18.8432 25.8125 19.125L25.8125 22.4693L25.8125 23.625L25.8125 25.8135L25.8125 30.375C25.8125 30.6568 25.7005 30.927 25.5013 31.1263C25.302 31.3256 25.0318 31.4375 24.75 31.4375C24.4682 31.4375 24.1979 31.3256 23.9987 31.1263C23.7994 30.927 23.6875 30.6568 23.6875 30.375L23.6875 25.8135L23.6875 24.7193L23.6875 23.625Z"
                        fill="white"
                        stroke="#fff"
                        stroke-width="0.125"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="work-desc font-roboto text-xl font-light">
                  <p>
                    - Leveraged the power of React's component-based
                    architecture to create reusable UI components, resulting in
                    efficient development and consistent design.
                  </p>
                  <p>
                    - Utilized Tailwind CSS to design and style components,
                    adhering to modern design standards and promoting a visually
                    appealing user interface.
                  </p>
                  <p>
                    - Implemented state management solutions, including React
                    Hooks and Context API, to manage complex application states
                    and interactions effectively.
                  </p>
                  <p>
                    - Led development on a dynamic real estate platform using
                    Next.js.
                  </p>
                  <p>
                    - Leveraged Firebase authentication and real-time database.
                  </p>
                  <p>
                    - Successfully integrated Redux, a state management library,
                    into the application architecture.
                  </p>
                  <p>
                    - Integrated Google APIs, including Google Maps, to provide
                    interactive property location visualization and accurate
                    geolocation services.
                  </p>

                  <p>- Designed and implemented responsive UI/UX components.</p>
                  <p>
                    - Designed, developed, and maintained APIs that [specific
                    achievement, e.g., facilitated seamless data retrieval and
                    updates].
                  </p>
                  <p>
                    - Spearheaded the end-to-end development of a comprehensive
                    gym application.
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  <div className="flex flex-col gap-2 py-4">
                    <span className="font-roboto lg:text-2xl md:text-xl text-lg font-light uppercase">
                      Sipnotech Solutions
                    </span>
                    <span className="text-grey font-syne uppercase lg:text-xl md:text-lg text-md  font-normal">
                      MERN STACK DEVELOPER
                    </span>
                  </div>
                  <div className="py-6">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="25"
                        cy="25"
                        r="24"
                        stroke="#C8C8C8"
                        stroke-width="2"
                      />
                      <path
                        id="horizontal"
                        d="M23.625 25.8125L19.125 25.8125C18.8432 25.8125 18.573 25.7006 18.3737 25.5013C18.1744 25.302 18.0625 25.0318 18.0625 24.75C18.0625 24.4682 18.1744 24.198 18.3737 23.9987C18.573 23.7994 18.8432 23.6875 19.125 23.6875L23.625 23.6875L25.8095 23.6875L30.375 23.6875C30.6568 23.6875 30.927 23.7994 31.1263 23.9987C31.3256 24.198 31.4375 24.4682 31.4375 24.75C31.4375 25.0318 31.3256 25.302 31.1263 25.5013C30.927 25.7006 30.6568 25.8125 30.375 25.8125L23.625 25.8125Z"
                        fill="white"
                        stroke="#fff"
                        stroke-width="0.125"
                      />
                      <path
                        id="vertical"
                        d="M23.6875 23.625L23.6875 19.125C23.6875 18.8432 23.7994 18.573 23.9987 18.3737C24.1979 18.1744 24.4682 18.0625 24.75 18.0625C25.0318 18.0625 25.302 18.1744 25.5013 18.3737C25.7005 18.573 25.8125 18.8432 25.8125 19.125L25.8125 22.4693L25.8125 23.625L25.8125 25.8135L25.8125 30.375C25.8125 30.6568 25.7005 30.927 25.5013 31.1263C25.302 31.3256 25.0318 31.4375 24.75 31.4375C24.4682 31.4375 24.1979 31.3256 23.9987 31.1263C23.7994 30.927 23.6875 30.6568 23.6875 30.375L23.6875 25.8135L23.6875 24.7193L23.6875 23.625Z"
                        fill="white"
                        stroke="#fff"
                        stroke-width="0.125"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="work-desc font-roboto text-xl font-light">
                  <p>
                    - Developed user-facing features using React.js by
                    translating designs and wireframes into high-quality code.
                  </p>
                  <p>
                    - Developed reusable components for future use and
                    Integrated backend services
                  </p>
                  <p>
                    - Optimised components for maximum performance across a vast
                    array of web-capable devices and browsers
                  </p>
                  <p>
                    - Developed and managed backend services/API using nodeJS
                  </p>
                  <p>
                    - Designed a database for storing data sent from the front
                    end via REST APIs
                  </p>
                  <p>
                    - Collaborated and coordinated with cross-functional teams
                    including product and design, working on distinct layers of
                    product development
                  </p>
                  <p>
                    - Provided technical input to the planning, design, and
                    requirements gathering process for a new product/project
                    features
                  </p>
                  <p>
                    - Contributed best-practices and architectural guidance to
                    our front-end applications
                  </p>
                  <p>
                    - Involved from conception to completion of
                    projects/products.
                  </p>
                  <p>
                    - Worked on custom requirement projects like ecommerce
                    application, Grocery application, News application, etc.
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  <div className="flex flex-col gap-2 py-4">
                    <span className="font-roboto lg:text-2xl md:text-xl text-lg font-light uppercase">
                      Onething Design
                    </span>
                    <span className="text-grey font-syne uppercase lg:text-xl md:text-lg text-md font-normal">
                      Frontend DEVELOPER
                    </span>
                  </div>
                  <div className="py-6">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="25"
                        cy="25"
                        r="24"
                        stroke="#C8C8C8"
                        stroke-width="2"
                      />
                      <path
                        id="horizontal"
                        d="M23.625 25.8125L19.125 25.8125C18.8432 25.8125 18.573 25.7006 18.3737 25.5013C18.1744 25.302 18.0625 25.0318 18.0625 24.75C18.0625 24.4682 18.1744 24.198 18.3737 23.9987C18.573 23.7994 18.8432 23.6875 19.125 23.6875L23.625 23.6875L25.8095 23.6875L30.375 23.6875C30.6568 23.6875 30.927 23.7994 31.1263 23.9987C31.3256 24.198 31.4375 24.4682 31.4375 24.75C31.4375 25.0318 31.3256 25.302 31.1263 25.5013C30.927 25.7006 30.6568 25.8125 30.375 25.8125L23.625 25.8125Z"
                        fill="white"
                        stroke="#fff"
                        stroke-width="0.125"
                      />
                      <path
                        id="vertical"
                        d="M23.6875 23.625L23.6875 19.125C23.6875 18.8432 23.7994 18.573 23.9987 18.3737C24.1979 18.1744 24.4682 18.0625 24.75 18.0625C25.0318 18.0625 25.302 18.1744 25.5013 18.3737C25.7005 18.573 25.8125 18.8432 25.8125 19.125L25.8125 22.4693L25.8125 23.625L25.8125 25.8135L25.8125 30.375C25.8125 30.6568 25.7005 30.927 25.5013 31.1263C25.302 31.3256 25.0318 31.4375 24.75 31.4375C24.4682 31.4375 24.1979 31.3256 23.9987 31.1263C23.7994 30.927 23.6875 30.6568 23.6875 30.375L23.6875 25.8135L23.6875 24.7193L23.6875 23.625Z"
                        fill="white"
                        stroke="#fff"
                        stroke-width="0.125"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="work-desc font-roboto text-xl font-light">
                  <p>
                    - Spearheaded the development of an engaging and interactive
                    animated website, showcasing a strong command of front-end
                    technologies and design principles.
                  </p>
                  <p>
                    - Collaborated with cross-functional teams to gather
                    requirements, ensuring seamless integration of animations
                    and graphics that aligned with the brand image.
                  </p>
                  <p>
                    - Implemented SEO best practices to improve the website's
                    visibility and accessibility, contributing to increased
                    organic traffic.
                  </p>
                  <p>
                    - Employed industry best practices to optimize website
                    performance and responsiveness, enhancing overall user
                    satisfaction.
                  </p>
                  <p>
                    - Led the development of a client project, a multi-page
                    website aimed at enhancing the online presence and user
                    engagement for the client.
                  </p>
                  <p>
                    - Implemented effective navigation structures and user
                    flows, enhancing the overall usability of the website.
                  </p>
                  <p>
                    - Provided technical input to the planning, design, and
                    requirements gathering process for a new product/project
                    features
                  </p>

                  {/* <p>- Contributed best-practices and architectural guidance to our front-end applications</p>
              <p>- Involved from conception to completion of projects/products.</p>
                        <p>- Worked on custom requirement projects like ecommerce application, Grocery application, News application, etc.</p> */}
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
      <ThankYou />
    </>
  );
};

export default Work;
