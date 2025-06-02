import { IoMdMail } from 'react-icons/io';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import ContactInfoCard from '../components/ContactInfoCard';
import { ABOUT_ME } from '../utils/data';

// Schema for zod validation
const contactSchema = z.object({
  fullName: z.string().min(1, 'Full Name is required'),
  email: z
    .string()
    .min(1, 'Email Address is required')
    .email(`Invalid email address`),
  message: z.string().min(1, 'Message is required'),
});

// Type infering of form data
type ContactFormData = z.infer<typeof contactSchema>;

// Setup for emailjs Service
const SERVICE_ID = import.meta.env.VITE_APP_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_APP_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_APP_PUBLIC_KEY;

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      message: '',
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  // Handle form submitting
  const onSubmit = async (data: ContactFormData) => {
    if (isLoading) return;

    setIsLoading(true);
    const templateParams = {
      name: data.fullName,
      email: data.email,
      message: data.message,
    };
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      toast.success('Message sent successfully.');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Failed to send message. Please try again.', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id='contact' className='mx-auto max-w-[1440px] p-10 mt-14'>
      <div className='mx-auto w-full lg:w-[60%] '>
        <h4 className='section-title'>Contact Me</h4>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.2 }}
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

        {/* Contact Form */}
        <div>
          <h5 className='md:hidden text-secondary text-lg font-medium mt-4 mb-4'>
            Contact Form
          </h5>
          {/* Form */}
          <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <input
              type='text'
              placeholder='Full Name'
              id=''
              className='input-box'
              autoComplete='off'
              {...register('fullName')}
            />
            {errors && errors.fullName && (
              <p className='error-message'>{errors.fullName.message}</p>
            )}

            <input
              type='text'
              placeholder='Email Address'
              id=''
              className='input-box'
              autoComplete='off'
              {...register('email')}
            />
            {errors && errors.email && (
              <p className='error-message'>{errors.email.message}</p>
            )}

            <textarea
              placeholder='Message'
              id=''
              rows={3}
              className='input-box'
              autoComplete='off'
              {...register('message')}
            />
            {errors && errors.message && (
              <p className='error-message'>{errors.message.message}</p>
            )}

            <button
              className={`action-btn btn-scale-anim ${
                isLoading ? 'disabled' : ''
              }`}
              type='submit'
              disabled={isLoading}>
              {isLoading ? 'SUBMITTING' : 'SUBMIT'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
