import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Usercontext from './UserContext/Usercontext.jsx'
import InfoContext from './UserContext/InfoContext.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<InfoContext>
  <Usercontext>
  <StrictMode>
    <App />
  </StrictMode>,
  </Usercontext>
  </InfoContext>
  </BrowserRouter>
)
