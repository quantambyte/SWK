import React from "react";
// import ceo from "../assets/people/ceo.jpeg";
// import coo from "../assets/people/coo.jpeg";
// import cto from "../assets/people/coo.jpeg";
// import advisoryBoard from "../assets/people/advisory board.jpeg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Content } from "next/font/google";

import ceo from "../assets/people/qazi sahab.png";
import cto from "../assets/people/kafe sahab.png";
import coo from "../assets/people/shahbaz khan.png";
import cbdo from "../assets/people/zaeem zafar.png";

const People = () => {
  const t = useTranslations("People");

  const people = [
    {
      name: "Dr. Wajahat Qazi",
      title: t("ceo"),
      image: ceo.src,
      content:
        "PhD in Computer Sciences with 25+ years experience in technology development and education. Member IEEE, IACSIT Singapore, ACM USA, Science Society PAK, Institute of olecular Science & Bioinfomatrics.",
    },
    {
      name: "Muhammad Kahfulwara",
      title: t("cto"),
      image: cto.src,
      content:
        "20+ years experience in software solutions, ERPs and IT human resource management. Certified and experienced in implementing CMMi standards for software development and large projects as well as large data management.",
    },
    {
      name: "Shahbaz Khan",
      title: t("coo"),
      image: coo.src,
      content:
        "20+ years experience in embedded software engineering having delivered large global projects for multinationals and govenments in Germany, Poland, UAE and Pakistan.",
    },
    {
      name: "Zaeem Zafar",
      title: t("cbdo"),
      image: cbdo.src,
      content:
        "15+ years experience of international business devlopment and global partnerships.",
    },
  ];

  return (
    <div className="px-8">
      <section className=" dark:text-white font-poppins dark:bg-[#271739]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              {t("title")}
            </h2>
            {/* <p className="dark:text-white font-light text-gray-600 sm:text-xl">
              {t("content")}
            </p> */}
          </div>
          <div className="grid gap-12 lg:gap-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {people.map((person) => (
              <div
                key={person.name}
                className="text-center text-gray-500 dark:text-white flex flex-col items-center"
              >
                <div className="hexagon-container">
                  <div className="hexagon dark:bg-[#271739] p-0">
                    <Image
                      src={person.image}
                      alt={person.name}
                      layout="fill"
                      objectFit="cover"
                      className=" border-[12px] border-purple-300"
                    />
                  </div>
                </div>
                {/* <img
                  src={person.image}
                  alt={person.name}
                  className="rounded-lg border-4 border-purple-300 hexagon"
                /> */}
                {/* <img
                  className="mx-auto mb-4 object-cover lg:w-[15rem] lg:h-[15rem] md:w-[10rem] md:h-[10rem] w-[10rem] h-[10rem] rounded-full"
                  src={person.image}
                  alt={person.name}
                /> */}
                <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">{person.name}</a>
                </h3>
                <p className="dark:text-white text-gray-600">{person.title}</p>

                <p className="dark:text-white mt-4 text-gray-600 text-[13px] text-center">
                  {person.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default People;
