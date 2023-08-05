import React,{useState} from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import {logo,menu,close} from "../assets"

const Navbar = ({scrollToSection}) => {


  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  return (
   <nav
   className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
    <div className='w-full flex justify-between items-end max-w-7xl mx-auto'>
      <Link
      to='/'
      className='flex items-center gap-2'
      onClick={()=>{
        setActive("")
        window.scrollTo(0,0)
      }}>
        <img src={logo} alt='logo' className='w-[35px] h-[35px] object-contain'/>
        <p className='text-white text-[18px] font-bold cursor-pointer'>Priyanshu</p>
      </Link>
      <ul className='list-none hidden sm:flex flex-row gap-10 '>
      {navLinks.map((link)=>(
        <li 
        key={link.id}
        onClick={()=>{
          setActive(link.title);
        scrollToSection(link.id);
        }
        }
        className={`${active ===link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium pb-[18px] cursor-pointer`}>
          <p href={`${link.id}`}>{link.title}</p>
        </li>
      ))}
      </ul>



    {/* making the drop down menu */}
       <div className='sm:hidden flex flex-1 justify-end items-center pb-[22px]'>
         <img
         src={toggle ? close:menu}
         alt='menu'
         onClick={()=>setToggle(!toggle)}
         />
         <div className={`${!toggle ? "hidden" : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
         <ul className='list-none flex flex-col justify-end items-start gap-4'>
      {navLinks.map((link)=>(
        <li 
        key={link.id}
        className={`${active ===link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
        onClick={()=>{
          setToggle(!toggle)
          setActive(link.title)
          scrollToSection(link.id);
          }}>
          <a href={`${link.id}`}>{link.title}</a>
        </li>
      ))}
      </ul>
         </div>
       </div>

    </div>
   </nav>
  )
}

export default Navbar;