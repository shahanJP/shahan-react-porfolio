import React from "react";
import '../css/education.css'

const Education = ({ children, edu, cert, exp }) => {
  const { title, list } = edu;
  const { heading, listC } = cert;
  const { work, listA } = exp;

  return (
    <div className="edu" id="education" >
      <h1>4,</h1>
      <h1>Study and Experience </h1>
      <div className="edu-container">
        <div className="study">
          <div className="education"data-aos="fade-right"
          data-aos-duration="3000">
            {children}
            <article>
            <h2>{title}</h2>
            {list.map(({ institution, description }) => (
              <ul>
                <h3>{institution}</h3>
                <li>{description}</li>
              </ul>
            ))}
            </article>
           
          </div>

          <div className="certificate" data-aos="fade-left"
          data-aos-duration="3000">
            <article>
            <h2>{heading}</h2>
            {listC.map(({ text }) => (
              <ul>
                <li>{text}</li>
              </ul>
            ))}
            </article>
          </div>
        </div>
        <div className="experience" data-aos="fade-up"
        data-aos-duration="3000">
          <h2>{work}</h2>
          {listA.map(({ company, date, jobTitle, description }) => (
            <>
              <h4>{company}, {date}</h4>
              <h5>{jobTitle}</h5>
              <p>{description}</p>
            </>
          ))}
        </div>
        
      </div>
      <div className="end">
        <p>@shahan porfolio 2022 (React)</p>
        </div>
    </div>
  );
};

export default Education;
