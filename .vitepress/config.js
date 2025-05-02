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
      { text: 'Child theme', link: '/best4u-child/' },
      { text: 'Development', link: '/best4u-development/' },
    ]
  }
};

const vitePressSidebarOptions = [
  {
    rootGroupText: 'Child theme',
    documentRootPath: '/',
    scanStartPath: 'best4u-child',
    resolvePath: '/best4u-child/',
    useTitleFromFrontmatter: true,
    hyphenToSpace: true,
    collapsed: true,
    collapseDepth: 1,
    manualSortFileNameByPriority: [
      'getting-started.md',
    ]
  },
  {
    rootGroupText: 'Development',
    documentRootPath: '/',
    scanStartPath: 'best4u-development',
    resolvePath: '/best4u-development/',
    useTitleFromFrontmatter: true,
    hyphenToSpace: true,
    collapsed: true,
    collapseDepth: 2,
  }
];

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));