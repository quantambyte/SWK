import Image from "next/image";

import bg from "@/assets/companies-person.svg";
import { useLocale, useTranslations } from "next-intl";
import { DE_LOCALE } from "@/config";

export default function Companies() {
  const t = useTranslations("companies");

  const locale = useLocale();

  return (
    <section className="font-poppins relative min-h-[500px] md:min-h-[90vh] gradient-bg">
      <div className="px-4 sm:px-10 md:px-20 md:absolute md:top-0 md:left-0 lg:px-52 py-20 companies-bg w-full flex flex-col items-center lg:items-end justify-center h-full">
        <Image
          src={bg}
          alt="Superhero"
          width={260}
          height={270}
          className="block absolute bottom-0 right-0"
        />

        <div
          className={`z-10 lg:w-[50%] md:w-full text-center ${
            locale === DE_LOCALE ? "lg:text-right" : "lg:text-left"
          }`}
        >
          <h4 className="font-bold text-2xl md:text-4xl lg:text-[40px] flex flex-col text-heading-light dark:text-heading-dark md:leading-[50px]">
            <span>{t("heading.part1")}</span>
            <span>{t("heading.part2")}</span>
          </h4>
          <p className={`text-light dark:text-dark text-[16px] mt-3`}>
            {t("content")}
          </p>
        </div>
      </div>
    </section>
  );
}
