import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getArticleBySlug } from '../utils/markdownLoader'
import './Article.css'

function Article() {
  const { slug } = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadArticle() {
      try {
        const loadedArticle = await getArticleBySlug(slug)
        setArticle(loadedArticle)
      } catch (error) {
        console.error('Error loading article:', error)
      } finally {
        setLoading(false)
      }
    }
    loadArticle()
  }, [slug])

  if (loading) {
    return (
      <div className="article-page">
        <div className="article-container">
          <p>Loading article...</p>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="article-page">
        <div className="article-container">
          <h1>Article Not Found</h1>
          <p>The article you're looking for doesn't exist.</p>
          <Link to="/ideas" className="back-link">← Back to Ideas</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="article-page">
      <div className="article-container">
        <Link to="/ideas" className="back-link">← Back to Ideas</Link>
        
        <article className="article-content">
          <header className="article-header">
            <div className="article-meta">
              <span className="article-category">{article.category}</span>
              {article.formattedDate && (
                <time className="article-date">{article.formattedDate}</time>
              )}
            </div>
            <h1 className="article-title">{article.title}</h1>
          </header>
          
          <div className="article-body">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {article.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Article

