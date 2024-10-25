import Image from "next/image";
import { useTranslations } from "next-intl";

import whyUs from "@/assets/why-us.svg";
import { WHY_CHOSE_US } from "@/config";

export default function WhyChoseUs() {
  const t = useTranslations("whyUs");

  return (
    <section className="px-4 sm:px-10 md:px-20 lg:px-52 bg-[#f5f5f5] dark:bg-dark-bg py-20 relative grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 place-items-center font-poppins">
      <div className="hidden md:block grid-cols-5">
        <Image src={whyUs} alt="Why CHose Us" width={550} height={450} />
      </div>
      <div className="grid-cols-12 md:grid-cols-7">
        <h3 className="font-poppins font-bold text-[26px] md:text-[32px] lg:text-[40px] text-heading-light dark:text-heading-dark">
          {t("title")}
        </h3>
        <p className="text-light dark:text-dark text-[12px] md:text-[16px]">
          {t("description")}
        </p>

        <div className="mt-10 flex flex-col gap-5 lg:gap-8">
          {WHY_CHOSE_US.map((item, ind) => (
            <div key={ind} className="flex gap-5 items-start">
              <Image src={item} alt="Icon" width={49} height={49} />
              <div>
                <h6 className="font-semibold text-[14px] md:text-[18px]">
                  {t(`option${ind + 1}.title`)}
                </h6>
                <p className="text-[12px] md:text-[14px]">
                  {t(`option${ind + 1}.content`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
