import React from "react";
import { FaTools, FaCode, FaHandshake } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useTranslations } from "next-intl";

const BusinessModel: React.FC = () => {
  const t = useTranslations("OurBusinessModel");

  const fixedPricePoints: string[] = [
    "Project Discovery",
    "Proposal & Timelines",
    "Contract Agreement",
    "Development Phase",
    "Testing & Quality Assurance",
    "Delivery & Acceptance",
    "Post Launch Support",
  ];

  const dedicatedTeamPoints: string[] = [
    "Needs Assessment",
    "Team Selection",
    "Proposal & Timelines",
    "Contract and Agreement",
    "Integration with Client",
    "Ongoing Development",
    "Flexible Scaling",
    "Client Control",
  ];

  const revenueSharingPoints: string[] = [
    "Joint Venture Agreement",
    "Project Conceptualization",
    "Legal Compliance",
    "Resource Allocation",
    "Collaborative Development",
    "Testing and Quality Assurance",
    "Launch and Market Entry",
    "Revenue Generation & Distribution",
    "Continuous Monitoring and Optimization",
    "Adaptation and Scaling",
    "Exit Strategy",
  ];

  const renderList = (points: string[]): JSX.Element => (
    <ul className="text-left text-gray-600 dark:text-gray-300 space-y-2">
      {points.map((point, index) => (
        <li key={index} className="flex items-start">
          <AiOutlineCheckCircle className="text-brand mr-2 mt-1 text-lg" />{" "}
          {point}
        </li>
      ))}
    </ul>
  );

  return (
    <section className="dark:bg-brandDark w-full mx-auto py-20 px-4 sm:px-10 md:px-20 lg:px-32 text-center font-poppins">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-16">
        {t("OurBusinessModel")}
      </h2>

      <div className="grid gap-12 md:grid-cols-3">
        {/* Card 1: Fixed Price */}
        <div className="bg-white dark:bg-dark-mode-bg hover:shadow-[8px_8px_20px_-4px_rgba(20,50,1,0.2)] hover:shadow-brand shadow-md rounded-lg p-8 transition-shadow duration-300 ease-in-out relative">
          <FaTools className="text-5xl text-brand mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 break-words">
            {t("FixedPrice")}
          </h3>
          {renderList(fixedPricePoints)}
        </div>

        {/* Card 2: Dedicated Development Team */}
        <div className="bg-white dark:bg-dark-mode-bg shadow-md rounded-lg p-8 hover:shadow-[8px_8px_20px_-4px_rgba(20,50,1,0.2)] hover:shadow-brand transition-shadow duration-300 ease-in-out relative">
          <FaCode className="text-5xl text-brand mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            {t("DedicatedDevelopmentTeam")}
          </h3>
          {renderList(dedicatedTeamPoints)}
        </div>

        {/* Card 3: Revenue Sharing */}
        <div className="bg-white dark:bg-dark-mode-bg shadow-md rounded-lg p-8 hover:shadow-[8px_8px_20px_-4px_rgba(20,50,1,0.2)] hover:shadow-brand transition-shadow duration-300 ease-in-out relative">
          <FaHandshake className="text-5xl text-brand mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            {t("RevenueSharing")}
          </h3>
          {renderList(revenueSharingPoints)}
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
