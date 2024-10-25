'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { useState, ReactElement } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { TESTIMONIALS } from '@/config';

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

interface Testimonial {
  id: number;
  name: string;
  occupation: string;
  image: string;
  content: string;
  stars: number;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className='absolute right-[-25px] bg-white rounded-md shadow-lg z-10 top-1/2 -translate-y-1/2 text-3xl text-brand w-[40px] h-[40px] grid place-items-center'
    onClick={onClick}
  >
    <IoIosArrowForward />
  </button>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className='absolute left-[-25px] bg-white rounded-md shadow-lg z-10 top-1/2 -translate-y-1/2 text-3xl text-brand w-[40px] h-[40px] grid place-items-center'
    onClick={onClick}
  >
    <IoIosArrowBack />
  </button>
);

export default function TestimonialCarousel(): ReactElement {
  const [slider, setSlider] = useState<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='relative mt-10 slider-container'>
      <Slider ref={(c) => setSlider(c)} {...settings}>
        {TESTIMONIALS.map((testimonial: Testimonial) => (
          <div
            key={testimonial.id.toString()}
            className='min-w-full md:min-w-[50%] flex-none border dark:border-white border-[#111827] border-opacity-15 py-5 rounded-lg'
          >
            <div className='p-4 bg-white dark:bg-transparent rounded-lg m-2'>
              <div className='flex items-center space-x-4'>
                {/* <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className='rounded-md border object-cover'
                /> */}
                <div>
                  <h5 className='text-[16px] font-semibold text-heading-light dark:text-heading-dark'>
                    {testimonial.name}
                  </h5>
                  <p className='text-[10px] md:text-[13px] text-light dark:text-dark text-opacity-70'>
                    {testimonial.occupation}
                  </p>
                </div>
              </div>
              <div className='mt-5 md:mt-10'>
                <p className='text-sm md:text-[14px] text-heading-light dark:text-heading-dark h-20'>
                  {testimonial.content}
                </p>
                {/* <p className='text-sm md:text-[14px] text-light dark:text-dark mt-2 h-10'>
                  {testimonial.content}
                </p> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
