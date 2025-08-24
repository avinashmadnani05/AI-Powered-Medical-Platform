import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import MedicationTracker from './pages/MedicationTracker'
import MoodMonitor from './pages/MoodMonitor'
import MedicalImageDetector from './pages/MedicalImageDetector'
import CostCalculator from './pages/CostCalculator'
import Journal from './pages/Journal'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const sidebarRef = useRef(null)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Click outside sidebar to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSidebarOpen && 
        sidebarRef.current && 
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest('.floating-toggle-btn') &&
        !event.target.closest('.sidebar-toggle')
      ) {
        setIsSidebarOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isSidebarOpen])

  return (
    <Router>
      <div className="app">
        <div ref={sidebarRef}>
          <Navbar 
            isSidebarOpen={isSidebarOpen} 
            setIsSidebarOpen={setIsSidebarOpen}
            isMobile={isMobile}
          />
        </div>
        <div className={`app-layout ${!isSidebarOpen || isMobile ? 'sidebar-collapsed' : ''}`}>
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/medication-tracker" element={<MedicationTracker />} />
              <Route path="/mood-monitor" element={<MoodMonitor />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/medical-detector" element={<MedicalImageDetector />} />
              <Route path="/cost-calculator" element={<CostCalculator />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
