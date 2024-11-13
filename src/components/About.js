import React from 'react'
import Aboutimg from "../img/abo.png"

export const About = () => {
  const config={
    line1:"Hi M y name is Rajkumar . I am a Full stack web developer. I built beautiful websites",
    line2:"I am Proficient in Frontend skills like Html, Css,Javascript,React.js Frame work like tailwindcss,Bootstrap and More...",
    line3:"In backend I know Python , Django, Mysql..."
  }
  return (
    <section className='flex flex-col md:flex-row bg-primary px-1'  id='about'>
        <div className=' py-5 md:w-[600px]'>
            <img src={Aboutimg}/>
        </div>
        <div className='md:w-1/2 flex justify-center px-14'>
            <div className='flex flex-col justify-center'>
            <h1 className='text-4xl gray   mb-5 w-[190px] font-bold'>About Me</h1>
            <p className='text-white pb-5'> {config.line1}<br/> with React.js  </p>
            <p className='text-white pb-5' >{config.line2}</p>
            <p className='text-white'>{config.line3} </p>
            <div className='flex flex-col text-white '>
              <h1 className=' text-2xl py-2 gray bar'>Eduction</h1>
              <div className='view pb-2'>
              <div className='mt-2'>
                <h4 className='text-red-600 text-[20px]'>Post Graduation</h4>
                <p>Master of Computer Application</p>
              </div>
              <div>
                <h4 className='text-red-600 text-[20px]'>Under Graduation</h4>
                <p>Bachelor of Computer Application</p>
              </div>
              <div>
                <h4 className='text-red-600 text-[20px]'>Python Full-Stack</h4>
                <p>Besant Technologies,Velachery.</p>
              </div>

              </div>
              

            </div>
            </div>
           
            
        </div>
    </section>
  )
}
