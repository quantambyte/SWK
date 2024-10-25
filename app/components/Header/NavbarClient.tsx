'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { HEADER_LINKS, LIGHT_MODE_FILL, LIGHT_THEME, WHITE } from '@/config';
import { FaBars } from 'react-icons/fa6';
import { ImCross } from 'react-icons/im';
import { useState } from 'react';
import Button from '@/components/Button';
import { LocaleSwitcher, ThemeSwitcher } from '..';
import { useTheme } from 'next-themes';
import useIsMounted from 'app/hooks/useIsMounted';

export default function NavbarClient() {
  const t = useTranslations('header');

  const { resolvedTheme } = useTheme();
  const isMounted = useIsMounted();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuContainerClasses = `absolute right-4 top-16 transition-opacity duration-300 ease-in-out w-11/12 py-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 ${
    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
  }`;

  const hoverClasses =
    'hover:bg-brand hover:dark:bg-gray-900 py-2 px-4 text-start w-full rounded-full';

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Button
        onClick={toggleMobileMenu}
        data-collapse-toggle='navbar-default'
        type='button'
        className='inline-flex md:hidden items-center p-2 w-10 h-10 justify-center rounded-lg min-w-max bg-purple dark:bg-white'
        aria-controls='navbar-default'
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <ImCross
            size={20}
            color={resolvedTheme === LIGHT_THEME ? WHITE : LIGHT_MODE_FILL}
          />
        ) : (
          <FaBars
            size={20}
            color={resolvedTheme === LIGHT_THEME ? WHITE : LIGHT_MODE_FILL}
          />
        )}
      </Button>

      <div
        className={menuContainerClasses}
        id='navbar-default'
        style={{ transitionDelay: `${isOpen ? '0ms' : '300ms'}` }}
      >
        <ul className='font-medium flex flex-col'>
          {HEADER_LINKS.map((link) => (
            <Link key={link.id} href={link.href} className={`${hoverClasses}`}>
              {t(link.label)}
            </Link>
          ))}
        </ul>

        <div className='mt-5 px-5 flex items-center justify-between'>
          <Button>{t('consultUs')}</Button>
          <div className='flex gap-2'>
            <LocaleSwitcher className={`${hoverClasses}`} />
            <ThemeSwitcher className={`!m-0 ${hoverClasses}`} />
          </div>
        </div>
      </div>
    </>
  );
}
