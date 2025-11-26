import { useTheme } from '../contexts/ThemeContext'
import './DarkModeToggle.css'

function DarkModeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button 
      className="dark-mode-toggle"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  )
}

export default DarkModeToggle

