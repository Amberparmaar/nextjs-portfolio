import React from 'react'





import Image from 'next/image'
import Link from 'next/link'
import About from './About/page'
import Contact from './Contact/page'
import Skills from './Skills/page'





export default function Home() {
  return (
    <div className="flex flex-col items-center mt-4 bg-[#23326F] ">

  
 


  


      <Image
        src="/Assets/logo.jpg"
        alt="Profile Picture"
        width={200}
        height={200}
        className="rounded-full"
      />
      <h1 className=" text-white mb-6" style={{fontFamily: 'Monda', fontWeight: 700 , fontSize: '48px'}}>
     
       
          Welcome to My Portfolio</h1>
          
      <p className="text-2xl text-white text-center max-w-3xl">
        Hi, I'm <b> AMBER PARMAAR </b>. I'm a digital marketing specialist and web development enthusiast.
        I'm currently enhancing my skills through the Governor Sindh Initiative IT courses.
      </p>
    <button  type="button" className="my-8 p-3 text-white hover:text-gray-300 border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-lg px-6 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Hire Me</button>
      
<About/>
<Skills/>
<Contact/>
    </div>
    

  )
}