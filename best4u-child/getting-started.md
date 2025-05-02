---
title: Getting started
---

# {{ $frontmatter.title }}

To get started with our child-theme, follow these instructions to quickly set up and utilize the theme's capabilities.

## Setup

Go to the theme directory and run these three commands in the CLI
```CLI
npm install
composer install
npm run prod
```

## Starting development

When you want to start developing, just run ```npm run dev```. Vite will launch the development server and the theme will automatically include the files from the development server.

> [!IMPORTANT]
> Running `npm run dev` on the server won't work. For this use `npm run prod:watch`

### Development server SSL Certificate

The browser could block the assets from being included because it doesn't trust a self-signed certificate. If this occurs, you'll have to access the asset through the browser itself (check the JavaScript console) and trust the certificate. You'll only have to do this once.

## Additional information

`/inc`
All files from this directory will automatically be loaded by the theme. This is where you should put all your custom PHP code.
Preferable use a clear structure inside this folder. For example when using different custom post types don't use just one file, but structure it like this;

`/blocks`
Use this folder for creating blocks using LazyBlocks Pro.
Make sure the output method for the block is set to `theme template`. After choosing this option it tells you what folder you need to create inside the `blocks` folder.

`/patterns`
Use this folder for creating patterns in the child-theme to be used in Gutenberg. Just add a `.php` file with the pattern name and inside this file add the following comment

```php
/**
 * Title: Name of the pattern
 * Slug: best4u/name-of-the-pattern
 * Post Types: page, post
 * Categories: best4u
 */
```