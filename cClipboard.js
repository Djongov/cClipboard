// Load the buildCopy function on body load
window.onload = buildCopy;

// function to go through all the items with .c0py class and build tooltips and clipboard copy image + event
function buildCopy() {
    // Query all the elements on the DOM with class c0py
    const copyDivs = document.querySelectorAll('.c0py');
    // Log them to the console
    console.log("Found " + copyDivs.length + " C0py elements")
    // Start the whole deal only if there are elements with class "c0py" in the DOM
    if (copyDivs.length > 0) {
        // Add the css stylesheet
        let headID = document.getElementsByTagName('head')[0];
        let link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.integrity = 'sha384-hVlBRriMBCEJtd/pB9l9Q2W732YOI67xBihNoe4760AzTiAB9ECIiVplgM5OH8ht';
        link.crossOrigin = 'anonymous';
        // Change this to the location where you will place the cClipboard.css
        link.href = 'https://cdn.jsdelivr.net/gh/Djongov/cClipboard/cClipboard.css';
        headID.appendChild(link);

        // Loop through all of the found c0py elements
        for (i = 0; i < copyDivs.length; ++i) {
            // create the div that will encompass the entire clipboard image + tooltip
            const createTooltipDiv = document.createElement('div');
            // add class tooltip
            createTooltipDiv.classList.add('cCtooltip');
            // insert it right after the c0py element
            copyDivs[i].parentNode.insertBefore(createTooltipDiv, copyDivs[i].nextSibling);
            // save the tooltip div to a variable for later use
            const tooltipDiv = document.getElementsByClassName('cCtooltip')[i];
            // Let's create the clipboard image
            const clipboardImg = new Image(35, 35);
            // Add the c0py-icon class which serves purpose for the onclick event later
            clipboardImg.classList.add('c0py-icon');
            clipboardImg.src = 'https://djo.blob.core.windows.net/cclipboard/clipboard.svg';
            clipboardImg.alt = 'Copy this reference to Clipboard';
            clipboardImg.style.marginTop = "10px";
            // Add it as a child of the tooltip div
            tooltipDiv.appendChild(clipboardImg);
            // create a <span> that will hold the tooltip text "Copy to clipboard"
            const createTooltipText = document.createElement('span');
            // Add tooltiptext class to it for styling
            createTooltipText.classList.add('cCtooltiptext');
            // Set the text to Copy to Clipboard
            createTooltipText.innerHTML = "Copy to clipboard";
            // Add it as a child of the tooltip div
            tooltipDiv.appendChild(createTooltipText);
            // Save the text value of the c0py element that will need saving to clipboard, for usre in the copyToClipboard function
            const text = copyDivs[i].innerHTML;
            //  Save the tooltip span element so it can be used in the copyToClipboard function (to change the text to Copied! after clicking)
            const element = document.getElementsByClassName('cCtooltiptext')[i];
            // Set the onclick event listener on the clipboard icon
            document.getElementsByClassName('c0py-icon')[i].addEventListener("click", function() {
                copyToClipboard(text, element)
            }, false);

            // Now the actual copy to clipboard function
            function copyToClipboard(text, element) {
                // use the new ClipboardEvent API
                if (window.clipboardData && window.clipboardData.setData) {
                    // IE specific code path to prevent textarea being shown while dialog is visible.
                    return clipboardData.setData("Text", text);
                    // If the new one is not supported, try the old one with execCommand("copy")
                } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                    var textarea = document.createElement("textarea");
                    textarea.textContent = text;
                    textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in MS Edge.
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
