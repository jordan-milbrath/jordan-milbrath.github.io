import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { loadMarkdownArticles } from '../utils/markdownLoader'
import './Ideas.css'

function Ideas() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadArticles() {
      try {
        const loadedArticles = await loadMarkdownArticles()
        setArticles(loadedArticles)
      } catch (error) {
        console.error('Error loading articles:', error)
      } finally {
        setLoading(false)
      }
    }
    loadArticles()
  }, [])

  if (loading) {
    return (
      <div className="ideas-page">
        <div className="ideas-container">
          <p>Loading articles...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="ideas-page">
      <div className="ideas-container">
        <h1 className="page-title">Ideas</h1>
        <p className="page-subtitle">Thoughts, insights, and reflections on technology and design</p>
        
        {articles.length === 0 ? (
          <p className="no-articles">No articles found. Add markdown files to <code>src/content/ideas/</code></p>
        ) : (
          <div className="ideas-list">
            {articles.map((article) => (
              <article key={article.slug} className="idea-card">
                <div className="idea-header">
                  <span className="idea-category">{article.category}</span>
                  {article.formattedDate && (
                    <time className="idea-date">{article.formattedDate}</time>
                  )}
                </div>
                <h2 className="idea-title">
                  {article.title}
                  {article.titleFromFilename && <span className="title-asterisk">*</span>}
                </h2>
                <p className="idea-excerpt">{article.excerpt}</p>
                <Link to={`/ideas/${article.slug}`} className="idea-link">
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Ideas

