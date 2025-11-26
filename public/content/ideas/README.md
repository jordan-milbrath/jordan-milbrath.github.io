# Ideas Articles

This folder contains markdown files that will be automatically displayed on the Ideas page.

## How to Add Articles

1. Create a new `.md` file in this folder
2. Add the filename to `index.json` (so the client knows which files to load)
3. Add frontmatter at the top with metadata:

```markdown
---
title: Your Article Title
date: 2024-03-15
category: Technology
---

Your article content goes here...
```

## Frontmatter Fields

- **title** (required): The article title
- **date** (optional): Publication date (format: YYYY-MM-DD)
- **category** (optional): Article category (e.g., Technology, Design, etc.)

## Notes

- Articles are automatically sorted by date (newest first)
- The first paragraph after the frontmatter is used as the excerpt
- Markdown syntax is fully supported (headers, lists, code blocks, etc.)
- **Important**: After adding a new file, update `index.json` to include the filename

