import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MyButton } from './App.tsx'
import { Profile, FirstComponent } from './first-component.tsx'
import Gallery from './first-component.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Gallery />
  </StrictMode>,
)
