import React from "react";
import { FaCogs, FaLaptopCode, FaUsers } from "react-icons/fa";
import { useTranslations } from "next-intl";

const BusinessModel = () => {
  const t = useTranslations("OurBusinessModel");
  return (
    <section className="bg-[#f5f5f5] dark:bg-brandDark w-full mx-auto py-20 px-4 sm:px-10 md:px-20 lg:px-32 text-center font-poppins">
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-16">
        {t("OurBusinessModel")}
      </h2>

      <div className="grid gap-12 md:grid-cols-3">
        {/* Card 1: Product Development */}
        <div className="bg-white dark:bg-dark-mode-bg hover:shadow-[8px_8px_20px_-4px_rgba(20,50,1,0.2)] hover:shadow-brand shadow-md rounded-lg p-8  transition-shadow duration-300 ease-in-out relative">
          <FaCogs className="text-5xl text-brand mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 break-words	">
            {t("title1")}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{t("content1")}</p>
        </div>

        {/* Card 2: Custom Software Development */}
        <div className="bg-white dark:bg-dark-mode-bg shadow-md rounded-lg p-8 hover:shadow-[8px_8px_20px_-4px_rgba(20,50,1,0.2)] hover:shadow-brand transition-shadow duration-300 ease-in-out relative">
          <FaLaptopCode className="text-5xl text-brand mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            {t("title2")}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{t("content2")}</p>
        </div>

        {/* Card 3: Remote Teaming & Augmentation */}
        <div className="bg-white dark:bg-dark-mode-bg shadow-md rounded-lg p-8 hover:shadow-[8px_8px_20px_-4px_rgba(20,50,1,0.2)] hover:shadow-brand transition-shadow duration-300 ease-in-out relative">
          <FaUsers className="text-5xl text-brand mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            {t("title3")}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{t("content3")}</p>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
