import { IoMdMail } from 'react-icons/io';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import ContactInfoCard from '../components/ContactInfoCard';
import { ABOUT_ME } from '../utils/data';

const ContactMe = () => {
  return (
    <section id='contact' className='mx-auto max-w-[1440px] p-10'>
      <div className='mx-auto w-full lg:w-[60vw] '>
        <h4 className='section-title'>Contact Me</h4>
        <p className='text-sm text-center leading-6 mt-4'>
          A results-driven developer with expertise in cutting-edge tools and
          frameworks, dedicated to engineering scalable and effective digital
          solutions.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16'>
        <div>
          <ContactInfoCard icon={IoMdMail} text={ABOUT_ME.email} />
          <ContactInfoCard
            icon={IoPhonePortraitOutline}
            text={ABOUT_ME.phone}
          />
        </div>

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
