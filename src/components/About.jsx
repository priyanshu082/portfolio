import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion"
import { SectionWrapper } from '../hoc/SectionWrapper'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

export const About = () => {

  const ServiceCard = ({ index, title, icon }) => {
    return (
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '>
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img src={icon} alt={title}
              className='w-15 h-16 object-contain' />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    )

  }


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
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        HEY! My self <b className='text-[#915eff]'>PRIYANSHU SINGH</b>  currently pursuing my B.TECH from <b className='text-[#915eff]'>ZHCET,AMU(2026)</b>.
        I'm Skilled Webdeveloper with experience in <b className='text-[#915eff]'>Javascript</b> and also know about the frameworks like <b className='text-[#915eff]'>React</b>,<b className='text-[#915eff]'>Tailwind CSS</b>, working with <b className='text-[#915eff]'>APIs</b> ,<b className='text-[#915eff]'>Redux</b>  ,<b className='text-[#915eff]'>React Auth</b> and <b className='text-[#915eff]'>three.js</b>. I'm quick learner and can dedicate hours to work.<br />
        Right now focusing on<b className='text-[#915eff]'> DSA</b>  along with Web development.
      </motion.p>

      <div className='mt-20 flex flex-wrap flex-1 gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    
      <motion.div className='pt-[50px]' 
      variants={fadeIn("right", "spring", 1.25, 0.75)}>
        <h3 className={styles.heroSubText}>You can dowload My resume by clicking below.</h3>
    <a href='../../priyanshuSingh.pdf' download="_priyanshuSingh.pdf">
      
        <button className='bg-purple-600 p-[10px] rounded-2xl text-gray-300 text-[20px] font-medium mt-[20px] hover:scale-110 ease-in-out delay-100 duration-300 hover:bg-purple-500 w-[180px] '>Download</button>
      
    </a>
      </motion.div>

      
    </>
  )
}

export default SectionWrapper(About, "about")