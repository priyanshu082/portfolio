import React from 'react'
import { BallCanvas } from './canvas'
import { technologies } from '../constants'
import SectionWrapper from '../hoc/SectionWrapper'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 '>
      {technologies.map((technology)=>{
        return(
          <div className=' w-12 h-12 xs:w-20 xs:h-20 sm:w-28 sm:h-28' key={technology.name}>
          <BallCanvas icon={technology.icon}/>
          </div>
        )
      })}

    </div>
  )
}

export default SectionWrapper(Tech,"tech")