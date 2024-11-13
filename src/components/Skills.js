import React from 'react'
import web from "../img/app-development.png"
import backend from "../img/backend.png"
import framework from "../img/framework.png"
import design from "../img/web-design.png"
import html from "../img/html-5.png"
import css from "../img/css-3.png"
import javascript from "../img/js.png"
import ui from "../img/figma.png"
import python from "../img/python.png"
import mysql from "../img/mysql.png"
import react from "../img/science.png"
import django from "../img/django.png"
import boot from "../img/bootstrap.png"
import tail from "../img/tailwind-css.svg"
import git from "../img/github.png"
import canva from "../img/canva.png"
import photo from "../img/photoshop.png"


const Skills = () => {
  const config={
    Skills:[
      {
           id: "1",
           image: web,
           loco: html,
           loco1: css,
           loco2:javascript,
           P:"HTML",
           p1:"CSS",
           p2:"JAVASCRIPT",
           title: "Front-End",
           description: " I’m a front-end developer with a passion for creating beautiful, responsive, and user-centered web experiences. With a strong foundation in HTML, CSS, and JavaScript"
         },
         {
           id: "2",
           image: backend,
           loco:python,
           loco2:mysql,
           P:"Python",
           p2:"Mysql",
           title: "Back-End",
           description: "I’m a back-end developer skilled in building efficient, scalable, and secure server-side applications using Python and MySQL.understanding  of database and API "
         },
       {
           id: "3",
           image: framework,
           loco:react,
           P:"REACT JS",
           p1:"Django",
           p2:"Boostrap",
           p3:"Tailwind",
           loco1:django,
           loco2:boot,
           loco3:tail,
           title: "Frame Work",
           description: "front-end and back-end development, leveraging frameworks like React.js, Bootstrap, Tailwind CSS, and Django to build dynamic, responsive,  web applications."
         },
         {
           id: "4",
           image: design,
           loco:ui,
           loco1:canva,
           p1:"Canva",
           loco2:photo,
           p2:"PhotoShop",
           P:"Figma",
           title: "Design",
           description: "I’m a UI/UX designer with expertise in creating visually compelling, user-friendly designs using tools like Figma, Canva, and Photoshop.My work is passion for clean aesthetics"
         }
        ]

  } 
  return (
    <section className="skills--section bg-primary" id="mySkills">
    <div className="portfolio--container">
      <p className="section--title text-2xl text-white">My Skills</p>
      <h2 className="skills--section--heading gray">My Expertise</h2>
    </div>
    <div className="skills--section--container ">
      {config.Skills.map((item) => (
        <div key={item} className="skills--section--card">
          <div className="skills--section--img ">
            <img src={item.image} alt="Product Chain" className='w-[50px]'/>
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">{item.title}</h3>
            <div className='flex  '> 
            <p className='w-[40px] text-center text-[13px] font-bold'><img src={item.loco} className='pb-1 '/>{item.P}</p>
            <p className='w-[40px] text-center text-[13px] font-bold '><img src={item.loco1} className='pb-1  relative left-2'/><span className='pl-2'>{item.p1}</span></p>
            <p className='w-[40px] text-center text-[13px] font-bold'><img src={item.loco2} className='relative left-6 pb-1'/><span className='pl-5'>{item.p2}</span></p>
            <p className='w-[40px] text-center text-[13px] font-bold'><img src={item.loco3} className='pb-1 relative left-12 top-2'/><span className='pl-5 relative left-6 top-4'>{item.p3}</span></p>
            <p className='w-[40px] text-center text-[13px] font-bold'><img src={item.loco4} className='pb-1 relative left-16'/><span className='pl-16'>{item.p4}</span></p>
            </div> 
            <p className="skills--section--description ">{item.description}</p>
          </div>
    </div>
      ))}
    </div>
  </section>
        

  )
}

export default Skills