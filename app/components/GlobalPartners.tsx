import { useTranslations } from "next-intl";

import Card from "./Card";
import { ABOUT_US } from "@/config";

export default function GlobalPartners() {
  const t = useTranslations("about");

  return (
    <section
      className="text-center bg-[#F5F5F5] px-4 sm:px-10 md:px-20 lg:px-52 py-20 dark:bg-dark-bg"
      id="about-us"
    >
      <div className="mx-auto">
        <h3 className="font-bold text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px]">
          {t("heading")}
        </h3>
        <p className="text-[#737373] dark:text-white dark:text-opacity-80 mt-4 text-[14px] sm:text-[15px] md:text-[16px] w-full md:w-[70%] lg:w-[50%] mx-auto">
          {t("content")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {ABOUT_US.map((service, index) => (
          <div key={index} className="relative">
            <Card className="flex flex-col dark:bg-dark-mode-bg dark:text-white justify-between h-full z-50 hover:shadow-xl">
              <div className="flex flex-col items-center text-center gap-y-10 w-full px-4 py-2">
                <service.icon
                  className="text-middleBlue dark:text-brand"
                  size="43"
                />
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
      </div>
    </section>
  );
}
