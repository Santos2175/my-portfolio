import type { IconType } from 'react-icons';

type Props = {
  icon: IconType;
  description: string;
  skillName: string;
  level: string;
};

const SkillCard = ({ icon: Icon, description, level, skillName }: Props) => {
  return (
    <div className='bg-white rounded-2xl border border-[#fce8d4] p-4 transition-transform duration-300 ease-in-out hover:shadow-md hover:scale-105'>
      <div className='flex gap-3'>
        <div className='w-10 h-10 flex items-center justify-center bg-gradient-to-b from-[#fdeddd] to-[#ffffff] rounded-[7px]'>
          <Icon className='w-6 h-6 text-secondary' />
        </div>

        <div className='flex-1'>
          <div className='flex items-center justify-between'>
            <p className='text-[13px] text-black font-medium'>{skillName}</p>
            <p className='text-xs text-secondary font-medium'>{level}</p>
          </div>

          <div className='w-full bg-primary rounded-md h-[5px] mt-2'></div>
        </div>
      </div>

      <p className='text-xs text-gray-600 text-justify leading-5 mt-2'>
        {description}
      </p>
    </div>
  );
};

export default SkillCard;
