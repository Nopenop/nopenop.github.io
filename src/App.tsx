// import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Slider from '@mui/material/Slider';
import PopoverMenu from './PopoverMenu';
import Button from '@mui/material/Button'
import { Swiper, SwiperSlide } from 'swiper/react';
import BasicCard from './card.tsx';

import 'swiper/swiper.css';

function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Button variant='contained'>Hello world</Button>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        initialSlide={1}
      >
        <SwiperSlide><BasicCard /> </SwiperSlide>
        <SwiperSlide><BasicCard /></SwiperSlide>
        <SwiperSlide><BasicCard /></SwiperSlide>
      </Swiper>
      <div className="my-4">
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI Vite example with Tailwind CSS in TypeScript
        </Typography>
        <Slider
          className="my-4"
          defaultValue={30}
          classes={{ active: 'shadow-none' }}
          slotProps={{ thumb: { className: 'hover:shadow-none' } }}
        />
        <PopoverMenu />
        <Copyright />
      </div>
    </Container>
  );
}
