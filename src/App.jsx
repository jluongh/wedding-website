import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import SiteLayout from './components/SiteLayout.jsx'
import OurStoryPage from './pages/OurStoryPage.jsx'
import QaPage from './pages/QaPage.jsx'
import RsvpPage from './pages/RsvpPage.jsx'
import SchedulePage from './pages/SchedulePage.jsx'
import StayPage from './pages/StayPage.jsx'
import TravelPage from './pages/TravelPage.jsx'
import WelcomePage from './pages/WelcomePage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/rsvp" element={<RsvpPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/where-to-stay" element={<StayPage />} />
        <Route path="/travel" element={<TravelPage />} />
        <Route path="/qa" element={<QaPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  )
}

export default App
