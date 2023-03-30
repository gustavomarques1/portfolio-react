import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] =useInView({
    threshold:0.5,
  })
  return(
   <div className='section' id='about' ref={ref}>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-10 lg:flex-row items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        { <motion.div
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}

        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div> }
        <motion.div
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
         className='flex-1'>
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>I'm a Developer Front end.</h3>
          <p className='mb-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque sunt et expedita non. Harum, natus maxime est ducimus laboriosam dignissimos explicabo! Veritatis facilis explicabo expedita accusantium omnis? Debitis, deleniti cupiditate!

          </p>
          <div className='flex gap-x-6 lg:gao-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={2} duration={3} /> :null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br />
              Experience
              </div>
            </div>
            <div className='flex'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={21} duration={2} /> :null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                My <br />
                  Age
              </div>
            </div>
            </div>
            
          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Contact me</button>
            <a href="#" className='text-gradient btn-link'>
              My Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default About;
