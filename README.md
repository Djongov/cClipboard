# cClipboard
cClipboard is a very small and incredibly simple to use Javascript library that creates and appends a copy to clipboard button to all elements with the class="c0py".

Original Size:	2.3KB gzipped (6.99KB uncompressed) Compiled Size:	1.33KB gzipped (4.04KB uncompressed)

And that's with comments on every line!

## Installation through CDN

All you have to do is insert the script from the CDN and the bottom (or at least after the copy elements would have rendered) of your ```html <body> ``` and start adding ```html class="c0py"``` to the html elements you want to have a copy to clipboard on

```html
<script src="https://cdn.jsdelivr.net/gh/Djongov/cClipboard@v2.0/cClipboard.min.js" integrity="sha384-N75xYewFG0GqtAc5o5bbXvYjs3pxwDndG9KhOWEltGXfqlx7MKOdIB6FLifDxF+a" crossorigin="anonymous"></script>
```
## Usage
Just add a class "c0py" to the element you want to copy text from and that's it!

## Customizations
You are able to customize the color of the svg icon (stroke) and the stroke-width. All you have to is to pass a data attribute to the c0py elementm along with the c0py class.

Example:

```html <p class="c0py" data-clipboard-icon-stroke="#ff4500" data-clipboard-icon-stroke-width="1.5">Copy me!</p> ```

Best is to use strok-with between 1 and 3.

## How it works
Script looks for DOM elements with class "c0py". Then it creates a couple of new elements like a div, a svg icon and a tooltip div and appends them as the next element after the element with the class "c0py".

## References
The SVG icon comes from https://tablericons.com/

## Improvements
Some areas where we can improve the library:
- Tooltip positioning - Tooltip overflows if the copy icon is on the left: 0 position
- Icon positioning
- Mabye a better way to render the icons