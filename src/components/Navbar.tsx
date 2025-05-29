import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { MENU_LINKS } from '../utils/data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    // Set initial state based on screen size
    handleResize();

    // Listen to resize events
    window.addEventListener('resize', handleResize);

    // Clean up listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className=' max-w-[1440px] mx-auto sticky top-5 z-10'>
      <div className='flex items-center justify-between rounded-full bg-white/50 border border-[#fee6cc] backdrop-blur-[10px] m-5 p-3 md:p-0'>
        {/* Portfolio app name */}
        <Link to='hero' smooth spy offset={-100} className='cursor-pointer'>
          <h2 className='text-xl font-medium md:ml-6 mr-6 text-secondary'>
            &lt;SANTOSH/&gt;
          </h2>
        </Link>

        {/* Hamburgur icon, visible in small devices */}
        <button
          className='block md:hidden text-[#333] mr-6 focus:outline-none'
          onClick={toggleMenu}>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            {isOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h-7'
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul className={`${isOpen ? 'flex' : 'hidden'} menu-wrapper`}>
          {MENU_LINKS.map((item) => (
            <li key={item.id}>
              <Link
                activeClass='menu-active'
                to={item.to}
                smooth
                spy
                hashSpy
                isDynamic
                offset={item.offset}
                duration={500}
                className='menu-item'>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button className='hidden md:block h-12 text-[15px] text-white font-medium bg-gradient-primary rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer'>
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
