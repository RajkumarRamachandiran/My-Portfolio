import React, { useState } from 'react'
// import { Bars3Icon } from '@heroicons/react/24/solid'
import logo from "../img/loco1.png"

const Header = () => {
  const [toggleMenu, setToggleMenu]=useState(false);
  return (
    <div>
        <header className='flex justify-between px-5 py-5  bg-primary1 text-2xl '>
            {/* <a href='#' className='font-bold text-white'>About<span className='text-yellow-300'>Me..</span></a> */}
            <h1 className='font-bold  text-3xl'><span className='gray font-serif'>RAJ </span><span className='text-xl text-white'>Protfolio.</span></h1>
            <nav className='hidden md:block'>
            <ul className='flex  text-white font-bold '>
                <li><a href='/' className='ho'>Home</a></li>
                <li><a href='#about'className='ho'>Ab<span className=''>ou</span>t</a></li>
                <li><a href='#mySkills'className='ho'>Skills</a></li>
                <li><a href='#projects'className='ho'>Pro<span className=''>ject</span>s</a></li>
                <li><a href='#contact'className='ho'>Cont<span className=''>act</span></a></li>
            </ul>
            </nav>
           { toggleMenu && <nav className='block md:hidden '>
            <ul  onClick={()=>setToggleMenu(!toggleMenu)}className='flex flex-col text-white moblie-nav'>
            <li><a href='/'className='ho'>Ho<span className=''>m</span>e</a></li>
                <li><a href='#about'className='ho'>Ab<span className=''>ou</span>t</a></li>
                <li><a href='#mySkills' className='ho'>Skills</a></li>
                <li><a href='#projects'className='ho'>Pro<span className=''>ject</span>s</a></li>
                <li><a href='#contact'className='ho'>Cont<span className=''>act</span></a></li>
            </ul>
            </nav> }
            <button onClick={()=> setToggleMenu(!toggleMenu)}className='block md:hidden'><i class="fa-solid fa-bars text-white"></i></button>
        </header>

    </div>
  )
}

export default Header