import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import CRMDashboard from './pages/CRMDashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/crm" element={<Navigate to="/en/crm" replace />} />
        <Route path="/:lang/crm" element={<CRMDashboard />} />
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/en" element={<App />} />
        <Route path="/fr" element={<App />} />
        <Route path="/he" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
