import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from "framer-motion"

import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn,textVariant} from '../utils/motion'

export const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
      Introduction
      </p>
      <h2 className={styles.sectionHeadText}>
       Overview.
      </h2>
    </motion.div>
    <motion.p
    variants={fadeIn("","",0.1,1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    HEY! My self <b className='text-[#915eff]'>PRIYANSHU SINGH</b>  currently pursuing my B.TECH from <b className='text-[#915eff]'>ZHCET,AMU(2026)</b>. 
     I'm Skilled Webdeveloper with experience in <b className='text-[#915eff]'>Javascript</b> and also know about the frameworks like <b className='text-[#915eff]'>React</b>,<b className='text-[#915eff]'>Tailwind CSS</b>, working with <b className='text-[#915eff]'>APIs</b> ,<b className='text-[#915eff]'>Redux</b>  ,<b className='text-[#915eff]'>React Auth</b> and <b className='text-[#915eff]'>three.js</b>. I'm quick learner and can dedicate hours to work.<br/> 
     Right now focusing on<b className='text-[#915eff]'> DSA</b>  along with Web development.
    </motion.p>
    </>
  )
}

export default About