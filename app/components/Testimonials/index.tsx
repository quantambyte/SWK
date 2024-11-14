import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import TestimonialCarousel from "./Carousel";
import getStarted from "@/assets/get-started.svg";
import Button from "../Button";
import Link from "next/link";
import AdvancedTestimonialCarousel from "../NewTestimonials";

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const localActive = useLocale();

  return (
    <section
      id="testimonials"
      className="px-4  dark:bg-brandDark bg-[#f5f5f5]  sm:px-10 md:px-20 lg:px-52 py-20 font-poppins relative"
    >
      <header className="text-center w-full md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] mx-auto">
        <h4 className="text-brand font-semibold text-lg md:text-[20px]">
          {t("heading")}
        </h4>
        <h3 className="text-heading-light dark:text-heading-dark font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl my-2">
          {t("subHeading")}
        </h3>
        <p className="text-light dark:text-dark text-sm md:text-lg">
          {t("description")}
        </p>
      </header>

      {/* <TestimonialCarousel /> */}
      <AdvancedTestimonialCarousel />

      {/* <div className="dark:bg-purple bg-brand w-[95%] md:w-[85%] mx-auto py-5 px-10 md:py-8 md:px-20 mt-24 text-white rounded-xl grid grid-cols-1 md:grid-cols-2 bg-wave-img bg-cover bg-center">
        <div className="flex flex-col gap-5">
          <h4 className="font-bold text-[40px]">
            {t("letsGetStarted.heading")}
          </h4>
          <p className="text-[12px]">{t("letsGetStarted.description")}</p>

          <Link href="/#contact">
            <Button className="bg-transparent border-2 border-white rounded-md outline-none w-[50px] md:w-max p-1 text-sm md:text-lg md:px-5 md:py-2">
              {t("letsGetStarted.action")}
            </Button>
          </Link>
        </div>
        <div className="hidden scale-x-[-1] md:flex items-center justify-center">
          <Image src={getStarted} alt="Get Started" width={265} height={190} />
        </div>
      </div> */}
    </section>
  );
}
