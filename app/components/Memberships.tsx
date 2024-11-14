import React from "react";
import Image from "next/image";

import pashaLogo from "/app/assets/pasha-logo.png";
import psebLogo from "app/assets/pseb-logo.avif";

const memberships = [
  {
    imageSrc: pashaLogo, // Replace with actual path to P@SHA logo
    imageAlt: "P@SHA Logo",
    description:
      "SWK has been a member of Pakistan Software Houses Association, P@SHA members have access to a digital data backbone of premium research and analysis on the latest trends and developments in the IT industry.",
  },
  {
    imageSrc: psebLogo, // Replace with actual path to PSEB logo
    imageAlt: "PSEB Logo",
    description:
      "SWK has been a member of Pakistan Software Export Board (PSEB) who invites Pakistani origin technologists, entrepreneurs, experts and leaders in information technology to join hands with PSEB to promote innovation in IT.",
  },
];

const MembershipSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-10 md:px-20 lg:px-32 font-poppins">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 text-center mb-4">
        Our Crowning <span className="text-brand">Membership</span>
      </h2>
      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
        As a software company, we are partnered with some of the most
        prestigious organizations. Our passion for providing turn-key IT
        Solutions to a plethora of sectors has been recognized by notable bodies
        such as P@SHA, and PSEB.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {memberships.map((membership, index) => (
          <div
            key={index}
            className=" p-6 bg-white rounded-lg border border-gray-200 flex items-center flex-col gap-4 md:flex-row justify-center"
          >
            <div className="mr-4">
              <Image
                src={membership.imageSrc}
                alt={membership.imageAlt}
                width={80}
                height={120}
                className="object-contain h-16 w-36 md:w-72 "
              />
            </div>
            <p className="text-gray-700">{membership.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MembershipSection;
