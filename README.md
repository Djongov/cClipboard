# cClipboard
cClipboard is a very small (1.7 KB gzipped) and incredibly simple to use Javascript library that creates and appends a copy to clipboard button to all elements with the class="c0py".

## Installation through CDN

All you have to do is insert the script from the CDN at the bottom (or at least after the c0py elements would have rendered) of your ```<body> ``` and start adding ```class="c0py"``` to the html elements you want to have a copy to clipboard function on

```html
<script src="https://cdn.jsdelivr.net/gh/Djongov/cClipboard@v2.1/cClipboard.min.js" integrity="sha384-CsG1oSxL8NvDRcpfYqbjGqLqIeH6/1VuOXBvPXEdpVbTv8OspnNrHdG8/T9Skp0S" crossorigin="anonymous"></script>
```
## Usage
Just add a class "c0py" to the element you want to copy text from and that's it!

## Customizations
You are able to customize the color of the svg icon (stroke) and the stroke-width. All you have to is to pass a data attribute to the c0py elementm along with the c0py class.

Example:

```<p class="c0py" data-clipboard-icon-stroke="#ff4500" data-clipboard-icon-stroke-width="1.5">Copy me!</p> ```

Best is to use strok-with between 1 and 3.

## How it works
Script looks through the DOM for elements with class "c0py". Then it creates a couple of new elements like a div, a svg icon and a tooltip div and appends them as the next element after the element with the class "c0py".

## Content-Security-Policy
If you are running a Content-Secuirty-Policy there are 2 directives you need to configure
```stype-src 'unsafe-inline'``` as the stylings of the tooltip are inline (that way the script does not require a .css file)
```script-src https://cdn.jsdelivr.net/gh/Djongov/cClipboard@v2.0/cClipboard.min.js``` to allow the loading of the script from the jsdelivr CDN

## References
The SVG icon comes from https://tablericons.com/

## Improvements
Some areas where we can improve the library:
- Tooltip positioning - Tooltip overflows if the copy icon is on the left: 0 position
- Icon positioning. It is on a new line after certain elements 
- Mabye a better way to render the icons
