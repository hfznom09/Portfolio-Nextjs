"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div
    style={{backgroundImage: "url(/mountains.jpg)"}}
     className='w-screen h-screen flex items-center justify-center bg-center bg-cover overflow-y-auto utility'>
      {/* <div className='grid grid-rows-4 grid-flow-col gap-4'> */}
      <div className="grid grid-cols-1 gap-0.5 lg:grid-cols-2 lg:gap-5 max-w-[90%] max-h-[90%]">
        {Projects.map((project, index) => (
          // <div className='grid grid-cols-12 gap-12 md:grid-cols-2 md:gap-5'>
            <ProjectCard
                key={index}
                title={project.title}
                text={project.text}
                image={project.src}
            />
          /* </div> */
        ))}
      </div>
    </div>
  )
}

export default Page