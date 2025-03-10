import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

// Function to generate sidebar automatically
function generateSidebar() {
  const sidebar = {}
  const docsDir = path.resolve(__dirname, '..')

  // Get all directories in the docs root (excluding .vitepress and other system directories)
  const dirs = fs.readdirSync(docsDir).filter(file => {
    return fs.statSync(path.join(docsDir, file)).isDirectory() &&
           !file.startsWith('.') &&
           file !== 'public' &&
           file !== 'node_modules'
  })

  // Process each directory
  dirs.forEach(dir => {
    const items = []
    const dirPath = path.join(docsDir, dir)

    // Get all markdown files in the directory
    const files = fs.readdirSync(dirPath).filter(file => {
      return file.endsWith('.md')
    })

    // Sort files and create sidebar items
    files.forEach(file => {
      const name = file === 'index.md' ? 'Overview' :
        file.replace(/\.md$/, '').split('-').map(word =>
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ')

      const link = `/${dir}/${file.replace(/\.md$/, '')}`

      items.push({
        text: name,
        link: file === 'index.md' ? `/${dir}/` : link
      })
    })

    // Sort items - put index/overview first, then alphabetically
    items.sort((a, b) => {
      if (a.text === 'Overview') return -1
      if (b.text === 'Overview') return 1
      return a.text.localeCompare(b.text)
    })

    // Add the section to sidebar
    sidebar[`/${dir}/`] = [
      {
        text: dir.split('-').map(word =>
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' '),
        items
      }
    ]
  })

  return sidebar
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Best4u Docs",
  description: "A documentation for development at Best4u",
  lastUpdated: true,
  themeConfig: {
    siteTitle: false,
    externalLinkIcon: true,

    logo: {
      light: '/best4u-light.svg',
      dark: '/best4u-dark.svg',
    },

    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: generateSidebar(),
  }
})