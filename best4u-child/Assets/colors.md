---
title: Colors
---

# {{ $frontmatter.title }}

## What Are CSS Variables?
CSS variables (also called custom properties) are like containers that store values you can reuse throughout your CSS. Think of them as labels for colors that you can change in one place to update everywhere they're used.

**Why use CSS variables for colors?**
- ✅ Change colors once, update everywhere
- ✅ Consistent color scheme across your site
- ✅ Easy to maintain and modify
- ✅ WordPress customizer integration

## Available Color Variables
This theme provides eight color variables that you can use anywhere in your CSS:

```css
var(--theme-palette-color-1)  /* Primary color */
var(--theme-palette-color-2)  /* Secondary color */
var(--theme-palette-color-3)  /* Accent color */
var(--theme-palette-color-4)  /* Background color */
var(--theme-palette-color-5)  /* Text color */
var(--theme-palette-color-6)  /* Border color */
var(--theme-palette-color-7)  /* Hover color */
var(--theme-palette-color-8)  /* Disabled color */
```

## How to Use Color Variables

### Basic Usage
To use a color variable, wrap it in `var()` and assign it to any CSS color property:

```css
.my-button {
    background-color: var(--theme-palette-color-1);
    color: var(--theme-palette-color-5);
    border: 2px solid var(--theme-palette-color-6);
}
```

### Real-World Examples

**Creating a Card Component:**
```css
.card {
    background-color: var(--theme-palette-color-4);
    border: 1px solid var(--theme-palette-color-6);
    color: var(--theme-palette-color-5);
}

.card-title {
    color: var(--theme-palette-color-1);
}

.card-button {
    background-color: var(--theme-palette-color-2);
    color: var(--theme-palette-color-4);
}

.card-button:hover {
    background-color: var(--theme-palette-color-7);
}
```

**Styling a Navigation Menu:**
```css
.nav-menu {
    background-color: var(--theme-palette-color-1);
}

.nav-link {
    color: var(--theme-palette-color-4);
}

.nav-link:hover {
    color: var(--theme-palette-color-7);
    background-color: var(--theme-palette-color-2);
}
```

## Changing Colors in WordPress

### Step-by-Step Guide:
1. **Login to WordPress Admin** → Go to your WordPress dashboard
2. **Navigate to Customizer** → Appearance → Customize
3. **Find Color Settings** → Look for "Colors"
4. **Select Colors** → Click on each color picker to choose your colors
5. **Preview Changes** → See changes in real-time in the preview
6. **Publish** → Click "Publish" to save your changes


### Adding New Colors to the Palette:
If you need more than the default 8 colors, you can add additional colors:

1. **Find Global Color Palette** → In the Colors section, look for "Global Color Palette"
2. **Click the Three Dots** → Click the three dots (⋯) next to "Global Color Palette"
3. **Add New Color** → Select "Add new color" from the dropdown menu
4. **Choose Your Color** → Use the color picker to select your desired color
5. **Name Your Color** → Give your new color a descriptive name
6. **Save Changes** → The new color will be available as a CSS variable

> [!NOTE]
> When you add new colors, they will automatically be assigned variable names such as `var(--theme-palette-color-x)`, where `x` represents the next available number (e.g., 9, 10, etc.). These new variables can be used just like the existing theme palette colors.

> [!TIP]
> Always preview your color changes on different pages to ensure they look good everywhere!

## VS Code Snippets Setup & Usage

### What Are Snippets?
Snippets are shortcuts that automatically insert code when you type a keyword. Instead of typing `var(--theme-palette-color-1)`, you can just type `pc1` and press Tab!

### Using Snippets
1. **Type the snippet name** → e.g., `pc1`
2. **Press Tab** → VS Code will replace it with `var(--theme-palette-color-1)`
3. **Continue coding** → Use the color variable in your CSS property

**Example:**
```css
.header {
    background: pc1 [Press Tab]
    /* Becomes: background: var(--theme-palette-color-1); */
}
```

## Quick Reference

| Snippet | Expands to | Common Use |
|---------|------------|------------|
| `pc1` | `var(--theme-palette-color-1)` | Primary buttons, headers |
| `pc2` | `var(--theme-palette-color-2)` | Secondary buttons, links |
| `pc3` | `var(--theme-palette-color-3)` | Accent elements, highlights |
| `pc4` | `var(--theme-palette-color-4)` | Backgrounds, cards |
| `pc5` | `var(--theme-palette-color-5)` | Body text, paragraphs |
| `pc6` | `var(--theme-palette-color-6)` | Borders, dividers |
| `pc7` | `var(--theme-palette-color-7)` | Hover states, active elements |
| `pc8` | `var(--theme-palette-color-8)` | Disabled elements, placeholders |

## Best Practices

### ✅ Do's
- Use color variables instead of hard-coded hex codes
- Test colors in both light and dark themes (if applicable)
- Ensure sufficient contrast for accessibility
- Keep a consistent color scheme throughout your site

### ❌ Don'ts
- Don't mix color variables with hard-coded colors unnecessarily
- Don't use too many different colors (stick to your palette)
- Don't forget to test on mobile devices

## Troubleshooting

### Common Issues:

**❓ Color variable not working?**
- Check if you're using `var()` wrapper: `var(--theme-palette-color-1)`
- Ensure no typos in the variable name
- Make sure the CSS file is properly linked

**❓ Snippets not working in VS Code?**
- Check if you added snippets to the correct file (css.json)
- Restart VS Code after adding snippets
- Make sure you're in a CSS file when using snippets

**❓ Colors not updating in WordPress?**
- Clear any caching plugins
- Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
- Check if changes were published in the customizer

> [!IMPORTANT]
> Always backup your site before making significant color changes, and test thoroughly across different devices and browsers!