import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TeiPage from './Pages/Tei/TeiMain'
import AboutPage from './Pages/About/AboutMain'
import ToolsPage from './Pages/Tools/ToolsMain'
import ContactsPage from './Pages/Contact/ContactMain'
import ProjectsPage from './Pages/Projects/ProjectsMain'

const App = () => {
  console.log("okay")
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<TeiPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        
      </Routes>
    </Router>
  )
}
export default App
