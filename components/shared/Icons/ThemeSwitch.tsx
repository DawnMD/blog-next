import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const ThemeSwitch = (): JSX.Element | null => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  const toggleMode = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <button
        className='w-10 h-10 transition-all bg-neutral-200 rounded-md dark:bg-neutral-600 hover:ring-2 ring-neutral-300'
        onClick={toggleMode}>
        <span className='sr-only'>Color mode switch button</span>
        {theme === 'dark' ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6 mx-auto text-yellow-500'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6 mx-auto'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
            />
          </svg>
        )}
      </button>
    </>
  );
};
export default ThemeSwitch;
