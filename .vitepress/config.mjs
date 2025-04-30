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
      light: 'best4u-light.svg',
      dark: 'best4u-dark.svg',
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Best4u child', link: '/best4u-child/' },
      { text: 'Development', link: '/best4u-development/' },
    ]
  }
};

const vitePressSidebarOptions = [
  {
    rootGroupText: 'Best4u Child',
    documentRootPath: '/',
    scanStartPath: 'best4u-child',
    resolvePath: '/best4u-child/',
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: true,
    capitalizeFirst: true,
    collapsed: true,
    collapseDepth: 1,
  },
  {
    rootGroupText: 'Best4u Development',
    documentRootPath: '/',
    scanStartPath: 'best4u-development',
    resolvePath: '/best4u-development/',
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: true,
    capitalizeFirst: true,
    collapsed: true,
    collapseDepth: 1,
  }
];

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));