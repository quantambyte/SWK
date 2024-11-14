import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import getStarted from "@/assets/get-started.svg";
import Link from "next/link";
import Button from "./Button";

export default function GetStarted() {
  const t = useTranslations("testimonials");

  return (
    <section
      id="testimonials"
      className="px-4  dark:bg-brandDark bg-[#f5f5f5]  sm:px-10 md:px-20 lg:px-52 py-16 font-poppins relative"
    >
      <div className="dark:bg-purple bg-transparent border-[1px] border-brand w-[95%] md:w-[85%] mx-auto py-5 px-10 md:py-8 md:px-20 rounded-xl grid grid-cols-1 md:grid-cols-2 ">
        <div className="flex flex-col gap-5">
          <h4 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            {t("letsGetStarted.heading")}
          </h4>
          <p className="text-[12px]">{t("letsGetStarted.description")}</p>

          <Link href="/#contact">
            <Button className="bg-brand border-2  rounded-md outline-none w-[50px] md:w-max p-1 text-sm md:text-lg md:px-5 md:py-2">
              {t("letsGetStarted.action")}
            </Button>
          </Link>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <Image src={getStarted} alt="Get Started" width={265} height={190} />
        </div>
      </div>
    </section>
  );
}
// scale-x-[-1]
