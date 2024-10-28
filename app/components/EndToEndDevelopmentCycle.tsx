import React from "react";
import { FaCog } from "react-icons/fa";
import { useTranslations } from "next-intl";

// Data object for lifecycle steps with Roman numerals
const lifecycleSteps = [
  {
    number: "I",
    titleKey: "step1.title",
    contentKey: "step1.content",
    icon: <FaCog />, // Larger icon size
  },
  {
    number: "II",
    titleKey: "step2.title",
    contentKey: "step2.content",
    icon: <FaCog />, // Larger icon size
  },
  {
    number: "III",
    titleKey: "step3.title",
    contentKey: "step3.content",
    icon: <FaCog />, // Larger icon size
  },
  {
    number: "IV",
    titleKey: "step4.title",
    contentKey: "step4.content",
    icon: <FaCog />, // Larger icon size
  },
  {
    number: "V",
    titleKey: "step5.title",
    contentKey: "step5.content",
    icon: <FaCog />, // Larger icon size
  },
  {
    number: "VI",
    titleKey: "step6.title",
    contentKey: "step6.content",
    icon: <FaCog />, // Larger icon size
  },
  {
    number: "VII",
    titleKey: "step7.title",
    contentKey: "step7.content",
    icon: <FaCog />, // Larger icon size
  },
];

const LifecycleModel = () => {
  const t = useTranslations("EndToEndDevelopmentCycle");

  return (
    <section className=" from-gray-50 to-gray-200  w-full mx-auto py-16 px-6 sm:px-8 md:px-16 lg:px-24 font-poppins relative">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
        {t("title")}
      </h2>

      {/* Step-by-Step Container with Lifecycle Flow */}
      <div className="relative flex flex-col md:flex-row items-center justify-center md:space-x-10 space-y-10 md:space-y-14">
        {lifecycleSteps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col  even:md:flex-col-reverse  items-center text-center relative`}
          >
            {/* Connector Line */}
            {index !== 0 && (
              <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 w-16 md:w-32 h-0.5 border-dotted border-gray-400 dark:border-gray-500 md:flex hidden"></div>
            )}

            {/* Icon with Centered Roman Numeral */}
            <div className="relative flex items-center justify-center">
              {/* Icon */}
              <div className="text-8xl text-brand relative">
                {step.icon}
                {/* Step Number Centered in Icon */}

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand h-12 w-12 rounded-full shadow-2xl shadow-black" />

                <span className="absolute inset-0 flex items-center justify-center text-xl font-light text-black dark:text-white">
                  {step.number}
                </span>
              </div>
            </div>

            {/* Step Content */}
            <div className="mt-6 max-w-52">
              <h3 className="text-lg font-semibold text-brand mb-2">
                {t(step.titleKey)}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line">
                {t(step.contentKey)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Connector Lines for Mobile */}
      <div className="flex md:hidden justify-between items-center mt-8 space-x-3">
        {lifecycleSteps.map((_, index) => (
          <React.Fragment key={index}>
            {index !== lifecycleSteps.length - 1 && (
              <div className="flex-1 h-0.5 border-dotted border-gray-400 dark:border-gray-500"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default LifecycleModel;
