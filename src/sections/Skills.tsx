import { useState } from 'react';
import { SKILL_TABS, SKILLS } from '../utils/data';
import type { ISkill } from '../types/data.types';
import Tabs from '../components/Tabs';
import SkillCard from '../components/SkillCard';
import { motion } from 'framer-motion';

const Skills = () => {
  const [tabData, setTabData] = useState<ISkill[]>(SKILLS);
  const [activeTab, setActiveTab] = useState('all');

  const handleTabValueChange = (value: string) => {
    if (value === 'all') {
      setTabData(SKILLS);
      setActiveTab(value);
      return;
    }

    const updatedList = SKILLS.filter((skill) => skill.type === value);
    setTabData(updatedList);
    setActiveTab(value);
  };

  return (
    <section id='skills' className=' bg-background mt-26 '>
      <div className='container mx-auto  p-10'>
        {/* Title */}
        <div className='max-w-[1440px] w-full lg:w-[60vw] mx-auto'>
          <h4 className='section-title'>Technical Proficiency</h4>

          <p className='text-sm text-center mt-4 leading-6'>
            A versatile developer with hands-on expertise in modern
            technologies, tools and frameworks, dedicated to building efficient,
            scalable and user centric solutions.
          </p>
        </div>

        <Tabs
          tablist={SKILL_TABS}
          activeTab={activeTab}
          onChange={handleTabValueChange}
        />

        <div
          key={activeTab}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 min-h-[350px]'>
          {tabData.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}>
              <SkillCard
                icon={skill.icon}
                skillName={skill.skill}
                level={skill.level}
                description={skill.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
