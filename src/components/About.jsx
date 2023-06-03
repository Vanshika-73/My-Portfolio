import React from 'react';
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';
const ServiceCard = ({index,title,icon}) =>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
  )
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p variants={fadeIn("","",0.01,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    As a MERN stack developer, I possess the skills and expertise to create dynamic and interactive web applications. With a strong foundation in JavaScript and a deep understanding of the MERN (MongoDB, Express.js, React.js, Node.js) stack, I am equipped to build robust and scalable solutions. My passion for front-end development, coupled with my proficiency in back-end technologies, allows me to deliver seamless user experiences while ensuring efficient server-side functionality. I am committed to staying up-to-date with the latest industry trends and best practices, enabling me to create cutting-edge applications that meet the evolving needs of users.
    <div>
      <button onClick={()=>window.open("https://drive.google.com/file/d/1OAATBXRmb2RQkn2JYvtuUsKxC2ZjVW26/view?usp=drive_link","_blank")} className='bg-tertiary p-4 rounded-2xl font-bold mt-2 text-white'>Resume</button>
    </div>
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")