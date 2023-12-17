import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { styles } from "../styles";
import './achievents.css';
import { SectionWrapper } from "../hoc";
import 'swiper/css';
import 'swiper/css/effect-cards';
import { textVariant } from "../utils/motion";
import { EffectCards } from 'swiper/modules';
import { backend, proshop, udyamWellProject } from "../assets";
import { achievements } from "../constants";

const Achievements = () => {
  return (
    <div className={`bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[100px]  xs:w-[320px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I achieved</p>
          <h2 className={styles.sectionHeadText}>Achievements.</h2>
        </motion.div>
      </div>
      <div className={`mt-4 pb-14 ${styles.paddingX} xs:mt-3 xs:h-300`}>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {
          achievements.map((item,index)=>{
            return(
            <SwiperSlide key={index}><img style={{width:"100%",height:"100%"}} src={item.img} alt="" /></SwiperSlide>
          )
        })
        }
      </Swiper>
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "achievement");