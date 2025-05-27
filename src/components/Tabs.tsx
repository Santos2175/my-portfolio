import { motion } from 'framer-motion';
import type { ISkillTab } from '../types/data.types';

type Props = {
  tablist: ISkillTab[];
  activeTab: string;
  onChange: (value: string) => void;
};

const Tabs = ({ tablist, activeTab, onChange }: Props) => {
  const getActiveTabStyles = (value: string) => {
    return activeTab === value
      ? 'text-white bg-gradient-primary'
      : 'text-secondary bg-transparent';
  };

  return (
    <div className='flex items-center justify-center my-10'>
      <div className='bg-[#fff6eb] rounded-full flex'>
        {tablist.map((tab) => (
          <motion.button
            key={tab.id}
            initial={{ opacity: 0.1, scale: 1 }}
            animate={{
              opacity: activeTab === tab.value ? 1 : 0.8,
              scale: activeTab === tab.value ? 1.05 : 1,
            }}
            transition={{ duration: 0.2 }}
            className={`text-xs md:text-[15px] ${getActiveTabStyles(
              tab.value
            )} rounded-full px-4 md:px-10 py-6 md:py-3 cursor-pointer`}
            onClick={() => onChange(tab.value)}>
            {tab.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
