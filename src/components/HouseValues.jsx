'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const values = [
  {
    title: 'CREATORS',
    subtitle: 'We Nurture Creativity',
    img: '/images/creators1.png',
  },
  {
    title: 'PIONEERS',
    subtitle: 'We Pave the Way',
    img: '/images/pioneers1.png',
  },
  {
    title: 'EXPLORERS',
    subtitle: 'We Exceed Limits',
    img: '/images/explorers1.png',
  },
  {
    title: 'INNOVATORS',
    subtitle: 'We Embrace Change',
    img: '/images/innovators1.png',
  },
   {
    title: 'CREATORS',
    subtitle: 'We Nurture Creativity',
    img: '/images/creators1.png',
  },
  {
    title: 'PIONEERS',
    subtitle: 'We Pave the Way',
    img: '/images/pioneers1.png',
  },
  {
    title: 'EXPLORERS',
    subtitle: 'We Exceed Limits',
    img: '/images/explorers1.png',
  },
  {
    title: 'INNOVATORS',
    subtitle: 'We Embrace Change',
    img: '/images/innovators1.png',
  },
];

export default function HouseValues() {
  return (
    <section className="bg-white py-10 px-4 md:px-20">
      <h2 className="text-orange-400 text-lg font-bold uppercase tracking-wide mb-2 text-left md:text-3xl">
        Scholar Houses _________
      </h2>
      <h1 className="text-3xl md:text-6xl font-extrabold mb-12 text-black text-left">
        Our Scholar House System
      </h1>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
      >
        {values.map((item, index) => (
          <SwiperSlide key={index}>
           <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
  <div className="bg-[#791728] flex items-center justify-center p-6">
    <Image
      src={item.img}
      alt={item.title}
      width={300}
      height={300}
      className="object-contain w-full h-auto"
    />
  </div>
  <div className="bg-orange-500 group-hover:bg-[#EA4C56] py-6 text-center transition-colors duration-300">
    <h3 className="text-xl font-bold text-black group-hover:text-white transition">
      {item.title}
    </h3>
    <p className="text-sm text-white mt-2">{item.subtitle}</p>
  </div>
</div>

          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
