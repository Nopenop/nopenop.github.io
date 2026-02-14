import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
// import { MyButton } from './App.tsx'
// import { Profile, FirstComponent } from './first-component.tsx'
// import Gallery from './first-component.tsx'
import OldPortfolio from './old-portfolio.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OldPortfolio />
  </StrictMode>,
)
