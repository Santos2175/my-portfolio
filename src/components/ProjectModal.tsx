import { useEffect } from 'react';
import type { IProject } from '../types/data.types';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';

type Props = {
  onClose: () => void;
  project: IProject;
};

const ProjectModal = ({ project, onClose }: Props) => {
  // Avoid scrolling in background, when modal opens
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  });

  return (
    <div className='h-screen fixed inset-0 flex items-center justify-center z-50 bg-black/40'>
      <div className='relative bg-white rounded-xl  shadow-md my-8 w-[90vw] lg:w-[50vw] mx-auto'>
        <button
          className='absolute bg-orange-100 hover:bg-orange-200/85 flex items-center justify-center -right-2.5 -top-2.5 z-80 p-1 rounded-full cursor-pointer'
          onClick={() => onClose()}>
          <IoIosCloseCircleOutline className='h-4 w-4 lg:h-6 lg:w-6 text-primary hover:text-orange-500' />
        </button>
        <img
          src={project.image}
          alt='project image'
          className='w-full h-50 sm:h-72 md:h-80 object-contain'
        />

        {/* Title, descriptions and other contents */}
        <div className='px-4 py-5 border-t-2 border-t-orange-300 rounded-tl-2xl rounded-tr-2xl'>
          {/* Links to navigate to source code or live app */}
          <div className='flex justify-center gap-4  mb-3'>
            <Link
              to={'#'}
              className='flex-1  action-btn-outline hover:shadow-md cursor-pointer h-8 md:h-10'>
              View Code
            </Link>
            <Link
              to={'#'}
              className='flex-1 action-btn h-8 md:h-10 hover:shadow-lg'>
              View Live
            </Link>
          </div>

          {/* Project Title */}
          <h3 className='text-base font-semibold line-clamp-2 text-ellipsis overflow-hidden'>
            {project.title}
          </h3>

          {/* Project Description */}
          <p className='text-sm text-left my-3'>This is the description</p>

          {/* Project Tags */}
          <div className='flex flex-wrap gap-3'>
            {project.tags.map((tag, index) => (
              <span
                className='text-xs text-secondary bg-orange-100 px-3 py-1 rounded'
                key={index}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
