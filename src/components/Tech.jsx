import React from 'react'
import { BallCanvas } from './canvas'
import { technologies } from '../constants'
import SectionWrapper from '../hoc/SectionWrapper'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 w-[800px] ml-[200px]'>
      {technologies.map((technology)=>{
        return(
          <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon}/>
          </div>
        )
      })}

    </div>
  )
}

export default SectionWrapper(Tech,"tech")