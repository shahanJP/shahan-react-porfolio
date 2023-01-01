import pro1 from "./assets/pro1.png";
import pro2 from "./assets/pro2.png";
import pro3 from "./assets/pro3.png";
import pro4 from "./assets/pro4.png";
import html from "./assets/html.jpg";
import css from "./assets/css.jpg";
import js from "./assets/js.jpg";
import bootstrap from "./assets/bootstrap5.png";
import react from "./assets/react.png";
import express from "./assets/Express-JS.png";
import node from "./assets/node.jpg";
import webpack from "./assets/webpack.jpg";
import testing from "./assets/testing.jpg";
import persist from "./assets/persistence.jpg";
import blog from "./assets/blog.png";
import dom from "./assets/Dom.jpg";
import task from "./assets/task.png";
import last from "./assets/gene.png";


export const data = {
  fullName: "Shahan Ahmad",
  role: "GRADUATE FRONT-END DEVELOPER",
  email: "shahan.ahmad@hotmail.com",

  aboutMe: {
    title: "About Me",
    text: "I am enthusiastic and Growth mindset Graduate Front End Developer with strong work ethics, motivated to learn & grow. The main area of my expertise is front-end development, HTML, CSS, JS and React.js building small and medium web apps, custom plugins, features, animations, and coding interactive layouts. ",
   
  },
  
  skills: {
   
    listA: [
      {
        text:'Skills'
      },
      {
        id: "p1",
        text: "HTML 5",
        img: html,
        desc: "this is first step",
      },
      { 
        id: 'p2',
       text: "CSS 3",
        img: css, 
        desc: "this is second css"
       },
      { 
        id: "p3",
       text: "Javascript",
        img: js, 
        desc: "this is coding js" 
      },
      {
        id: "p4",
        text: "Bootstrap5",
        img: bootstrap,
        desc: "this is reponsive boot",
      },
      {
        id: "p5",
        text: "Testing and debugging ",
        img: testing,
        desc: "this is first testing",
      },
      { id: "p6", text: "React.js", img: react, desc: "this is first react" },
      {
        id: "p7",
        text: "Express.js",
        img: express,
        desc: "this is first express",
      },
      { id: "p8", text: "Node.js", img: node, desc: "this is first node" },
      {
        id: "p9",
        text: "Webpack",
        img: webpack,
        desc: "this is first webpack",
      },
      {
        id: "p10",
        text: "persistence",
        img: persist,
        desc: "this is first bsm",
      },
    ],
  },

  myProject: {
    page: 3,
    project: "I Built Something",
    list: [
      {
        title: blog,
        img: pro1,
        story: "In Jairajpuri Blog  I learn how to make a webpage with marked up text and images.Learn how to use other editors to develop  web pages and how to use the browser developer tools to debug  webpages.",
        tools:['HTML', 'CSS'],
        demo:"https://shahanjp.github.io/shahanblog.github.io/",
        repo:"https://github.com/shahanJP/shahanblog.github.io"

      },
      {
        title: dom,
        img: pro4,
        story:"This Project is inspired by Netflix. The first Javascript project using Dom Manipulation.I got brief understanding of how to utilise my Javascript skills in Front end Development.",
        tools:['HTML', 'CSS','Javascript', ],
        demo:"https://shahanjp.github.io/netfflixmock/",
        repo:"https://github.com/shahanJP/netfflixmock"
      },
      {
        title: task,
        img: pro3,
        story:"Task Manager Project was a team Project at Generation Australia Junior web development Program using bootstrap and Javascript.There was lot of Challenges in this project but we accomplished all rubric requirement as team.We work as a unit with clear communication .This was great team work experience for me and thoroughly enjoyed  team work.",
        tools:['HTML', 'CSS','Javascript', 'BootStrap',],
        demo:"https://shahanjp.github.io/shahanblog.github.io/",
        repo:"https://github.com/shahanJP/shahanblog.github.io"
      },
      {
        title: last,
        img: pro2,
        story:"Shopping Cart was  Generation  Australia Junior web development Program final individual Project using React.js.In start I struggle with JSX and react core concept but thanks to react documentaion every time i stuck i turned back to documentation and get the fundamental concept of react clear and applied on this project .ReactJS is extremely intuitive to work with and provides interactivity to the layout of any UI.  ",
        tools:['HTML', 'CSS','Javascript','React', ],
        demo:"https://shahanjp.github.io/shahanblog.github.io/",
        repo:"https://github.com/shahanJP/shahanblog.github.io"
      },
    ],
  },
  certificates: {
    heading: "Certificates",
    listC: [
      {
        text: "Certificate in Front-End Developer Udacity ",
      },
      {
        text: "HTML  Codecademy",
      },
      {
        text: "CSS3  Codecademy",
      },
      {
        text: "Javascript  Codecademy",
      },
      {
        text: "React.js Codecademy",
      },
      {
        text: "BootStrap Codecademy",
      },
      {
        text: "SQL Codecademy",
      },
    ],
  },

  education: {
    title: "Education",
    list: [
      {
        institution: "Victoria University",
        description: "Graduate Diploma Business Computing",
      },
      {
        institution: "RMIT",
        description: "Front End Developer",
      },
      {
        institution: "Generation Australia",
        description: "Front End Developer Program",
      },
    ],
  },

  workExperience: {
    work: "EXPERIENCE",
    listA: [
      {
        company: "Generation Australia",
        date: 2022,
        jobTitle: "Junior Web Developer Program",
        description:
          "I was accepted into Generation Australia’s 16 week, Junior web development program Program.  I learn  web development technical skills along with growth mindset and persistence skills.Efficiently contributed to highly collaborative work environment, finding solutions with determination.Used various technologies, including JavaScript to determine coding requirements for project creation, including ecommerce capability and security and specialized scripts.",
      },
    ],
  },
};

export default data;
