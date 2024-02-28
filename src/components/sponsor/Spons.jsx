import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";

//SPOSNOR LOGOLARI



import "./Sponsor.css";

import "swiper/css/autoplay";




export default function App() {
  return (
    <>
     
       <div className="Sponsor">
          <div className="SponsorContainer">
            <Swiper
              slidesPerView={6}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                // When window width is <= 768px
                1300: {
                  slidesPerView: 4,
                  spaceBetween: 15,

                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 15,

                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 5,

                },
                557: {
                  slidesPerView: 2,
                  spaceBetween: 2
                  ,
                },
                490: {
                  slidesPerView: 1,
                  spaceBetween: 5,
                },
                1:{
                  slidesPerView: 1,
                  spaceBetween: 5,
                }

              }
              }
              modules={[Autoplay]}
              className="FooterSponsor"
            >
              <SwiperSlide><img src="https://res.cloudinary.com/dzhozzyba/image/upload/v1709141074/Changan-Logo-2010_r2mwkh.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/dzhozzyba/image/upload/v1709141073/Great-Wall-logo_wux1h3.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/dzhozzyba/image/upload/v1709141072/Haval-Logo_keqayu.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/dzhozzyba/image/upload/v1709141073/Dongfeng-logo_b3xn5m.png" alt="" /></SwiperSlide>
       
       


        <SwiperSlide><img src="https://res.cloudinary.com/dzhozzyba/image/upload/v1709141074/Changan-Logo-2010_r2mwkh.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/dzhozzyba/image/upload/v1709141073/Great-Wall-logo_wux1h3.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/dzhozzyba/image/upload/v1709141072/Haval-Logo_keqayu.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/dzhozzyba/image/upload/v1709141073/Dongfeng-logo_b3xn5m.png" alt="" /></SwiperSlide>
       
      
            
            </Swiper>
          </div>

        </div>
    </>
  );
}
