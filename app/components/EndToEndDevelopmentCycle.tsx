import React from "react";
import { FaCog } from "react-icons/fa";
import { useTranslations } from "next-intl";
import Image from "next/image";

import arrow from "@/assets/arrows.svg";

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
    <section className="bg-gray-100  w-full mx-auto py-16 px-6 sm:px-8 md:px-16 lg:px-24 font-poppins relative">
      <h2 className="mt-4 md:mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
        {t("title")}
      </h2>

      {/* Step-by-Step Container with Lifecycle Flow -------- for mobile */}
      <div className="relative flex flex-col md:hidden items-center justify-center md:space-x-10 gap-8 md:py-12">
        {lifecycleSteps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col even:md:flex-col-reverse md:gap-4 gap-6  items-center text-center relative `}
          >
            {/* Connector Line */}
            {/* {index !== 0 && (
              <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 w-16 md:w-32 h-0.5 border-dotted border-gray-400 dark:border-gray-500 md:flex hidden"></div>
            )} */}

            {/* Icon with Centered Roman Numeral */}
            <div className="relative flex items-center justify-center ">
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
            <div className=" max-w-52">
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

      <div className="relative md:flex hidden  items-center justify-center md:space-x-10 lg:gap-28 md:gap-16">
        {lifecycleSteps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col md:h-[550px] lg:h-[470px] md:gap-4 gap-6 items-center text-center relative`}
            style={{ margin: "20px" }} // Adjust margin as needed
          >
            <div className="absolute md:top-56 lg:top-40 lg:h-26 lg:w-30">
              <Image
                className={` ${
                  index % 2 === 0
                    ? "absolute md:-top-7 lg:-top-10"
                    : "absolute md:-bottom-7 lg:-bottom-10 scale-y-[-1]"
                } ${index === 6 ? "hidden" : ""} `}
                src={arrow}
                alt={step.titleKey}
                width={100}
                height={10}
              />
              <div className="flex items-center justify-center">
                <div className="lg:text-8xl md:text-6xl text-brand relative">
                  {step.icon}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand lg:h-12 lg:w-12 md:h-9 md:w-9 rounded-full shadow-2xl shadow-black" />
                  <span className="absolute inset-0 flex items-center justify-center text-xl font-light text-black dark:text-white">
                    {step.number}
                  </span>
                </div>
              </div>
            </div>
            <div
              className={`absolute md:w-32 lg:w-52 lg:h-44  ${
                index % 2 === 0 ? "lg:bottom-0 md:bottom-0" : "top-0"
              }`}
              style={{ marginTop: "10px" }} // Adjust margin-top as needed
            >
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
      {/* <div className="flex md:hidden justify-between items-center mt-8 space-x-3">
        {lifecycleSteps.map((_, index) => (
          <React.Fragment key={index}>
            {index !== lifecycleSteps.length - 1 && (
              <div className="flex-1 h-0.5 border-dotted border-gray-400 dark:border-gray-500" />
            )}
          </React.Fragment>
        ))}
      </div> */}
    </section>
  );
};

export default LifecycleModel;
