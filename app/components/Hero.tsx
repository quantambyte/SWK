import { useTranslations } from "next-intl";
import Image from "next/image";

import person from "@/assets/hero/persons.svg";
import leftImage from "@/assets/hero/left.svg";
import Button from "./Button";
import Link from "next/link";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="h-[60vh] md:h-[90vh] bg-wave-img bg-cover bg-center flex flex-col items-center justify-center font-poppins gap-5 relative">
      <h6 className="text-brand dark:text-[#4c83b7] z-10 font-semibold text-sm md:text-[16px]">
        #Top Rated Technology Company
      </h6>
      <h6 className="flex z-10 flex-col gap-5 text-center text-3xl md:text-5xl  text-brand dark:text-[#4c83b7]">
        <span className="font-nura">{t("welcome")}</span>
        <span className="font-nuaBold font-bold md:text-7xl leading-3 ">
          SWK Technologies
        </span>
      </h6>

      <p className="mt-5 z-10 text-grey dark:text-dark-mode-grey text-[14px] md:text-lg xl:text-xl 2xl:text-2xl">
        {t("trusted")}
      </p>

      <div className="flex flex-col md:flex-row h-[56px] gap-5 md:gap-7 z-10">
        <Button className="w-[140px] md:w-[200px]">{t("get-started")}</Button>
        <Link href="#services" className="h-full">
          <Button
            className="w-[140px] md:w-[200px] bg-transparent border border-brand text-brand h-full"
            style={{
              color: "#8b4b9b",
            }}
          >
            {t("our-services")}
          </Button>
        </Link>
      </div>

      <Image
        src={person}
        alt="Persons working"
        width={320}
        height={240}
        className="hidden scale-x-[-1] lg:block absolute bottom-10 right-0 -z-5"
      />

      <Image
        src={leftImage}
        alt="Boxes floating"
        width={400}
        height={300}
        className="hidden xl:block absolute bottom-[20%] left-10 z-10"
      />
    </section>
  );
}
