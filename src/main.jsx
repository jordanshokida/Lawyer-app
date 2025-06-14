import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
<<<<<<< HEAD
import App from "../app/App.jsx";
=======
import App from './app/App.jsx'
>>>>>>> e633b816c28414d31cf07575e351d2261c67c392

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
