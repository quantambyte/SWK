'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { FiSun, FiMoon } from 'react-icons/fi';

import { DARK_THEME, LIGHT_THEME } from 'app/config';
import useIsMounted from 'app/hooks/useIsMounted';

export default function ThemeSwitch({
  className = '',
}: {
  className?: string;
}) {
  const { setTheme, resolvedTheme } = useTheme();

  const isMounted = useIsMounted();

  const handleThemeChange = () => {
    setTheme(resolvedTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME);
  };

  if (!isMounted)
    return (
      <Image
        src='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=='
        width={20}
        height={20}
        sizes='20x20'
        alt='Loading Light/Dark Toggle'
        priority={false}
        title='Loading Light/Dark Toggle'
        className='ml-8'
      />
    );

  /**
   * When component mounted and theme is @dark
   */
  if (resolvedTheme === DARK_THEME) {
    return (
      <button onClick={handleThemeChange} className={`ml-8 ${className}`}>
        <FiSun />
      </button>
    );
  }

  /**
   * When component mounted and theme is @light
   */
  if (resolvedTheme === LIGHT_THEME) {
    return (
      <button onClick={handleThemeChange} className={`ml-8 ${className}`}>
        <FiMoon />
      </button>
    );
  }
}
