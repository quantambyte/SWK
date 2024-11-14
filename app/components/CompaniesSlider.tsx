import Image from "next/image";
import React from "react";
import {
  FaApple,
  FaGoogle,
  FaMicrosoft,
  FaAmazon,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaSlack,
  FaGithub,
} from "react-icons/fa";

// const companies = [
//   { icon: <FaApple />, name: "Apple" },
//   { icon: <FaGoogle />, name: "Google" },
//   { icon: <FaMicrosoft />, name: "Microsoft" },
//   { icon: <FaAmazon />, name: "Amazon" },
//   { icon: <FaFacebook />, name: "Facebook" },
//   { icon: <FaTwitter />, name: "Twitter" },
//   { icon: <FaLinkedin />, name: "LinkedIn" },
//   { icon: <FaInstagram />, name: "Instagram" },
//   { icon: <FaSlack />, name: "Slack" },
//   { icon: <FaGithub />, name: "GitHub" },
// ];
const companies = [
  {
    name: "Trello",
    src: "https://www.vectorlogo.zone/logos/trello/trello-ar21.svg",
  },
  {
    name: "HubSpot",
    src: "https://www.vectorlogo.zone/logos/hubspot/hubspot-ar21.svg",
  },
  {
    name: "Bitbucket",
    src: "https://www.vectorlogo.zone/logos/bitbucket/bitbucket-ar21.svg",
  },
  {
    name: "DigitalOcean",
    src: "https://www.vectorlogo.zone/logos/digitalocean/digitalocean-ar21.svg",
  },
  {
    name: "Airtable",
    src: "https://www.vectorlogo.zone/logos/airtable/airtable-ar21.svg",
  },
  {
    name: "Zapier",
    src: "https://www.vectorlogo.zone/logos/zapier/zapier-ar21.svg",
  },
  {
    name: "Jira",
    src: "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-ar21.svg",
  },
  {
    name: "Ghost",
    src: "https://www.vectorlogo.zone/logos/ghost/ghost-ar21.svg",
  },
];

const CompaniesLogoSlider: React.FC = () => {
  return (
    <section className="bg-[#eadeff] py-16 px-4 sm:px-10 md:px-20 lg:px-32 font-poppins overflow-hidden">
      <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
        Trusted by Some of the World's Best Teams
      </h2>
      <div className="relative overflow-hidden">
        <div className="container">
          {companies.concat(companies).map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-32 text-4xl flex items-center justify-center"
            >
              <Image
                width={100}
                height={100}
                src={company.src}
                alt={company.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesLogoSlider;
