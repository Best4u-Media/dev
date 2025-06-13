---
title: Blade
---

# {{ $frontmatter.title }}

Blade is a templating engine that helps you write cleaner HTML code in PHP projects. Think of it as a way to mix PHP and HTML without making a mess.

Instead of writing messy PHP code mixed with HTML tags, Blade lets you:
- Write clean HTML templates
- Add PHP logic using simple, readable syntax
- Reuse the same HTML pieces across different pages

**What makes Blade useful:**
- Your HTML stays clean and easy to read
- You can use shortcuts instead of writing long PHP code
- You can create reusable templates (like headers and footers)

## When should you use Blade?

Use Blade when you need to create HTML pages that show different content based on data. It's perfect for:
- Displaying user information on a profile page
- Showing a list of products that changes based on what's in stock
- Creating page layouts that you want to use on multiple pages
- Any time you need to mix PHP data with HTML

## How to use Blade in this theme

The good news is that Blade is already set up for you! The theme has everything configured in the `app/App.php` and `app/Blade.php` files.

To use Blade, you just need to call one simple function:

```PHP
use Best4u\BlocksyChild\Blade;

// This renders a Blade template and shows it on the page
echo Blade::render('name-of-your-template', ['data' => 'to-pass']);
```

**What each part means:**
- `'name-of-your-template'` - the name of your Blade file (without the .blade.php ending)
- `['data' => 'to-pass']` - information you want to send to your template

## Step-by-step example

Let's create a simple example to see how this works:

**Step 1: Create your Blade template**
Create a file called `welcome.blade.php` in the `views` folder:

```HTML
<!-- views/welcome.blade.php -->
<html>
    <body>
        <h1>Welcome, {{ $username }}!</h1>
        <p>You have {{ $messageCount }} new messages.</p>
    </body>
</html>
```

**Step 2: Use the template in your PHP code**

```PHP
use Best4u\BlocksyChild\Blade;

// Send data to the template and display it
echo Blade::render('welcome', [
    'username' => 'Sarah',
    'messageCount' => 5
]);
```

**Step 3: See the result**
This will create the following HTML:

```HTML
<html>
    <body>
        <h1>Welcome, Sarah!</h1>
        <p>You have 5 new messages.</p>
    </body>
</html>
```

## Adding simple logic to your templates

You can also add basic if/else logic to your Blade templates:

```HTML
<html>
    <body>
        @if ($messageCount > 0)
            <p>You have {{ $messageCount }} new messages!</p>
        @else
            <p>No new messages.</p>
        @endif
    </body>
</html>
```

**How this works:**
- `@if` starts a condition (like a regular PHP if statement)
- `@else` handles what happens when the condition is false
- `@endif` closes the condition
- `{{ $variable }}` displays the value of a variable

## Learn more

Want to learn more about what you can do with Blade? Check out the official [documentation](https://laravel.com/docs/master/blade).

> [!TIP]
> This version of Blade doesn't include every feature from Laravel, but it has all the main features you'll need for most projects.