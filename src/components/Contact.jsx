import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"
import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import SectionWrapper from "../hoc/SectionWrapper"
import { slideIn } from "../utils/motion"
import { profileLinks } from "../constants"

const Contact = () => {

  const formRef=useRef();

  const [form, setForm] = useState({ 
   name: '',
   email: '',
   message: '',
   })

  const [loading, setLoading] = useState(false)

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setForm({...form,[name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    setLoading(true)

    emailjs.send(
      import.meta.env.VITE_APP_SERVICE_ID_KEY,
      import.meta.env.VITE_APP_TEMPLATE_KEY,
      {
        from_name:form.name,
        to_name:'Priyanshu singh',
        from_email:form.email,
        to_email:'priyanshusingh216@gmail.com',
        message:form.message
      },
      import.meta.env.VITE_APP_PUBLIC_KEY
    )
    .then(()=>{
      setLoading(false);
      alert('Thank You. I will get back to you as soon as possible.')

      setForm({
        name:'',
        email:'',
        message:'',
      })
    },(error)=>{
      setLoading(false);
      console.log(error)
      alert('Something went wrong.')
    })
  }
  // lTiFhnFW9KeM9zHDu
  // 'template_b2vgxws'
  // service_fhf8qxk 

  return (
    <div>
     <motion.div
          variants={slideIn('right', "tween", 0.2, 1)} 
       className="flex flex-row mb-[50px] xs:mb-[70px] sm:mb-[100px] justify-center items-center space-x-[30px] xs:space-x-[55px] sm:space-x-[75px]">
        {profileLinks.map((link)=>(
            <p onClick={()=>window.open(link.link)} key={link.id} className="flex flex-col items-center justify-center hover:scale-150 ease-in-out delay-100 duration-300">
              <img src={link.image} className="w-[55px] h-[55px] xs:w-[65px] xs:h-[65px] sm:w-[70px] sm:h-[70px]"/>
            </p>
        ))}
      </motion.div>
  
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>
          Contact.
        </h3>
        <form
         ref={formRef}
         onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8">



          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
               onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
          </label>



          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
          </label>



          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your message
            </span>
            <textarea
              row="7"
              name="message"
              value={form.message}
               onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
          </label>

          <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-purple-600 rounded-xl">
            {loading ? 'Sending...' : 'Send'}
          </button>

        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")