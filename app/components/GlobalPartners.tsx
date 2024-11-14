import { useTranslations } from "next-intl";

import Card from "./Card";
import { ABOUT_US } from "@/config";

export default function GlobalPartners() {
  const t = useTranslations("about");

  return (
    <section
      className="text-center bg-[#F5F5F5] font-poppins px-4 sm:px-10 md:px-20 lg:px-52 py-20 dark:bg-brandDark"
      id="about-us"
    >
      <div className="mx-auto">
        <h3 className="mb-10 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          {t("heading")}
        </h3>
        <p className="text-[#737373] dark:text-white dark:text-opacity-80 mt-4 text-[14px] sm:text-[15px] md:text-[16px] w-full md:w-[70%] lg:w-[75%] mx-auto">
          {t("content")}
        </p>
        <p className="text-[#737373] dark:text-white dark:text-opacity-80 mt-4 text-[14px] sm:text-[15px] md:text-[16px] w-full md:w-[70%] lg:w-[75%] mx-auto">
          {t("paragraph-two")}
        </p>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {ABOUT_US.map((service, index) => (
          <div key={index} className="relative">
            <Card className="flex flex-col dark:bg-dark-mode-bg dark:text-white justify-between h-full z-50 hover:shadow-[4px_4px_15px_0px_rgba(20,50,1,0.2)] hover:shadow-brand shadow-md transition-shadow duration-300 ease-in-out ">
              <div className="flex flex-col items-center text-center gap-y-10 w-full px-4 py-2">
                <service.icon className="text-brand" size="43" />
                <div className="flex flex-col justify-between flex-grow gap-y-2">
                  <h5 className="font-poppins font-semibold dark:text-white text-black text-[18px]">
                    {t(`${service.contentKey}.title`)}
                  </h5>
                  <p className="text-[14px] dark:text-white text-[#737373]">
                    {t(`${service.contentKey}.description`)}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div> */}
    </section>
  );
}
