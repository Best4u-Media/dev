---
title: Environment type
---

# {{ $frontmatter.title }}

An environment type tells WordPress what kind of setup you're using. Think of it like a label that says "this is my test site" or "this is my live website."

WordPress has a special setting called `WP_ENVIRONMENT_TYPE` that lets you mark your site as one of four types:
- `local` - your computer (for development)
- `development` - a development server
- `staging` - a testing version of your site
- `production` - your live website that visitors see

**Why is this useful?**
When you set the environment type, the theme can behave differently depending on where it's running. For example, it might show debugging information on your test site but hide it on your live site. You'll also see the environment type displayed in your WordPress admin bar, so you always know which version of your site you're working on.

## How to change the environment type

There are two ways to set your environment type. Choose the one that works best for you.

### Method 1: Edit the wp-config.php file

This is the most common way to set your environment type.

**Step 1:** Find and open your `wp-config.php` file
- This file is in your WordPress main folder (the same folder that has `wp-content` and `wp-admin`)
- You can edit it using any text editor or through your hosting control panel

**Step 2:** Add the environment setting
- Look for the line that says `/* That's all, stop editing! Happy publishing. */`
- Add this line right above it:
```
define( 'WP_ENVIRONMENT_TYPE', 'environment_type' );
```

**Step 3:** Choose your environment type
Replace `environment_type` with one of these options:
- `local` - if you're working on your computer
- `development` - if you're on a development server
- `staging` - if this is your testing site
- `production` - if this is your live website

**Step 4:** Save the file
Save your changes and close the file.

### Method 2: Use WP-CLI (command line)

WP-CLI is a tool that lets you control WordPress from the command line. If you're comfortable using the terminal, this method is faster.

**Step 1:** Open your terminal
- On Mac: open Terminal
- On Windows: open Command Prompt or PowerShell

**Step 2:** Go to your WordPress folder
Navigate to the folder where your WordPress files are located.

**Step 3:** Run the command
Type this command and press Enter:
```
wp config set WP_ENVIRONMENT_TYPE 'environment_type'
```

**Step 4:** Choose your environment type
Replace `environment_type` with your choice: `local`, `development`, `staging`, or `production`.

**Important note:** This method only works if you haven't already set the environment type in your `wp-config.php` file. If you have, you'll need to use Method 1 instead.

## Quick reference

Here's what each environment type means:
- **local** - You're working on your own computer
- **development** - You're working on a development server
- **staging** - This is a copy of your site for testing
- **production** - This is your live website that visitors see