import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'favicon-204',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/favicon.ico') {
            res.statusCode = 204
            res.end()
            return
          }
          next()
        })
      },
    },
    {
      name: 'ideas-directory-listing',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/content/ideas/list.json') {
            try {
              const ideasDir = path.join(process.cwd(), 'public', 'content', 'ideas')
              const files = fs.readdirSync(ideasDir)
              const mdFiles = files
                .filter(file => file.endsWith('.md') && !file.includes('README'))
                .map(file => file)
              
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify(mdFiles))
            } catch (error) {
              res.statusCode = 500
              res.end(JSON.stringify({ error: 'Failed to read directory' }))
            }
            return
          }
          next()
        })
      },
    },
    {
      name: 'projects-directory-listing',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/content/projects/list.json') {
            try {
              const projectsDir = path.join(process.cwd(), 'public', 'content', 'projects')
              const files = fs.readdirSync(projectsDir)
              const mdFiles = files
                .filter(file => file.endsWith('.md') && !file.includes('README'))
                .map(file => file)
              
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify(mdFiles))
            } catch (error) {
              res.statusCode = 500
              res.end(JSON.stringify({ error: 'Failed to read directory' }))
            }
            return
          }
          next()
        })
      },
    },
  ],
})

