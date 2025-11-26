// This function loads all markdown files from the public/content/ideas directory
// Files are fetched from the client at runtime
export async function loadMarkdownArticles() {
  const articles = []
  
  try {
    // Fetch the directory listing to get all .md files (excluding README)
    const listResponse = await fetch('/content/ideas/list.json')
    
    let fileList = []
    if (listResponse.ok) {
      // Use the directory listing endpoint if available
      fileList = await listResponse.json()
      console.log('Loading markdown files from directory listing:', fileList)
    } else {
      // Fallback: try index.json for backwards compatibility
      const indexResponse = await fetch('/content/ideas/index.json')
      if (indexResponse.ok) {
        fileList = await indexResponse.json()
        console.log('Loading markdown files from index.json (fallback):', fileList)
      } else {
        console.error('Failed to load file list:', listResponse.statusText)
        return []
      }
    }
    
    // Filter out README files (should already be filtered by server, but double-check)
    fileList = fileList.filter(filename => !filename.includes('README') && filename.endsWith('.md'))
    
    // Fetch each markdown file
    const fetchPromises = fileList.map(async (filename) => {
        try {
          const response = await fetch(`/content/ideas/${filename}`)
          if (!response.ok) {
            console.warn(`Failed to load ${filename}:`, response.statusText)
            return null
          }
          const content = await response.text()
          return { filename, content }
        } catch (error) {
          console.error(`Error loading ${filename}:`, error)
          return null
        }
      })
    
    const fileContents = await Promise.all(fetchPromises)
    
    // Process each file
    for (const fileData of fileContents) {
      if (!fileData) continue
      
      const { filename, content } = fileData
      const slug = filename.replace('.md', '')
      
      // Parse frontmatter - handle cases with or without content after frontmatter
      // More flexible regex to handle various frontmatter formats
      const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---\s*(\n|$)([\s\S]*)$/m)
      
      let markdown = content
      let frontmatter = null
      let titleMatch = null
      let dateMatch = null
      let categoryMatch = null
      
      if (frontmatterMatch) {
        frontmatter = frontmatterMatch[1]
        markdown = frontmatterMatch[3] || '' // Content after frontmatter (or empty string)
        
        // Parse frontmatter fields
        titleMatch = frontmatter.match(/title:\s*(.+)/)
        dateMatch = frontmatter.match(/date:\s*(.+)/)
        categoryMatch = frontmatter.match(/category:\s*(.+)/)
      } else {
        // If no frontmatter detected, try to strip any frontmatter-like content at the start
        // This handles edge cases where the regex might not match
        const frontmatterAttempt = content.match(/^---\s*\n([\s\S]*?)\n---\s*/)
        if (frontmatterAttempt) {
          frontmatter = frontmatterAttempt[1]
          markdown = content.replace(/^---\s*\n[\s\S]*?\n---\s*/, '').trim()
          
          // Parse frontmatter fields from the extracted frontmatter
          titleMatch = frontmatter.match(/title:\s*(.+)/)
          dateMatch = frontmatter.match(/date:\s*(.+)/)
          categoryMatch = frontmatter.match(/category:\s*(.+)/)
        }
      }
      
      // Extract title with priority: frontmatter title > first H1 heading > filename
      // Asterisk shows only when filename is used (fallback)
      let articleTitle = null
      let titleFromFilename = false
      if (titleMatch) {
        // Priority 1: Frontmatter title (no asterisk)
        articleTitle = titleMatch[1].trim()
      } else {
        // Priority 2: First H1 heading in markdown content (no asterisk)
        const h1Match = markdown.match(/^#\s+(.+)$/m)
        if (h1Match) {
          articleTitle = h1Match[1].trim()
          // Remove the H1 heading from content since we're using it as the title
          markdown = markdown.replace(/^#\s+.+$/m, '').trim()
        } else {
          // Priority 3: Filename (formatted) - show asterisk
          articleTitle = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
          titleFromFilename = true
        }
      }
      
      // Extract excerpt (first paragraph after frontmatter, excluding headers)
      const excerptMatch = markdown.match(/^([^\n#]+)/)
      
      // Format date for display
      let formattedDate = ''
      if (dateMatch) {
        const dateStr = dateMatch[1].trim()
        try {
          const date = new Date(dateStr)
          formattedDate = date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })
        } catch (e) {
          formattedDate = dateStr
        }
      }
      
      articles.push({
        slug: slug,
        title: articleTitle,
        titleFromFilename: titleFromFilename,
        date: dateMatch ? dateMatch[1].trim() : '',
        formattedDate: formattedDate,
        category: categoryMatch ? categoryMatch[1].trim() : 'General',
        excerpt: excerptMatch ? excerptMatch[1].trim() : '',
        content: markdown,
        path: `/content/ideas/${filename}`
      })
    }
    
    // Sort by date (newest first)
    articles.sort((a, b) => {
      if (!a.date) return 1
      if (!b.date) return -1
      return new Date(b.date) - new Date(a.date)
    })
    
    return articles
  } catch (error) {
    console.error('Error loading markdown articles:', error)
    return []
  }
}

export async function getArticleBySlug(slug) {
  const articles = await loadMarkdownArticles()
  return articles.find(article => article.slug === slug)
}

// Project loading functions (static imports; no network requests)
import ecommerceProjectMd from '../content/projects/e-commerce-platform.md?raw'
import switchControllerEmulatorMd from '../content/projects/switch-controller-emulator.md?raw'

const STATIC_PROJECTS = [
  {
    slug: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
    image: '🛒',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/yourusername/e-commerce-platform',
    liveUrl: 'https://ecommerce-demo.example.com',
    content: ecommerceProjectMd,
  },
  {
    slug: 'switch-controller-emulator',
    title: 'Switch Controller Emulator',
    description: 'Allows Linux devices to emulate a Nintendo Switch Pro Controller and make arbitrary programmatic input via a simple API.',
    image: '🎮',
    tags: ['Python', 'Linux', 'DBus', 'Bluetooth', 'Avalonia'],
    githubUrl: 'https://github.com/jordan-milbrath/switch-controller-emulator',
    liveUrl: null,
    content: switchControllerEmulatorMd,
  },
]

export async function loadMarkdownProjects() {
  return STATIC_PROJECTS
}

export async function getProjectBySlug(slug) {
  return STATIC_PROJECTS.find(project => project.slug === slug)
}

