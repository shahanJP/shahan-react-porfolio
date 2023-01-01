import React from "react";
import photo from "../assets/photo.jpg";
import {motion} from 'framer-motion';
import resume from './resume.pdf';
import '../css/about.css'

const About = ({ data }) => {
  const { title, text,msg } = data;
  console.log(data);
  
  return (
    <div className="about" id="about">
    
      <div className="pro-img" data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="3000"
      >
        <img src={photo} alt="" />
      </div>
      <div className="pro-text" data-aos="fade-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="3000">
      <h1>1,</h1>
        <h1>{title}</h1>
        <p>{text}</p>
       
        <motion.a
        href={resume}
        without rel="noopener noreferrer" target="_blank"
        whileHover={{scale:1.2}}
        whileTap = {{scale:0.9}}
        className=" button">
          Resume
        </motion.a>
      </div>
      
    </div>
  );
};

export default About;
