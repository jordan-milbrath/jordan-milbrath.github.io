// Ideas loading functions (static imports; no network requests)
import accessibilityIdeaMd from '../content/ideas/accessibility.md?raw'
import aiUsageIdeaMd from '../content/ideas/ai-usage.md?raw'
import designSystemsIdeaMd from '../content/ideas/design-systems.md?raw'
import exampleArticleIdeaMd from '../content/ideas/example-article.md?raw'

const STATIC_ARTICLES = [
  {
    slug: 'accessibility',
    title: 'Accessibility',
    titleFromFilename: false,
    date: '',
    formattedDate: '',
    category: 'General',
    excerpt: '',
    content: accessibilityIdeaMd,
    path: '/content/ideas/accessibility.md',
  },
  {
    slug: 'ai-usage',
    title: 'AI Usage',
    titleFromFilename: false,
    date: '',
    formattedDate: '',
    category: 'General',
    excerpt: '',
    content: aiUsageIdeaMd,
    path: '/content/ideas/ai-usage.md',
  },
  {
    slug: 'design-systems',
    title: 'Design Systems',
    titleFromFilename: false,
    date: '',
    formattedDate: '',
    category: 'General',
    excerpt: '',
    content: designSystemsIdeaMd,
    path: '/content/ideas/design-systems.md',
  },
  {
    slug: 'example-article',
    title: 'Example Article',
    titleFromFilename: false,
    date: '',
    formattedDate: '',
    category: 'General',
    excerpt: '',
    content: exampleArticleIdeaMd,
    path: '/content/ideas/example-article.md',
  },
]

export async function loadMarkdownArticles() {
  return STATIC_ARTICLES
}

export async function getArticleBySlug(slug) {
  return STATIC_ARTICLES.find(article => article.slug === slug)
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

