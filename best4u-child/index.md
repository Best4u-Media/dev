::: warning
We are currently in the process of rewriting all information. Therefore, this information may not be complete.
:::

# Best4u Child
This is the default theme we use for developing new websites with Blocksy. It makes use of Vite to bundle/compile the assets.

Vite also provides an easy-to-use development server which also makes use of HMR. The theme will automatically load the assets from the development server when you're developing on a local environment and the server is running.

## Project Structure

- `app/` - Contains the main PHP classes for the theme.
- `assets/` - Contains the source files for your assets. The public/ subdirectory is where the compiled assets are output.
- `blocks/` - Contains custom Gutenberg blocks.
- `inc/` - Contains PHP files that are included in the theme.
- `patterns/` - Contains block patterns.
- `vendor/` - Contains your composer dependencies.
- `views/` - Contains the blade templates for the theme.
- `views-cache/` - Contains the cached blade templates. This directory is automatically created by the theme. You shouldn't edit anything in this directory.