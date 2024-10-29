import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { DE_LOCALE, SERVICES } from "@/config";
import bg from "@/assets/services-bg.svg";

export default function Services() {
  const t = useTranslations("services");

  return (
    <section
      id="services"
      className="px-4 sm:px-10 md:px-20 lg:px-52 py-20 font-poppins relative"
    >
      <div className="absolute z-10 top-[10%] xl:top-[10%] left-0 right-0 bottom-[-20%]">
        <Image className="hidden md:block" src={bg} alt="Background" fill />
      </div>
      <header className="flex flex-col  gap-4 md:gap-10 items-center mb-10 md:flex-row">
        <div className="font-bold text-lg md:text-xl lg:text-3xl xl:text-[40px] w-full">
          <h3>{t("heading.part1")}</h3>
          <h3>{t("heading.part2")}</h3>
        </div>
        <p>{t("content")}</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {SERVICES.map((service, index) => (
          <div
            key={index}
            className="border border-brand dark:bg-dark-mode-bg dark:text-white dark:border-brand p-4 rounded-lg h-[195px] flex flex-col justify-around"
          >
            <div className="flex items-center justify-between">
              <span
                className={`font-teko font-light text-brand dark:text-brand dark:text-opacity-50 text-[42px] text-opacity-30`}
              >
                {index < 9 && "0"}
                {index + 1}
              </span>
              {/* <Image
                src={service.image}
                alt={t(`service${index + 1}`)}
                width={67}
                height={67}
              /> */}
              <service.image />
            </div>
            <h4 className="font-bold text-lg max-w-[60%]">
              {t(`service${index + 1}`)}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
