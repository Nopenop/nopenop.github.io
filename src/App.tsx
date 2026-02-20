// import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import BasicCard from './card.tsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import 'swiper/swiper.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

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

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container maxWidth="sm">
        <CssBaseline />
        <Swiper
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          initialSlide={1}
        >
          <SwiperSlide><BasicCard /> </SwiperSlide>
          <SwiperSlide><BasicCard /></SwiperSlide>
          <SwiperSlide><BasicCard /></SwiperSlide>
          <SlidePrevButton />
          <SlideNextButton />
        </Swiper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
