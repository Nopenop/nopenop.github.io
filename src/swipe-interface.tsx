import { Swiper, SwiperSlide, useSwiper, type SwiperClass } from 'swiper/react';
import BasicCard from './card.tsx';
import Button from '@mui/material/Button'
import * as React from 'react';
import { useState } from 'react';
import { Pagination, Navigation } from 'swiper/modules';

function SlideNextButton() {
  const swiper = useSwiper();
  return (
    <Button variant='contained' onClick={() => swiper.slideNext()}>Slide to the next slide</Button>
  );
}

function SlidePrevButton() {
  const swiper = useSwiper();
  return (
    <Button variant='contained' onClick={() => swiper.slidePrev()}>Slide to the prev slide</Button>
  );
}

interface SwiperInterfaceState {
  input: number
}

function SwiperCard(value: number, setNumber: (a: SwiperInterfaceState) => void) {
  return (
    <Swiper
      slidesPerView={1}
      onSlideChange={(swiper) => {
        setNumber({ input: swiper.activeIndex })
        console.log(swiper.swipeDirection)
      }}
      initialSlide={1}
      loop={true}
    >
      <SwiperSlide></SwiperSlide>
      <SwiperSlide><BasicCard input={{ value: value }} /></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SlidePrevButton />
      <SlideNextButton />
    </Swiper >
  );
}

export default function SwipeInterface(input: SwiperInterfaceState) {
  const [number, setNumber] = useState(input)

  if (number.input == 0) {
    return (
      SwiperCard(0, setNumber)
    );
  } else if (number.input == 1) {
    return (
      SwiperCard(1, setNumber)
    );
  } else {
    return (
      SwiperCard(2, setNumber)
    );
  }
}


