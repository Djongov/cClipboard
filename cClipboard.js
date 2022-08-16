// function to go through all the items with .c0py class and build tooltips and clipboard copy image + event
function buildCopy() {
  // Query all the elements on the DOM with class c0py
    const copyDivs = document.querySelectorAll('.c0py');
    // Start the whole deal only if there are elements with class "c0py" in the DOM
    if (copyDivs.length > 0) {
        // Log them to the console
        console.log("Found " + copyDivs.length + " C0py elements");
        // Tooltip styles - will be appended to the end of <head>
        var css = `
/* Tooltips Settings */
.Ctooltip {
    position: relative;
    display: inline-block;
}
.Ctooltip .Ctooltiptext {
    visibility: hidden;
    width: 140px;
    background-color: black;
    color: whitesmoke;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 150%;
    left: 50%;
    margin-left: -75px;
    word-wrap: break-word;
    display: inline-block;
}
.Ctooltip .Ctooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: white transparent transparent transparent;
}
.Ctooltip:hover .Ctooltiptext {
    visibility: visible;
    opacity: 1;
}
        `;
        // Create the style tag
        var style = document.createElement('style');

        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        // Append to <head>
        document.getElementsByTagName('head')[0].appendChild(style);
        // Loop through all of the found c0py elements
        for (i = 0; i < copyDivs.length; ++i) {
            // create the div that will encompass the entire clipboard image + tooltip
            const createTooltipDiv = document.createElement('div');
            // add class tooltip
            createTooltipDiv.classList.add('Ctooltip');
            // insert it right after the c0py element
            copyDivs[i].parentNode.insertBefore(createTooltipDiv, copyDivs[i].nextSibling);
            // save the tooltip div to a variable for later use
            const tooltipDiv = document.getElementsByClassName('Ctooltip')[i];
            // We need a little margin on the right because the icon will be too close to the previous element
            tooltipDiv.style.margin = "0 0.4rem";
            // Let's create the SVG icon
            // Default is black
            let iconStroke = '#000';
            // Default 1.5 seems clean
            let strokeWidth = 1.5;
            // Check if data attributes have been passed, like the stroke color (data-clipboard-icon-stroke) and stroke width (data-clipboard-icon-stroke-width)
            if (copyDivs[i].dataset.clipboardIconStroke) {
                //console.log('Prefered Icon Stroke is ' + copyDivs[i].dataset.clipboardIconStroke);
                iconStroke = copyDivs[i].dataset.clipboardIconStroke;
            }
            if (copyDivs[i].dataset.clipboardIconStrokeWidth) {
                //console.log('Prefered Icon Stroke width is ' + copyDivs[i].dataset.clipboardIconStrokeWidth);
                strokeWidth = copyDivs[i].dataset.clipboardIconStrokeWidth;
            }
            // The icon itself - taken from https://tablericons.com/
            let clipboardImgSource = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" /></svg>';
            // Because we will be creating the SVG from a string, we need a parent element
            let div = document.createElement('div');
            // Append it to the new div
            div.innerHTML = clipboardImgSource;
            // Add it as a child of the tooltip main div
            tooltipDiv.appendChild(div);
            // Now actually get the new SVG element as an HTML Node element
            let clipboardImg = div.firstElementChild;
            // Add it the c0py-icon class (needed later)
            clipboardImg.classList.add('c0py-icon');
            // Do a widht and height (24 seems most approprite across the sizes)
            clipboardImg.style.width = 24;
            clipboardImg.style.height = 24;
            // Apply the stroke
            clipboardImg.style.stroke = iconStroke;
            // Apply the stroke-width
            clipboardImg.style.strokeWidth = strokeWidth;
            // create a <span> that will hold the tooltip text "Copy to clipboard"
            const createTooltipText = document.createElement('span');
            // Add tooltiptext class to it for styling
            createTooltipText.classList.add('Ctooltiptext');
            // Set the text to Copy to Clipboard
            createTooltipText.innerHTML = "Copy to clipboard";
            // Add it as a child of the tooltip div
            tooltipDiv.appendChild(createTooltipText);
            // Save the text value of the c0py element that will need saving to clipboard, for usre in the copyToClipboard function
            const text = copyDivs[i].innerHTML;
            //  Save the tooltip span element so it can be used in the copyToClipboard function (to change the text to Copied! after clicking)
            const element = document.getElementsByClassName('Ctooltiptext')[i];
            // Set the onclick event listener on the clipboard icon
            document.getElementsByClassName('c0py-icon')[i].addEventListener("click", function() {copyToClipboard(text, element)}, false);
    
            // Now the actual copy to clipboard function
            function copyToClipboard (text, element) {
            // use the new ClipboardEvent API
            if (window.clipboardData && window.clipboardData.setData) {
                // IE specific code path to prevent textarea being shown while dialog is visible.
                return clipboardData.setData("Text", text); 
                // If the new one is not supported, try the old one with execCommand("copy")
            } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                var textarea = document.createElement("textarea");
                textarea.textContent = text;
                textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
                document.body.appendChild(textarea);
                textarea.select();
                try {
                    return document.execCommand("copy");
                } catch (ex) {
                    console.warn("Copy to clipboard failed.", ex);
                    element.innerHTML = "Failed to Copy";
                    return false;
                } finally {
                    document.body.removeChild(textarea);
                    element.innerHTML = "Copied";
                    console.log("Copied: " + text);
                }
            }
            }
        }
    }
}
// Run the function
buildCopy();