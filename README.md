# cClipboard
cClipboard is a small Javascript library that creates a copy to clipboard button to all elements with the class="c0py".

## Installation

Package is comprised of 3 parts
- cClipboard.js - this is the main file
- cClipboard.css - styling the tooltip
- cClipboard.svg -  the image that is used as a button

So insert the cClipboard.js

 ```html
<script src="./cClipboard.js"></script>
```
It will automatically load the cClipboard.css only if there are elements with class="c0py" on the document. Important think to note is where you place the cClipboard.css file. It assumes that it is in the same directory but if not, edit the code on line 18 in cClipboard.js with the proper path. Another think to consider is where you place your cClipboard.svg image. Line 35 in cClipboard.js controls the path, by default it's in the same folder as the .js script as well. 

That's it.

Then you just add "c0py" class to any element that you want to have a button to copy to clipboard

## Installation through CDN

Fetch it from a CDN 

```html
<script src="https://cdn.jsdelivr.net/gh/Djongov/cClipboard/cClipboard.js" integrity="sha384-mVgthW5e+8JH1vVmzBGM+HjJ1FcgrSCnQOEYbKBX+H6edW26YPmRX0dEbQjI76nW" crossorigin="anonymous"></script>
```

The CDN for the css file is this although you won't need it as the JS file will load it automatically.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Djongov/cClipboard/cClipboard.css" integrity="sha384-hVlBRriMBCEJtd/pB9l9Q2W732YOI67xBihNoe4760AzTiAB9ECIiVplgM5OH8ht" crossorigin="anonymous">
```
The image will be delivered from https://djo.blob.core.windows.net/cclipboard/clipboard.svg
