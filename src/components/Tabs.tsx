import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { ISkillTab } from '../types/data.types';

type Props = {
  tablist: ISkillTab[];
  activeTab: string;
  onChange: (value: string) => void;
};

const Tabs = ({ tablist, activeTab, onChange }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    containScroll: 'trimSnaps',
    align: 'start',
  });

  const [canScrollNext, setCanScrollNext] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);

  // Update embla scroll button
  const updateScrollButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollNext(emblaApi.canScrollNext());
    setCanScrollPrev(emblaApi.canScrollPrev());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateScrollButtons();
    emblaApi.on('select', updateScrollButtons);
    emblaApi.on('reInit', updateScrollButtons);
  }, [emblaApi, updateScrollButtons]);

  // Get styles for active tab
  const getActiveTabStyles = (value: string) =>
    activeTab === value
      ? 'text-white bg-gradient-primary'
      : 'text-secondary bg-transparent';

  return (
    <div className='relative flex items-center justify-center my-10'>
      {/* Left Button for Mobile */}
      <button
        onClick={() => emblaApi && emblaApi.scrollPrev()}
        disabled={!canScrollPrev}
        className={`absolute -left-4 z-10 xs:hidden bg-primary/95 shadow-md rounded-full p-1 ${
          !canScrollPrev ? 'opacity-40 cursor-not-allowed' : ''
        }`}>
        <ChevronLeft className='w-5 h-5 text-white' />
      </button>

      {/* Skills Selection Tabs  */}
      <div
        ref={emblaRef}
        className='bg-orange-100/85 rounded-full w-full md:w-auto overflow-hidden mx-4 md:mx-0'>
        <div className='flex justify-between md:gap-2 px-2 py-1'>
          {tablist.map((tab) => (
            <motion.button
              key={tab.id}
              initial={{ opacity: 0.1, scale: 1 }}
              animate={{
                opacity: activeTab === tab.value ? 1 : 0.8,
                scale: activeTab === tab.value ? 1.05 : 1,
              }}
              transition={{ duration: 0.2 }}
              onClick={() => onChange(tab.value)}
              className={`shrink-0 text-xs md:text-[15px] ${getActiveTabStyles(
                tab.value
              )} rounded-full whitespace-nowrap px-5 py-3 cursor-pointer`}>
              {tab.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Right Button for Mobile */}
      <button
        onClick={() => emblaApi && emblaApi.scrollNext()}
        disabled={!canScrollNext}
        className={`absolute -right-4 z-10 xs:hidden bg-primary/95 shadow-md backdrop-blur-lg rounded-full p-1 ${
          !canScrollNext ? 'opacity-40 cursor-not-allowed' : ''
        }`}>
        <ChevronRight className='w-5 h-5 text-white' />
      </button>
    </div>
  );
};

export default Tabs;
