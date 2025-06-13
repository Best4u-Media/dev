---
title: SCSS
---

# {{ $frontmatter.title }}

## Using Breakpoint Mixins in SCSS

This guide explores how to leverage breakpoint mixins to manage responsive styles in your SCSS project.

### Available Mixins

SCSS offers three helpful mixins for defining responsive styles at specific breakpoints:

- **`break-below($breakpoint)`**: Applies styles to elements up to the specified breakpoint (using max-width).
- **`break-between($min-breakpoint, $max-breakpoint)`**: Applies styles to elements within the range provided by the minimum and maximum breakpoints (min-width and max-width).
- **`break-above($breakpoint)`**: Applies styles to elements beyond the specified breakpoint (using min-width).

These mixins simplify the creation of media queries, promoting clean and maintainable code.

### Examples

```scss
@include break-below(sm) {
  /* Styles for screens smaller than sm breakpoint */
}

@include break-between(md, lg) {
  /* Styles for screens between md and lg breakpoints */
}

@include break-above(xl) {
  /* Styles for screens larger than the xl breakpoint */
}
```

### Customizing Breakpoints

While these mixins typically use pre-defined breakpoints (e.g., sm, md, etc.), you can also directly use custom pixel values for greater flexibility.

```scss
@include break-above(1400px) {
  /* Styles for screens wider than 1400px */
}
```

### Real-World Application

Here's a practical example demonstrating how to use a mixin within a style definition:

```scss
header {
  width: 50%;
  height: 50%;
  background-color: blue;
  @include break-below(400px) {
    background-color: red;
  }
}
```

This translates to:

```css
header {
  width: 50%;
  height: 50%;
  background-color: blue;
}

@media (max-width: 399px) {
  header {
    background-color: red;
  }
}
```

As you can see, mixins streamline your workflow by eliminating the need for repetitive individual media queries, resulting in cleaner and more organized SCSS code.