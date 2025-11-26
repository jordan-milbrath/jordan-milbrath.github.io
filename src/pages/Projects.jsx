import { Link } from 'react-router-dom'
import './Projects.css'

function Projects() {
  const projects = [
    {
      title: 'Switch Controller Emulator',
      description: 'Allows Linux devices to emulate a Nintendo Switch Pro Controller and make arbitrary programmatic input via a simple API.',
      image: '🎮',
      tags: ['Python', 'Linux', 'DBus', 'Bluetooth', 'Avalonia'],
      slug: 'switch-controller-emulator'
    }
  ]

  return (
    <div className="projects-page">
      <div className="projects-container">
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">A showcase of my recent work and creations</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">{project.image}</div>
              <div className="project-content">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                <Link to={`/projects/${project.slug}`} className="project-link">
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

