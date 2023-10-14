import React from 'react';
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import { github, web } from '../assets';
import {projects} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';
const ProjectCard = ({index,name,description,tags,image, source_code_link,web_link}) =>{
  return(
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full'
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name}  className='w-full h-full object-cover rounded-2xl'/>
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div onClick={()=> window.open(source_code_link)} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ' >
              <img src={github} alt="github" className='w-1/2 h-1/2'/>
            </div>
            <div onClick={()=> window.open( web_link )} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-2' >
              <img src={web} alt="github" className='w-1/2 h-1/2'/>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className='text-white text-bold text-[20px]'>{name}</h3>
          <p className="text-secondary mt-2 text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag)=>(
            <p key={tag.name} className={`text-1[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My work</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>

    <div className='w-full flex'>
    <motion.p variants={fadeIn("","",0.01,1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    My work involves utilizing a combination of MongoDB, Express.js, React, and Node.js to develop both the front-end and back-end components of the application. I design and implement efficient data storage solutions using MongoDB, build the server-side components with Express.js, create responsive and user-friendly interfaces using React, and develop scalable server-side applications with Node.js. I usually collaborate with cross-functional teams, working closely with designers, back-end developers, and other stakeholders to ensure seamless integration and efficient functioning of the application. Their expertise lies in leveraging these technologies to create robust and interactive web applications that provide an engaging user experience.
    </motion.p>

    </div>
    <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works,"work")