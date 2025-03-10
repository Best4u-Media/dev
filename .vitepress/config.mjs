import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Best4u Docs",
  description: "A documentation for development at Best4u",
  lastUpdated: true,
  themeConfig: {
    siteTitle: false,
    logo: {
      light: '/best4u-light.svg',
      dark: '/best4u-dark.svg',
    },
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

    externalLinkIcon: true,
  }
})