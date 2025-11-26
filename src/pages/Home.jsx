import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home">
      <div className="home-hero">
        <h1 className="home-title">
          <span className="home-greeting">Hello, I'm</span>
          <span className="home-name">Jordan Milbrath</span>
        </h1>
        <p className="home-subtitle">
          
        </p>
        <div className="home-cta">
          <button 
            className="cta-button primary"
            onClick={() => navigate('/projects')}
          >
            View My Work
          </button>
          <button 
            className="cta-button secondary"
            onClick={() => navigate('/experience')}
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="home-features">
        <div className="feature-card" onClick={() => navigate('/experience')}>
          <div className="feature-icon">💼</div>
          <h3>Experience</h3>
          <p>My professional journey and expertise</p>
        </div>
        <div className="feature-card" onClick={() => navigate('/projects')}>
          <div className="feature-icon">🚀</div>
          <h3>Projects</h3>
          <p>Showcase of my recent work</p>
        </div>
        <div className="feature-card" onClick={() => navigate('/ideas')}>
          <div className="feature-icon">💡</div>
          <h3>Ideas</h3>
          <p>Thoughts and insights</p>
        </div>
      </div>
    </div>
  )
}

export default Home
