import { Swiper, SwiperSlide } from 'swiper/react';
import ActionAreaCard from './card.tsx'

import "swiper/css";

export default function SwiperInstance() {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><ActionAreaCard /></SwiperSlide>
      <SwiperSlide><ActionAreaCard /></SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  )
}
