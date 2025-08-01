import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { IoIosArrowForward } from 'react-icons/io';
import { PROJECTS } from '../utils/data';
import ProjectCard from '../components/ProjectCard';
import type { IProject } from '../types/data.types';
import ProjectModal from '../components/ProjectModal';
import { motion, AnimatePresence, easeIn } from 'framer-motion';

const MyProjects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
  });
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const [loaded, setLoaded] = useState<boolean>(false);

  const updateScrollButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', updateScrollButtons);
    updateScrollButtons();
  }, [emblaApi, updateScrollButtons]);

  const handleClickProject = (project: IProject) => {
    setIsModalOpen(true);
    setSelectedProject(project);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id='projects' className='bg-background mt-14'>
      <div className='max-w-[1440px] mx-auto px-8 md:px-10 py-10'>
        <div className='w-full lg:w-[60%]  mx-auto'>
          <h4 className='section-title'>Recent Projects</h4>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className='text-sm text-center mt-4 leading-6'>
            Each project highlights my strength in writing clean code and
            building seamless functionality.
          </motion.p>
        </div>

        <div className='relative'>
          <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex pt-14 pb-8'>
              {PROJECTS.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={loaded ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.02,
                    ease: easeIn,
                  }}
                  className='min-w-[100%] sm:min-w-[50%] lg:min-w-[33%]'
                  style={{
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                  }}>
                  <ProjectCard
                    imgUrl={project.image}
                    title={project.title}
                    tags={project.tags}
                    onClick={() => handleClickProject(project)}
                    onImageLoad={() => setLoaded(true)}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          {/* Left Arrow */}
          <button
            className={`arrow-btn -left-5 ${
              !canScrollPrev ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            disabled={!canScrollPrev}>
            <IoIosArrowForward className='rotate-180' />
          </button>

          {/* Right Arrow */}
          <button
            className={`arrow-btn -right-5 ${
              !canScrollNext ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={() => emblaApi && emblaApi.scrollNext()}
            disabled={!canScrollNext}>
            <IoIosArrowForward />
          </button>
        </div>

        <div className='pl-4'>
          <p className=' text-xs md:text-sm '>
            <strong>Note: </strong>Some of the fullstack projects might take
            time to load backend services due to cold starts as they are hosted
            on free tiers (Render).
          </p>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default MyProjects;
