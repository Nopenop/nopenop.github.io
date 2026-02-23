// import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SwiperInterface from './swipe-interface';

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

import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

function VirtualInterface() {
  // Create array with 1000 slides
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
    <Swiper modules={[Virtual]} spaceBetween={50} slidesPerView={3} virtual>
      {slides.map((slideContent, index) => (
        <SwiperSlide key={slideContent} virtualIndex={index}>
          {slideContent}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}


export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container maxWidth="sm">
        <CssBaseline />
        <SwiperInterface input={1} />
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
