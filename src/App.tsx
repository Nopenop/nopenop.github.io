import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// import SwiperInterface from './swipe-interface';
import SwiperInterface from '../claude_stuff/swipe-interface.tsx'

import 'swiper/swiper.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SwiperInterface />
    </ThemeProvider>
  );
}
