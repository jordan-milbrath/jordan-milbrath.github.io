import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getProjectBySlug } from '../utils/markdownLoader'
import './ProjectDetail.css'

function ProjectDetail() {
  const { slug } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProject() {
      try {
        const loadedProject = await getProjectBySlug(slug)
        setProject(loadedProject)
      } catch (error) {
        console.error('Error loading project:', error)
      } finally {
        setLoading(false)
      }
    }
    loadProject()
  }, [slug])

  if (loading) {
    return (
      <div className="project-detail-page">
        <div className="project-detail-container">
          <p>Loading project...</p>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="project-detail-container">
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/projects" className="back-link">← Back to Projects</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="project-detail-page">
      <div className="project-detail-container">
        <Link to="/projects" className="back-link">← Back to Projects</Link>
        
        <article className="project-detail-content">
          <header className="project-detail-header">
            <div className="project-detail-image">{project.image || '📦'}</div>
            <div className="project-detail-meta">
              {project.tags && project.tags.length > 0 && (
                <div className="project-detail-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-detail-tag">{tag}</span>
                  ))}
                </div>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-github-link"
                >
                  View on GitHub →
                </a>
              )}
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-live-link"
                >
                  View Live Demo →
                </a>
              )}
            </div>
            <h1 className="project-detail-title">{project.title}</h1>
            {project.description && (
              <p className="project-detail-description">{project.description}</p>
            )}
          </header>
          
          <div className="project-detail-body">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {project.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  )
}

export default ProjectDetail

