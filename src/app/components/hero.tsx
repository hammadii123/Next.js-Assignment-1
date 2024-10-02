
"use client"
import Typewriter from 'typewriter-effect';
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Hi , I Am 
        <br className="hidden lg:inline-block" />
       

  <Typewriter
  options={{
    strings: ['Hammad Mustafa', 'Gfx Designer' , 'Web Developer ' ,'Ui/Ux Designer'],
    autoStart: true,
    loop: true,
  }}
/>

 
      </h1>

      <div className='w-[150px] h-[3px] bg-blue-700'></div>
      <p className="mb-8 leading-relaxed">
      

As a dedicated Software Engineer with a focus on Java, I excel in crafting efficient, scalable, and robust software solutions. My technical skills also extend to Python and advanced data structures, providing me with a versatile approach to problem-solving.

Currently, I am deepening my expertise in the rapidly evolving field of Generative AI through an intensive program at GIAC. This advanced training is equipping me with cutting-edge knowledge and skills in AI innovation, enabling me to drive value and lead impactful projects in dynamic environments.

      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
      <Image
        className="object-cover object-center rounded mx-auto w-[300px]"
        alt="hero"
        src="/assets/picture/image.jpg"
        width={100}
        height={100}
       
      />
    </div>
  </div>
</section>

  )
}

export default Hero
