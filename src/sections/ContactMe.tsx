import { IoMdMail } from 'react-icons/io';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import ContactInfoCard from '../components/ContactInfoCard';
import { ABOUT_ME } from '../utils/data';
import { motion } from 'framer-motion';

const ContactMe = () => {
  return (
    <section id='contact' className='mx-auto max-w-[1440px] p-10 mt-14'>
      <div className='mx-auto w-full lg:w-[60vw] '>
        <h4 className='section-title'>Contact Me</h4>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-sm text-center leading-6 mt-4'>
          A results-driven developer with expertise in cutting-edge tools and
          frameworks, dedicated to engineering scalable and effective digital
          solutions.
        </motion.p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.2 }}>
          <ContactInfoCard icon={IoMdMail} text={ABOUT_ME.email} />
          <ContactInfoCard
            icon={IoPhonePortraitOutline}
            text={ABOUT_ME.phone}
          />
        </motion.div>

        <div>
          <h5 className='md:hidden text-secondary text-lg font-medium mt-4 mb-4'>
            Contact Form
          </h5>
          {/* Form */}
          <form className='flex flex-col'>
            <input
              type='text'
              name='fullName'
              placeholder='Full Name'
              id=''
              className='input-box'
              autoComplete='off'
            />
            <input
              type='text'
              name='email'
              placeholder='Email Address'
              id=''
              className='input-box'
              autoComplete='off'
            />

            <textarea
              name='message'
              placeholder='Message'
              id=''
              rows={3}
              className='input-box'
              autoComplete='off'
            />

            <button className='action-btn btn-scale-anim' type='submit'>
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
