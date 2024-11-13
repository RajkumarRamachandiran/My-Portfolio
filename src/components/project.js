import React from 'react'
import Ecommerce from "../img/project-1.png"
import Zoho from "../img/project-2.png"
import python from "../img/Picsart_24-11-08_18-32-32-729.png"

const Project = () => {
    const config={
        project:[
            {
                image:Ecommerce,
                description:"A Ecommerce Website. Built with Html,CSS and Javascript",
                link:"https://ecommerce-redstore-raj.netlify.app"
            },
            {
                image:Zoho,
                description:"A Zoho clone website.  Built with Ui  in Html css and Bootstrap",
                link:"https://zoho-clone-ui-raj.netlify.app"
            },
            {
                image:python,
                description:"A Banking Program Coding .Built with Python Programming",
                link:"https://github.com/RajkumarRamachandiran/banking-program.git"

            }
        ]
    }
  return (<section className='flex flex-col py-24 px-5 justify-center bg-primary text-white' id='projects'>
    <div className='w-full'>
        <div className='flex  flex-col px-12 py-10'>
        <h1 className='text-4xl gray   mb-5 w-[160px] font-bold'>Projects</h1>
        <p>These are some of my best projects . I have built these with front-end like HTML  CSS , JAVASCRIPT, REACT.JS Check them out.</p>
        </div>
        

    </div>
    <div className='w-full'>
        <div className='flex flex-col md:flex-row  md:px-10 gap-10'>
            {config.project.map((projects)=>(
                <div className='relative'>
                <img className='h-[220px] w-[400px]' src={projects.image}/>
                <div className='absolute left-0 right-0 bottom-[0px] top-[0px] bg-primary1 opacity-0 duration-500 hover:opacity-100'>
                    <p className='text-center px-5 py-10'>{projects.description} </p>
                    <div className='flex justify-center'>
                        <a className='btn' target='_blank'href={projects.link}>View Project</a>
                    </div>
    
                </div>
                
                </div>
            ))}
            
         </div>
    </div>   
  </section>
  )
}

export default Project