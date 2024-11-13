import React from 'react'
import Resumeimg from "../img/resume.jpg"
import resume from "../img/RESUME.pdf"

const Resume = () => {
  return (
         <section className='flex flex-col md:flex-row bg-primary px-14' id='resume' >
            <div className=' py-5 md:w-1/2 flex  justify-center md:justify-end'>
                <img className='w-[300px]' src={Resumeimg}/>
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center'>
                <h1 className='text-4xl text-white border-b-4 border-[#A570B4] mb-5 w-[130px] font-bold'>Resume</h1>
                <p className='text-white pb-5'> You can view my resume <a className='btn' href={resume} download>Download</a> </p>
               

                </div>
                
            </div>
       </section>
  )
}

export default Resume