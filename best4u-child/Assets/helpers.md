---
title: Helpers
---

# {{ $frontmatter.title }}

The functions are written in TypeScript, but can also be used in JavaScript.

In our theme, we have a set of helper functions that are designed to simplify and streamline common tasks. These functions are located in the `assets/src/js/helpers.ts` file.

## DOM Manipulation

### $
This function finds and returns the first element that matches the specified CSS selector.

### $$
The `$$` function is a helper function that returns an array of elements that match a given CSS selector. It is a generic function that can return elements of any type that extends HTMLElement.

### createElement
The `createElement` function is a utility function that creates an HTML element with the specified tag name, properties, and children.

## Event Handling

### addGlobalEventListener
The `addGlobalEventListener` function is a utility function that adds a global event listener that listens for a specific event type on elements matching a CSS selector.

### removeGlobalEventListener
The `removeGlobalEventListener` function is a utility function that removes a global event listener from the document. This function is useful when you want to stop listening for a specific event on elements that match a given CSS selector.

## Performance Optimization

### executeIdleCallback
The `executeIdleCallback` function is a utility function that executes a callback function during an idle period of the event loop and returns a promise. If the browser supports `requestIdleCallback`, the callback will be scheduled using it. Otherwise, it will fallback to `setTimeout` with a delay of 0ms.

### debounce
The `debounce` function is a utility that ensures a given function is only called after a specified delay since the last time it was invoked. This is particularly useful in scenarios where a function might be called frequently, but you only want to execute it after the calling has stopped for a certain period of time. Examples include user input, window resizing, and scroll events.

### throttle
The `throttle` function is a utility function that limits the rate at which a function can fire. This is particularly useful for events that can fire at a high frequency, such as scroll or resize events in a browser.

### memoize
The `memoize` function is a utility function that optimizes the execution of a given function by caching its result based on its dependencies. This technique is useful when the function is computationally expensive and is called multiple times with the same arguments.

## Data Manipulation

### formatNumber
The `formatNumber` function is a utility function that formats a number using the `Intl.NumberFormat` object. This function is useful for formatting numbers in a way that is appropriate for a specific locale.

### match
The `match` function is a utility function that matches a given value against a set of cases. Each case is represented by a key in an object, and the corresponding value is a function that will be executed if the case matches the provided value. If no matching case is found, the function returns null.

### arrayEquals
The `arrayEquals` function is a utility function that checks if two arrays are equal. It compares the arrays in terms of their length and their corresponding elements.

### deepCopy
The `deepCopy` function creates a deep copy of an object. This means that it creates a new object with its own copy of the data, not referencing the original object. Changes to the new object will not affect the original object and vice versa.

## Device Detection

### hasMouse
The `hasMouse` function is a utility function that checks if the current device has a mouse input capability.

## CSS Utilities

### convertCssValueToPixels
The `convertCssValueToPixels` function is a utility function that converts a CSS value to pixels. This function is useful when you need to perform calculations or manipulations on CSS values in JavaScript.