# Blade
Blade is a powerful, simple, and elegant templating engine provided with Laravel, but it can also be used separately in any PHP project. In the context of the theme, Blade is used to separate the application logic from the presentation logic, making your code cleaner, more maintainable, and easier to understand.

**By using Blade, you can:**
- Keep your HTML structure separate from your PHP code.
- Use convenient shortcuts for PHP control structures.
- Reuse code snippets across different views with Blade's layout system.

## When to use Blade
You should use Blade whenever you need to generate HTML or other text-based formats. It's especially useful when:
- You have complex PHP logic that you want to keep separate from your HTML.
- You want to reuse certain parts of your HTML across multiple pages (like headers, footers, etc.).
- You want to keep your code DRY (Don't Repeat Yourself).

## How to use Blade
In our child theme, the Blade templating engine is already initialized in the `App` class in `app/App.php` file. To use it, you need to call the static `render` method of the `Blade` class, which is defined in the `app/Blade.php` file.

Here's a basic example
```PHP
use Best4u\BlocksyChild\Blade;

// Render a view with data
echo Blade::render('path.to.view', ['key' => 'value']);
```
In this example, `'path.to.view'` is the path to the Blade template file in the `views` directory, and `['key' => 'value']` is an associative array of data that you want to pass to the view.

## Examples
Here's an example of a Blade template file
```HTML
<!-- views/example.blade.php-->
<html>
    <body>
        <h1>Hello, {{ $name }}!</h1>
    </body>
</html>
```

And here's how you can render this view with data
```PHP
use Best4u\BlocksyChild\Blade;

// Render the view with data
echo Blade::render('example', ['name' => 'John Doe']);
```

This will output
```HTML
<html>
    <body>
        <h1>Hello, John Doe!</h1>
    </body>
</html>
```

In the Blade template, you can use `{{ $variable }}` to output a variable, and you can use Blade's control structures to add logic to your views.
```HTML
<html>
    <body>
        @if ($name === 'John Doe')
            <h1>Hello, John Doe!</h1>
        @else
            <h1>Hello, stranger!</h1>
        @endif
    </body>
</html>
```

For more information on how to use Blade, you can refer to the Blade [documentation](https://laravel.com/docs/master/blade).

> [!TIP]
> Not everything from laravel blade is supported in this version. But most of the functionality should work.