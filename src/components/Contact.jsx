import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { useRef,useState } from "react"
import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import SectionWrapper from "../hoc/SectionWrapper"
import { slideIn } from "../utils/motion"

const Contact = () => {

  const [form, setForm] = useState({name:'',email:'',message:''})

  const [loading, setLoading] = useState(false)


  return (
    <div>Contact</div>
  )
}

export default Contact