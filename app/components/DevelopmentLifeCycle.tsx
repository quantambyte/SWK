import React from "react";
import {
  FaSearch,
  FaCheck,
  FaCogs,
  FaUpload,
  FaVial,
  FaTruck,
} from "react-icons/fa";
import { useTranslations } from "next-intl";

// Data object for development steps
const developmentSteps = [
  {
    number: 1,
    titleKey: "step1.title",
    contentKey: "step1.content",
    icon: <FaSearch className="text-3xl text-white" />,
  },
  {
    number: 2,
    titleKey: "step2.title",
    contentKey: "step2.content",
    icon: <FaCheck className="text-3xl text-white" />,
  },
  {
    number: 3,
    titleKey: "step3.title",
    contentKey: "step3.content",
    icon: <FaCogs className="text-3xl text-white" />,
  },
  {
    number: 4,
    titleKey: "step4.title",
    contentKey: "step4.content",
    icon: <FaVial className="text-3xl text-white" />,
  },
  {
    number: 5,
    titleKey: "step5.title",
    contentKey: "step5.content",
    icon: <FaUpload className="text-3xl text-white" />,
  },
  {
    number: 6,
    titleKey: "step6.title",
    contentKey: "step6.content",
    icon: <FaTruck className="text-3xl text-white" />,
  },
];

const DevelopmentCycle = () => {
  const t = useTranslations("DevelopmentCycle");

  return (
    <section className="bg-gradient-to-br from-white to-gray-100 dark:from-brandDark dark:to-gray-900 w-full mx-auto py-24 px-6 sm:px-10 md:px-20 lg:px-32 text-center font-poppins relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-transparent to-brand opacity-10 dark:opacity-20 rounded-full w-[600px] h-[600px] top-[-150px] right-[-150px] pointer-events-none"></div>

      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-16 relative z-10">
        {t("title")}
      </h2>

      <div className="grid gap-12 md:grid-cols-3 relative z-10">
        {developmentSteps.map((step) => (
          <div
            key={step.number}
            className="bg-white dark:bg-dark-mode-bg shadow-md rounded-xl p-10 transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg relative border-l-8 border-brand"
          >
            {/* Number Inside the Card with Border Effect */}
            <div className="absolute -top-3 -left-3 bg-white dark:bg-dark-mode-bg text-5xl font-extrabold text-brand opacity-90 px-3 py-1 shadow-md rounded-tr-lg">
              {step.number}
            </div>
            <div className="flex items-center justify-center bg-brand rounded-full w-16 h-16 mb-6 mx-auto">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              {t(step.titleKey)}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t(step.contentKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DevelopmentCycle;
