'use client';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

import { EN_LOCALE, DE_LOCALE } from 'app/config';
import Link from 'next/link';

export default function LocalSwitcher({
  className = '',
}: {
  className?: string;
}) {
  const localActive = useLocale();

  const pathname = usePathname();
  const url = pathname.substring(4);

  return (
    <Link href={`/${localActive === DE_LOCALE ? EN_LOCALE : DE_LOCALE}/${url}`}>
      <button className={`text-lg ${className}`}>
        {localActive === DE_LOCALE ? 'EN' : 'DE'}
      </button>
    </Link>
  );
}
