# cClipboard
cClipboard is a small Javascript library that creates a copy to clipboard button to all elements with the class="c0py".

## Installation through CDN

All you have to do is insert the script from a CDN and start adding class="c0py" to the html elements you want to have a copy to clipboard on

```html
<script src="https://cdn.jsdelivr.net/gh/Djongov/cClipboard@v1.0.1/cClipboard.min.js" integrity="sha384-N75xYewFG0GqtAc5o5bbXvYjs3pxwDndG9KhOWEltGXfqlx7MKOdIB6FLifDxF+a" crossorigin="anonymous"></script>
```

The JS file will load automatically the following:

CSS stylesheet https://cdn.jsdelivr.net/gh/Djongov/cClipboard/cClipboard.css"

The image will be delivered from https://djo.blob.core.windows.net/cclipboard/clipboard.svg

## Manual installation
If you want to have more control over the script, download the js, css and svg file from the repo and insert them into your html

cClipboard.js - this is the main file
cClipboard.css - styling the tooltip
cClipboard.svg - the image that is used as a button
So insert the cClipboard.js

```html
<script src="./cClipboard.js"></script>
```
Package is comprised of 3 parts

It will automatically load the cClipboard.css only if there are elements with class="c0py" on the document. Important think to note is where you place the cClipboard.css file. It assumes that it is in the same directory but if not, edit the code on line 18 in cClipboard.js with the proper path. Another think to consider is where you place your cClipboard.svg image. Line 35 in cClipboard.js controls the path, by default it's in the same folder as the .js script as well.

That's it.

Then you just add "c0py" class to any element that you want to have a button to copy to clipboard

## To Do
Tooltip overflows if the image element is on the left: 0 position
