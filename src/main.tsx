import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import StarshipsList from './components/List.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <StarshipsList></StarshipsList>
  </StrictMode>,
)
