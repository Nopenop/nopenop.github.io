import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MyButton } from './App.tsx'
import Profile from './first-component.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Profile />
  </StrictMode>,
)
