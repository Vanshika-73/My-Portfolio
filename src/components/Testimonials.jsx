import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './achievents.css';
import { Pagination } from 'swiper/modules';
const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
      <SwiperSlide >
      <p className='text-white font-black text-[48px]'>"</p>

<div className='mt-1'>
  <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

  <div className='mt-7 flex justify-between items-center gap-1'>
    <div className='flex-1 flex flex-col'>
      <p className='text-white font-medium text-[16px]'>
        <span className='blue-text-gradient'>@</span> {name}
      </p>
      <p className='mt-1 text-secondary text-[12px]'>
        {designation} of {company}
      </p>
    </div>

    <img
      src={image}
      alt={`feedback_by-${name}`}
      className='w-20 h-15 rounded-full object-cover'
    />
  </div>
</div>
      </SwiperSlide>
);

const Testimonials = () => {
  return (
    <div className={`bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SectionWrapper(Testimonials, "testimonials");