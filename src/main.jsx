import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ParallaxProvider } from 'react-scroll-parallax'
import App from './App'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const rootElement = document.getElementById('root')
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement)
  root.render(
    <StrictMode>
      <ParallaxProvider>
        <App />
        <ToastContainer />
      </ParallaxProvider>
    </StrictMode>
  )
}
