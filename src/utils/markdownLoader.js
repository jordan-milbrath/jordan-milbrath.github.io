// Ideas loading functions (static imports; no network requests)
import aiUsageIdeaMd from '../content/ideas/ai-usage.md?raw'

const STATIC_ARTICLES = [
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

