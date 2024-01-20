import React from 'react';
import Hero from '../Components/Hero/Hero';
import ThankYou from '../Components/Thankyou/ThankYou';
import Marque from '../Components/Marque/Marque';
import Project from '../Components/Projects/Project';
import Description from '../Components/Description/Description';
import SkillGrid from '../Components/SkillGrid/SkillGrid';
const Home = () => {
    return (
        <div className="App">
        <div className='section-div'>
       <Hero/>
       </div>
       {/* <Marque/> */}
       <div className='section-div'>
        <SkillGrid/>
       </div>
       <div className='section-div'>
       <Project/>
       </div>
       <div className='section-div'>
       <Description/>
       </div>
      
       <ThankYou/>
      
       
      </div> 
    );
  };
  
  export default Home;