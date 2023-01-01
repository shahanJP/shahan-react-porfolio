import React from "react";
import skills from "../assets/skills.jpg";
import html from "../assets/html.jpg";
import css from "../assets/css.jpg";
import js from "../assets/js.jpg";
import react from "../assets/react.png";
import bootstrap from "../assets/bootstrap5.png";
import node from "../assets/node.jpg";
import Express from "../assets/Express-JS.png";
import webpack from "../assets/webpack.jpg";
import persistence from "../assets/persistence.jpg";
import '../css/skills.css';
import Icons from "./Icons";

const Skills = ({ data }) => {
  const { listA,  } = data;
 
  return (
    <section id="skill">
      <div
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Icons />
      </div>

      <div
        class="book"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <input type="checkbox" id="c1" />
        <input type="checkbox" id="c2" />
        <input type="checkbox" id="c3" />
        <input type="checkbox" id="c4" />
        <input type="checkbox" id="c5" />
        <input type="checkbox" id="c6" />
        <input type="checkbox" id="c7" />
        <input type="checkbox" id="c8" />
        <input type="checkbox" id="c9" />
        <input type="checkbox" id="c10" />

        <div id="cover">
          <img src={skills} alt="skills" />
        </div>

        <div className="flip-book">
          {listA.map(({ id, text, img, desc,details ,fo }) => (
            <div className="flip" id={id}>
              <div className="front" key={id}>
                <h2>{text}</h2>
                <h4>{desc}</h4>
              

                <label for={fo} className="next-btn">
                  Next
                </label>
              </div>
              <div className="back">
                <img src={img} />
                <label className="back-btn" for={fo}>
                  Back
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
