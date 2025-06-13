---
title: Pagination Fix
---

# {{ $frontmatter.title }}

FacetWP sometimes conflicts with Blocksy, causing the `posts_per_page` from the customizer to not be used. This snippet will fix that:

```php
/**
 * Set posts_per_page for FacetWP pagination
 */
function set_facetwp_pagination(\WP_Query $query)
{
	// Only modify the main query on the frontend
	if (is_admin() || !$query->is_main_query()) {
		return;
	}

	// Only proceed for post type archive pages, blog page, or category archives
	if (!$query->is_post_type_archive() && !$query->is_home() && !$query->is_category()) {
		return;
	}

	// Get the post type from the query
	$post_type = $query->get('post_type');

	// Handle different archive types with Blocksy's naming convention
	if ($query->is_home()) {
		// Blog home page
		$theme_mod_key = 'blog_archive_per_page';
	} elseif ($query->is_category()) {
		// Category archive
		$theme_mod_key = 'categories_archive_per_page';
	} else {
		// Post type archives
		if (is_array($post_type)) {
			$post_type = reset($post_type);
		}
		$theme_mod_key = "{$post_type}_archive_archive_per_page";
	}

	// Get the per-page value from theme mod, fallback to site default if not set
	$per_page = get_theme_mod($theme_mod_key, get_option('posts_per_page', 10));

	// Set the posts_per_page for this query
	$query->set('posts_per_page', $per_page);
}
add_action('pre_get_posts', 'set_facetwp_pagination');
```
