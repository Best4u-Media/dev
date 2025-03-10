import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

const vitePressOptions = {
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
    ]
  }
};

const vitePressSidebarOptions = {
  documentRootPath: '/',
  collapsed: false,
  collapseDepth: 2,
  capitalizeFirst: true,
  useTitleFromFileHeading: true,
};

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));