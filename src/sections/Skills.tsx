import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { SKILL_TABS, SKILLS } from '../utils/data';
import type { ISkill } from '../types/data.types';
import Tabs from '../components/Tabs';
import SkillCard from '../components/SkillCard';
import { AnimatePresence, easeInOut, motion } from 'framer-motion';
import { RiArrowDownDoubleLine, RiArrowUpDoubleLine } from 'react-icons/ri';

const Skills = () => {
  const [tabData, setTabData] = useState<ISkill[]>(SKILLS);
  const [activeTab, setActiveTab] = useState('all');
  const [isExpanded, setIsExpanded] = useState(false);
  const [screenSize, setScreenSize] = useState<'small' | 'medium' | 'large'>(
    'large'
  );

  const LIMITS = {
    small: 4,
    medium: 6,
    large: 8,
  };

  const toggleRef = useRef<HTMLDivElement>(null);
  const wasExpanded = useRef(true);
  const didMount = useRef(false);

  const handleToggle = () => {
    wasExpanded.current = isExpanded;
    setIsExpanded((prev) => !prev);
  };

  useLayoutEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      wasExpanded.current = isExpanded;
      return;
    }
    // If the list just collapsed
    if (wasExpanded.current && !isExpanded && toggleRef.current) {
      // Wait one frame to ensure layout is fully updated
      setTimeout(() => {
        toggleRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 900);
    }

    wasExpanded.current = isExpanded;
  }, [isExpanded]);

  const handleTabValueChange = (value: string) => {
    let updatedList = SKILLS;
    if (value === 'all') {
      setTabData(SKILLS);
      setActiveTab(value);
      return;
    }

    updatedList = SKILLS.filter((skill) => skill.type === value);
    setTabData(updatedList);
    setActiveTab(value);
    setIsExpanded(false);
  };

  const shouldShowToggle = tabData.length > LIMITS[screenSize];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setScreenSize('small');
      else if (width >= 768 && width < 1280) setScreenSize('medium');
      else setScreenSize('large');
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id='skills' className='bg-background mt-26'>
      <div className='max-w-[1440px] mx-auto p-10'>
        {/* Title */}
        <div className='w-full lg:w-[60vw] mx-auto'>
          <h4 className='section-title'>Technical Proficiency</h4>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 20 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className='text-sm text-center mt-4 leading-6'>
            A versatile developer with hands-on expertise in modern
            technologies, tools and frameworks, dedicated to building efficient,
            scalable and user centric solutions.
          </motion.p>
        </div>

        <Tabs
          tablist={SKILL_TABS}
          activeTab={activeTab}
          onChange={handleTabValueChange}
        />

        <motion.div
          key={activeTab}
          layout
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.2, ease: easeInOut }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 min-h-[350px]'>
          <AnimatePresence mode='sync'>
            {(isExpanded ? tabData : tabData.slice(0, LIMITS[screenSize])).map(
              (skill, index) => {
                const visibleSkills = isExpanded
                  ? tabData.length
                  : LIMITS[screenSize];
                const reverseIndex = visibleSkills - index - 1;

                return (
                  <motion.div
                    key={skill.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      duration: 0.4,
                      delay: isExpanded ? index * 0.02 : reverseIndex * 0.02,
                      ease: easeInOut,
                    }}>
                    <SkillCard
                      icon={skill.icon}
                      skillName={skill.skill}
                      level={skill.level}
                      description={skill.description}
                    />
                  </motion.div>
                );
              }
            )}
          </AnimatePresence>
        </motion.div>

        {shouldShowToggle && (
          <div
            ref={toggleRef}
            className='flex items-center justify-center mt-6 md:mt-4'>
            <button
              className='cursor-pointer text-secondary text-sm flex items-center gap-1'
              onClick={handleToggle}>
              See {isExpanded ? 'Less' : 'More'}
              <motion.span
                animate={{ y: [1, -2, 1] }}
                transition={{
                  duration: 1.3,
                  repeat: Infinity,
                  ease: easeInOut,
                }}
                className='text-lg'>
                {isExpanded ? (
                  <RiArrowUpDoubleLine />
                ) : (
                  <RiArrowDownDoubleLine />
                )}
              </motion.span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
