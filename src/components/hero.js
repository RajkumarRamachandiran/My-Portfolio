import React from 'react'
import HeroImg from '../img/hero1.png'
// import { AiOutlineX,AiOutlineGithub,AiOutlineLinkedin } from "react-icons/ai";
import resume from "../img/RESUME.pdf"
import back from "../img/bb.jpg"

const Hero = () => {
  const config={
    subtitle:'Im a Full-stack developer',
    social:{
      x:"https://x.com/Rajkuma62889479",
      Github:"https://github.com/RajkumarRamachandiran",
      linkedin:"https://www.linkedin.com/in/rajkumar2207/"

    }
  }
  return (
    <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
      <div className='md:w-1/2 py-16 '>
      <h1 className=' text-white text-5xl'>Hi,<br/> Im <span className='text-red-500 font-extrabold font-serif hover:text-red-500 '>RAJKUMAR</span>  
        <p className='text-2xl py-2'>{config.subtitle}</p>
       </h1>
       <div className='flex  py-6'>
        <a href={config.social.x} className='pr-5 text-cyan-500 hover:text-white'><i class="fa-brands fa-x-twitter text-3xl"></i></a>
        <a href={config.social.Github} className='pr-5  text-cyan-500 hover:text-white'><i class="fa-brands fa-github text-3xl"></i></a>
        <a href={config.social.linkedin}className=' text-cyan-500 hover:text-white'><i class="fa-brands fa-linkedin text-3xl"></i></a>
       </div>
       <div className='flex py-1'>
       <p className='text-white pb-5'><a className='btn' href={resume} download>resume</a> </p>
       <p className='text-white pb-5 pl-10'><a className='btn2' href="#contact" >Contact Me</a> </p>

       </div>
      </div>
        
        <img className='md:w-1/3 bg-yellow-700 p-1 rou' src={HeroImg}/>

    </section>
  )
}

export default Hero