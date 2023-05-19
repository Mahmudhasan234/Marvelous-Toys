import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "../Home/style.css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
const SlidingGallery = () => {
    return (
        <div>
            <div>
                <h1 className='text-4xl font-bold text-center my-10'>Our Exclusive Toy Gallery</h1>
            </div>
       <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/collection-traditional-toy-soldiers_93675-130153.jpg?w=826&t=st=1684533485~exp=1684534085~hmac=830ca8141a6fa8ffa3d3b3d462541032fffc91b45e198a43e0cf84e9b0fa7c94" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-vector/cartoon-combat-robots-battle-androids-with-artificial-intelligence-protective-armor_1441-2672.jpg?w=740&t=st=1684533574~exp=1684534174~hmac=e239f8656583b71dd6c8db3af744a72ce1b880921844961927f593f6d14938f9" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Zh8jVyg/black-panther.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/qsmrK7r/ironman.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/C0tZLkd/captain-america.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/DWBzRsN/618-Kz-GTNP-L-SX425.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/BBzWD1r/superman.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/YQmLtRX/batman.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Rv9KSLM/thor.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/3h4c4Rq/dr-Strange.jpg" />
        </SwiperSlide>
       
      </Swiper>
    </>
        </div>
    );
};

export default SlidingGallery;