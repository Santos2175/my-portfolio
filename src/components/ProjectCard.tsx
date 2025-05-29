type Props = {
  imgUrl: string;
  title: string;
  tags: string[];
  onClick: () => void;
};

const ProjectCard = ({ imgUrl, title, tags, onClick }: Props) => {
  return (
    <div
      role='button'
      onClick={onClick}
      className='h-full bg-white rounded-xl  overflow-hidden shadow-md mx-3 cursor-pointer'>
      <img
        src={imgUrl}
        alt={title}
        className='w-full h-72 md:h-80 object-cover'
      />

      <div className='px-4 py-5 border-t border-t-orange-200'>
        <h3 className='text-base font-semibold line-clamp-2 overflow-hidden text-ellipsis'>
          {title}
        </h3>

        <div className='flex flex-wrap gap-3 mt-3'>
          {tags.map((tag, index) => (
            <span
              key={index}
              className='text-xs text-secondary bg-orange-100 px-3 py-1 rounded'>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
