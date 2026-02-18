import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './styles.css'
import './index.css'
// import { MyButton } from './App.tsx'
// import { Profile, FirstComponent } from './first-component.tsx'
// import Gallery from './first-component.tsx'
import OldPortfolio from './old-portfolio.tsx'
import Card from './card.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Card title="First Card" description="This is my description" />
    {/* <OldPortfolio /> */}
  </StrictMode>,
)
