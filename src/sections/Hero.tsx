import PROFILE_PIC from '../assets/images/profile2.png';
import REACT_ICON from '../assets/images/react.png';
import MONGO_ICON from '../assets/images/mongo-icon.png';
import EXPRESS_ICON from '../assets/images/express-icon.png';
import NODE_ICON from '../assets/images/node-icon.png';

const Hero = () => {
  return (
    <section id='hero' className='container mx-auto px-8 '>
      <div className='flex flex-col lg:flex-row gap-14 items-center justify-between pt-[60px] md:pt-[80px]'>
        <div className='order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0'>
          <h3 className='text-xl lg:text-2xl font-medium text-black'>
            Hi, I'm Santosh Gurung
          </h3>
          <h1
            className='w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px]
          lg:leading-[60px] mt-3 bg-gradient-primary bg-clip-text text-transparent'>
            Building scalable & User Centric Web Apps
          </h1>

          <p className='w-full lg:w-[500px] text-sm lg:text-base mt-4'>
            I am a fullstack developer crafting responsive, accessible and
            dynamic web experiences using MongoDB, React, Express and Node js
          </p>

          <div className='flex justify-center lg:justify-start gap-4 md:gap-8 mt-6'>
            <button className='flex-1 md:flex-none action-btn-outline btn-scale-anim cursor-pointer'>
              View My Work
            </button>
            <button className='flex-1 md:flex-none action-btn btn-scale-anim cursor-pointer'>
              Download Resume
            </button>
          </div>
        </div>

        <div className='w-[300px] md:w-[370px] h-[350px] md:h-[428px] bg-orange-100/50 rounded-3xl relative flex items-center justify-center order-1 lg:order-2 mr-6'>
          <img src={PROFILE_PIC} alt='' className='profile-pic' />

          <img
            src={MONGO_ICON}
            alt=''
            className='icon-img -left-5 md:-left-10 bottom-20 rotate-[1.65deg] hover:rotate-0'
          />
          <img
            src={EXPRESS_ICON}
            alt=''
            className='icon-img left-5 md:left-10 -bottom-2 rotate-[2.75deg] hover:rotate-0'
          />
          <img
            src={REACT_ICON}
            alt=''
            className='icon-img left-[110px] md:left-[150px] -bottom-6 rotate-[3.75deg] hover:rotate-0'
          />
          <img
            src={NODE_ICON}
            alt=''
            className='icon-img left-[200px] md:left-[255px] -bottom-8  rotate-[4.75deg] hover:rotate-0'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
