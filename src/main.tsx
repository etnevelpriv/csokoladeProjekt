import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Fejlec, Lablec } from './components/App/App.tsx'
import { ChocolateCard } from './components/ChocolateCard/ChocolateCard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Fejlec></Fejlec>
    <ChocolateCard name='Csoki Neve' brand='Milka' isDark={true} cocoaPercentage={90} ingredients={["kakaobab", "tejpor", "cukor", "valami mas osszetevo"]}></ChocolateCard>
    <Lablec></Lablec>
  </StrictMode>,
)
