import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { ig, linkedIn } from "../assets";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
    console.log("email",form.email)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send("service_1iy8zee","template_0c1s297",{
        from_name: form.name,
        to_name: "Vanshika",
        from_email: form.email,
        to_email:"vanshikabansal73@gmail.com",
        message: form.message
      },"PFGN0Kduzfms5LuKQ").then(()=>{
        setLoading(false);
        Swal.fire(
          'Thank You!',
          'I will get back to you via Email!',
          'success'
        )
        setForm({
          name: "",
          email: "",
          message: "",
        })
      },(error)=>{
        console.log(form);
        setLoading(false);
        console.log(error);
        Swal.fire('Try Again in sometime please!')
      })
  };

  return (
    <>
    <div
      className={`xl:mt-6 flex lg:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-10  flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-small mb-2'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-small'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-small mb-2'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-small'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-small mb-2'>Your Message</span>
            <textarea
              rows={3}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-small'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        <motion.div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"30px"}}>
          <a href="https://www.instagram.com/bansal_vanshi/"><img src={ig} alt="" height={'70px'} width={'70px'}/></a>
        <a href="https://www.linkedin.com/in/vanshika-367136222/"><img src={linkedIn} alt=""  height={'50px'} width={'70px'} /></a>
      </motion.div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className=' mt-3 lg:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
     
    </>
  );
};

export default SectionWrapper(Contact, "contact");