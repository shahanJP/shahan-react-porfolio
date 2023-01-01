import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import data from "./portfolio";
import Skills from "./components/Skills";
import Sidebar from "./components/Sidebar";
import Project from "./components/Project";
import Education from "./components/Education";

function App() {
  return (
    <div className="apps">
      <Sidebar data={data} />
      <Home data={data} />
      <About data={data.aboutMe} />
      <Skills data={data.skills} />
      <Project data={data.myProject} />
      <Education
        edu={data.education}
        cert={data.certificates}
        exp={data.workExperience}
      />
    </div>
  );
}

export default App;
