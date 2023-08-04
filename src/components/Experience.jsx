import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import "react-vertical-timeline-component/style.min.css"
import { styles } from '../styles'
import { experiences } from '../constants'
import {SectionWrapper} from '../hoc/SectionWrapper'
import { textVariant } from '../utils/motion'

export const Experience = () => {
 
  const ExperienceCard=({experience})=>{
    return(
      <VerticalTimelineElement
      contentStyle={{background:'#1d1836' ,color:'#fff'}}
      contentArrowStyle={{borderRight:"7-px solid #232631"}}
      iconStyle={{background:experience.iconBg}}
      icon={
        <div className='w-full h-full'>
          <img 
          src={experience.icon }
          alt={experience.company_name}
          className='object-contain'/>
        </div>
      }>
       <div>
        <h3 className='text-white text-[22px] font-bold'>{experience.title}</h3>
        <p className='text-secondary text-[14px] font-semibold'
        style={{margin:0}}>
          {experience.company_name}
        </p>
       
     
       <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point ,index)=>(
        <li
         key={`experience-point-${index}`}
        className='text-white-100 text-[14px] pl-1 tracking-wider'>
    {point}
        </li>
      ))}
       </ul>
       <div className='mt-[20px] ml-[10px] text-secondary text-[14px]'>{experience.date}</div>
       </div>
      </VerticalTimelineElement>
    )
  }


  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>
          What I have done so far
        </p>
        <h2 className={styles.sectionHeadText}>
          Work Experience.
        </h2>
    </motion.div>

    {/* verticla timeline  */}
    <div className='mt-20 flex flex-col'>
      <VerticalTimeline>

     {experiences.map((experience,index)=>(
      <ExperienceCard key={index} experience={experience}/>
     ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience,"experience")