'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import 'swiper/css';
import 'swiper/css/navigation';

const importantDays = [
  { src: '/images/womensday.jpg', alt: 'Womens Day', label: 'Womens Day', date: '8 March 2024' },
  { src: '/images/teachersday.jpg', alt: 'Teachers Day', label: 'Teachers Day', date: '05 Sept 2024' },
  { src: '/images/rakshabandhan.jpg', alt: 'Raksha Bandhan', label: 'Raksha Bandhan', date: '19 Aug 2024' },
  { src: '/images/mothersday1.jpg', alt: 'Mothers Day', label: 'Mothers Day', date: '12 May 2024' },
  { src: '/images/mothersday2.jpg', alt: 'Mothers Day', label: 'Mothers Day', date: '12 May 2024' },
  { src: '/images/internationaldayofhappiness.jpg', alt: 'International Day of Happiness', label: 'International Day of Happiness', date: '20 March 2024' },
  { src: '/images/internationalliteracyday.jpeg', alt: 'International Literacy Day', label: 'International Literacy Day', date: '8 Sept 2024' },
  { src: '/images/gurupaurnima.jpeg', alt: 'Guru Paurnima', label: 'Guru Paurnima', date: '21 July 2024' },
  { src: '/images/indianarmyday.jpg', alt: 'Indian Army Day', label: 'Indian Army Day', date: '15 Jan 2024' },
  { src: '/images/mahashivratri.jpg', alt: 'Mahashivratri', label: 'Mahashivratri', date: '8 March 2024' },
  { src: '/images/Dussehra.jpg', alt: 'Dussehra', label: 'Dussehra', date: '12 Oct 2024' },
];

export default function ImportantDays() {
  return (
    <section className="relative py-20 bg-white px-4 md:px-10">
      <h2 className="text-orange-400 text-lg font-bold uppercase tracking-wide mb-2 px-4 md:px-10 md:text-3xl">
        Important Days _________
      </h2>
      <h1 className="text-3xl md:text-6xl font-extrabold mb-8 text-black px-4 md:px-10">
        Important Days Posts
      </h1>

      {/* Arrow Buttons */}
      <div className="flex justify-between items-center mb-6 px-4 md:px-10">
        <div className="swiper-button-prev-custom bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full cursor-pointer shadow-lg transition transform hover:scale-110">
          <ArrowLeftIcon className="h-6 w-6" />
        </div>
        <div className="swiper-button-next-custom bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full cursor-pointer shadow-lg transition transform hover:scale-110">
          <ArrowRightIcon className="h-6 w-6" />
        </div>
      </div>

      <div className="px-4 md:px-10">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {importantDays.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group rounded-xl overflow-hidden shadow-md bg-[#f7f9fc] h-full flex flex-col justify-between transition-all duration-300 hover:shadow-xl">
               
                <div className="overflow-hidden">
  <img
    src={item.src}
    alt={item.alt}
    className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-110"
  />
</div>

                <div className="bg-white py-10 px-4 text-left">
                  <p className="text-2xl font-semibold text-gray-800 group-hover:text-[#722f37] transition-colors duration-300">
                    {item.label}
                  </p>
                   <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
