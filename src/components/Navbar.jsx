import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Portfolio
        </Link>
        <div className="navbar-links">
          <Link 
            to="/experience" 
            className={`navbar-link ${isActive('/experience') ? 'active' : ''}`}
          >
            Experience
          </Link>
          <Link 
            to="/projects" 
            className={`navbar-link ${isActive('/projects') ? 'active' : ''}`}
          >
            Projects
          </Link>
          <Link 
            to="/ideas" 
            className={`navbar-link ${isActive('/ideas') ? 'active' : ''}`}
          >
            Ideas
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

