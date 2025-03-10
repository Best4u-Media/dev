import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Best4u Docs",
  description: "A documentation for development at Best4u",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Best4u Child',
        items: [
          { text: 'Getting started', link: '/best4u-child/getting-started' },
          { text: 'Blade', link: '/best4u-child/blade.md' },
        ]
      }
    ],
  }
})