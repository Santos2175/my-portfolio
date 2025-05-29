import { FaHandPaper } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WavingHi = () => {
  return (
    <motion.div
      className='flex items-center gap-2 text-lg font-medium text-primary'
      animate={{
        rotate: [0, 20, -10, 20, 0], // waving motion
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}>
      <FaHandPaper className='text-2xl origin-bottom-left' />
      <span>Hi!</span>
    </motion.div>
  );
};

export default WavingHi;
