import { Swiper, SwiperSlide, useSwiper, type SwiperClass } from 'swiper/react';
import BasicCard from './card.tsx';
import Button from '@mui/material/Button'

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

function handleSwipe(swiper: SwiperClass): void {
  console.log(swiper.activeIndex)
}

export default function SwiperInterface() {
  return (
    <Swiper
      slidesPerView={1}
      onSlideChange={handleSwipe}
      initialSlide={1}
    // onSliderMove={(swiper, event) => { console.log(swiper, event) }}
    >
      <SwiperSlide> </SwiperSlide>
      <SwiperSlide><BasicCard /></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SlidePrevButton />
      <SlideNextButton />
    </Swiper >

  );

}
