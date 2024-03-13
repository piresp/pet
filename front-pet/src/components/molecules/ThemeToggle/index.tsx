"use client"

import { selectDarkMode, toggleTheme } from '@/redux/slices/theme';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useDispatch, useSelector } from 'react-redux';

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(selectDarkMode);

  return (
    <div className='flex items-center border-l-2 cursor-pointer' onClick={() => dispatch(toggleTheme())}>
      <SunIcon
        className={'absolute w-8 h-8 transition-all duration-300 ease-in-out text-yellow-300' + !isDarkMode ? 'transform -translate-x-5 opacity-100' : 'transform translate-x-6 opacity-0 duration-500'}
      />
      <MoonIcon
        className={'absolute w-8 h-8 transition-all duration-300 ease-in-out text-warmYellow-800' + isDarkMode ? 'transform -translate-x-5 opacity-100' : 'transform translate-x-6 opacity-0 duration-500'}
      />
    </div>
  );
};

export default ThemeToggle;
