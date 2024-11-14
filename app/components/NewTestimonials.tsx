"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    occupation: "Chief Operating Officer",
    company: "Databox",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/1/1f/Databox_logo.svg", // Real logo from Wikimedia Commons
    testimonial:
      "Databox's collaboration with their development team has helped us improve operational efficiency significantly.",
    imageSrc: "https://randomuser.me/api/portraits/women/44.jpg", // Random image for illustration
    rating: 5,
    tags: ["Data Analytics", "Efficiency"],
    mockupImage: "https://via.placeholder.com/200x150?text=Databox+Dashboard", // Replace with specific mockup if available
  },
  {
    id: 2,
    name: "John Smith",
    occupation: "Product Manager",
    company: "Elastic",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Elastic_logo.svg", // Real logo from Wikimedia Commons
    testimonial:
      "Their expertise in search sdsad asd asd asd asda sdsa da sd asd asd asd  technologies and data visualization made a transformative impact on our solutions.",
    imageSrc: "https://randomuser.me/api/portraits/men/25.jpg", // Random image for illustration
    rating: 4,
    tags: ["Technology", "Visualization"],
    mockupImage: "https://via.placeholder.com/200x150?text=Elastic+Search", // Replace with specific mockup if available
  },
  {
    id: 3,
    name: "Anna Lee",
    occupation: "Lead Developer",
    company: "Kaltura",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/8/8f/Kaltura_logo.svg", // Real logo from Wikimedia Commons
    testimonial:
      "The integration and seamless user experience we achieved together were outstanding.",
    imageSrc: "https://randomuser.me/api/portraits/women/60.jpg", // Random image for illustration
    rating: 5,
    tags: ["Media Platform", "User Experience"],
    mockupImage: "https://via.placeholder.com/200x150?text=Kaltura+Platform", // Replace with specific mockup if available
  },
  {
    id: 4,
    name: "Peter Brown",
    occupation: "CEO",
    company: "Algolia",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/Algolia_logo.svg", // Real logo from Wikimedia Commons
    testimonial:
      "Our product's search capabilities have improved dramatically thanks to their innovative solutions.",
    imageSrc: "https://randomuser.me/api/portraits/men/45.jpg", // Random image for illustration
    rating: 4,
    tags: ["Search Optimization", "Innovation"],
    mockupImage: "https://via.placeholder.com/200x150?text=Algolia+Search", // Replace with specific mockup if available
  },
  {
    id: 5,
    name: "Sophia Turner",
    occupation: "Software Engineer",
    company: "Snyk",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/Snyk_logo.svg", // Real logo from Wikimedia Commons
    testimonial:
      "Their commitment to secure software development practices transformed the way we approach security.",
    imageSrc: "https://randomuser.me/api/portraits/women/35.jpg", // Random image for illustration
    rating: 5,
    tags: ["Security", "Development"],
    mockupImage: "https://via.placeholder.com/200x150?text=Snyk+Security", // Replace with specific mockup if available
  },
];

export default function AdvancedTestimonialCarousel() {
  return (
    <section className="py-16 px-4 sm:px-10 md:px-20 lg:px-32 mx-auto font-poppins">
      <Carousel
        responsive={{
          superLargeDesktop: { breakpoint: { max: 4000, min: 0 }, items: 1 },
        }}
        infinite
        autoPlay
        autoPlaySpeed={5000}
        showDots
        arrows={false}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col bg-white md:flex-row rounded-xl  p-6 items-center md:items-start gap-6"
          >
            <div className="flex-shrink-0">
              <div className="bg-gray-100 rounded-lg p-4">
                <Image
                  src={testimonial.mockupImage}
                  alt="Mockup"
                  width={200}
                  height={150}
                  className="object-contain"
                />
              </div>
              <div className="flex justify-center gap-2 mt-4">
                {testimonial.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex mb-3 justify-between items-center ">
                <FaQuoteLeft className="text-brand text-5xl" />
                <div className="ml-auto">
                  <Image
                    src={testimonial.companyLogo}
                    alt={testimonial.company}
                    width={100}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-700 mb-4">{testimonial.testimonial}</p>
              <div className="flex items-center mt-4">
                <Image
                  src={testimonial.imageSrc}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-bold text-middleBlue">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500">{testimonial.occupation}</p>
                  <div className="flex text-yellow-500 mt-2">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
