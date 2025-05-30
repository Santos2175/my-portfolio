import { Link } from 'react-router-dom';
import PROFILE_PIC from '../assets/images/profile2.png';
import { ABOUT_ME } from '../utils/data';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <section
      id='about'
      className='max-w-[1440px] mx-auto px-8 pt-8 md:py-16 mt-14'>
      <h4 className='block lg:hidden w-[200px] section-title text-left mb-8 md:mb-16'>
        About Me
      </h4>
      <div className='flex flex-col lg:flex-row gap-16 items-start justify-between'>
        <div className='w-[250px] md:w-[370px] h-[320px] md:h-[428px] bg-orange-100/50 rounded-3xl mx-auto'>
          <img src={PROFILE_PIC} alt='profile pic' className='profile-pic' />
        </div>

        <div className='flex-1'>
          <h4 className='hidden lg:block w-[200px] section-title text-left'>
            About Me
          </h4>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-sm text-justify leading-6 whitespace-pre-line mt-4'>
            {ABOUT_ME.content}
          </motion.p>

          <div className='flex gap-4 mt-4'>
            {ABOUT_ME.socialLinks.map((item) => (
              <Link
                to={item.link}
                key={item.label}
                target='_blank'
                className='cursor-pointer group'>
                <item.icon className='text-2xl text-secondary transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[-2px] group-hover:text-primary' />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
