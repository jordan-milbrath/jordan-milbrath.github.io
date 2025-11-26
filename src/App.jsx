import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Ideas from './pages/Ideas'
import Article from './pages/Article'
import Pride from './pages/Pride'
import DarkModeToggle from './components/DarkModeToggle'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <DarkModeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/ideas/:slug" element={<Article />} />
          <Route path="/pride" element={<Pride />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App

