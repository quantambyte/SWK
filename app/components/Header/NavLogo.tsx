"use client";
import Image from "next/image";
import { useTheme } from "next-themes";

import LightModeLogo from "@/assets/Logo.svg";
import DarkModeLogo from "@/assets/dark-logo.svg";
import { LIGHT_THEME } from "@/config";
import useIsMounted from "app/hooks/useIsMounted";

export default function NavLogo() {
  const { resolvedTheme } = useTheme();
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <div className="w-[220px] h-[61.5px]"></div>;
  }

  return (
    <Image
      alt="SWKs Logo"
      src={resolvedTheme === LIGHT_THEME ? LightModeLogo : DarkModeLogo}
      width={220}
      height={61.5}
      className="w-[70px] dark:w-[85px] dark:p-2 md:w-[70px] lg:w-[80px] xl:w-[100px]"
    />
  );
}
