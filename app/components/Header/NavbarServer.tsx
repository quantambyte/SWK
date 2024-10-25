import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { LocaleSwitcher, ThemeSwitcher } from 'app/components';

import { HEADER_LINKS } from '@/config';
import Button from '@/components/Button';
import NavLogo from './NavLogo';
import { useLocale } from 'next-intl';

export default function NavbarServer() {
  const t = useTranslations('header');
  const localActive = useLocale();

  return (
    <div className="flex justify-between w-full">
      <Link href={`/${localActive}/`}>
        <NavLogo />
      </Link>
      <ul
        className="hidden md:flex gap-5 lg:gap-10 items-center justify-between ml-4 text-sm lg:text-[16px]"
        id="navLinks"
      >
        {HEADER_LINKS.map((link) => (
          <Link key={link.id} href={link.href}>
            {t(link.label)}
          </Link>
        ))}
      </ul>

      <div className="hidden md:flex items-center gap-2 xl:gap-5">
        <ThemeSwitcher />
        <Link href="/#contact">
          <Button className="dark:bg-brand dark:text-black">
            {t('consultUs')}
          </Button>
        </Link>
        <LocaleSwitcher />
      </div>
    </div>
  );
}
