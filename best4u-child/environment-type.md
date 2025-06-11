---
title: Environment type
---

# {{ $frontmatter.title }}

WordPress 5.5 introduced a new constant `WP_ENVIRONMENT_TYPE` that allows you to set the current environment of your site. This can be useful for enabling or disabling certain features based on the environment.

We use this constant to differ between the different environment types. This makes it easier to see whether you’re working on the test or production environment. The environment type is also shown in the WordPress admin toolbar.

## Change the environment type

You can change the environment type in the `wp-config.php` file. You need to define this using `WP_ENVIRONMENT_TYPE` constant in this file.
Here are the steps to do this:
1. Open the `wp-config.php` file in your WordPress root directory.
2. Add the following line of code above the line that says `/* That's all, stop editing! Happy publishing. */`
```
define( 'WP_ENVIRONMENT_TYPE', 'environment_type' );
```
3. Replace `environment_type` with the environment type you want to set. The possible values are `local`, `development`, `staging`, and `production`.
4. Save and close the file.

## Using the WP-CLI

WP-CLI is a command-line interface for WordPress. You can use it to change the WP_ENVIRONMENT_TYPE constant.
Here are the steps to do this:
1. Open your terminal.
2. Navigate to your WordPress root directory.
3. Run the following command:
```
wp config set WP_ENVIRONMENT_TYPE 'environment_type'
```
3. Replace `environment_type` with the environment type you want to set. The possible values are `local`, `development`, `staging`, and `production`.

Please note that the WP-CLI method will not work if the `WP_ENVIRONMENT_TYPE` constant is already defined in the `wp-config.php` file. In that case, you will need to manually edit the `wp-config.php` file.

Remember to replace `environment_type` with the actual environment type you want to set. The possible values are `local`, `development`, `staging`, and `production`.