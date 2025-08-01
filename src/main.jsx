import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Summary from './pages/Summary'
import App from './App'
import PreviousTable from './pages/PreviousTable'

createRoot(document.getElementById('Summary')).render(
  <StrictMode>
    <Summary />
  </StrictMode>,
)

createRoot(document.getElementById('LatestTable')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

createRoot(document.getElementById('PreviousTable')).render(
  <StrictMode>
    <PreviousTable />
  </StrictMode>,
)