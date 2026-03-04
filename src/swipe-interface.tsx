import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import BasicCard from './card.tsx';
import Button from '@mui/material/Button'
import { useState } from 'react';

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


function SwiperCard({ value, setNumber }: { value: number, setNumber: (a: number) => void }) {
  return (
    <Swiper
      slidesPerView={1}
      onSlideChange={() => {
        setNumber(value + 1)
      }}
      onSlidePrevTransitionStart={(swiper) => {
        swiper.slideNext(0)
        swiper.slideNext(0)
      }}
      // onSlideNextTransitionEnd={(swiper) => {
      //   swiper.slideNext(0)
      // }}
      initialSlide={1}
    >
      <SwiperSlide></SwiperSlide>
      <SwiperSlide><BasicCard input={{ value: 1 }} /></SwiperSlide>
      <SwiperSlide><BasicCard input={{ value: 2 }} /></SwiperSlide>
      <SwiperSlide><BasicCard input={{ value: 3 }} /></SwiperSlide>
      <SlidePrevButton />
      <SlideNextButton />
    </Swiper >
  );
}

export default function SwipeInterface({ input }: { input: number }) {
  const [value, setValue] = useState(input)

  return (
    <SwiperCard value={value} setNumber={setValue} />
  );
}


