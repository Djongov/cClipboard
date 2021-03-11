// Load the buildCopy function as on body load
document.body.onload = buildCopy;

// function to go through all the items with .c0py class and build tooltips and clipboard copy image + event
function buildCopy() {
  const copyDivs = document.querySelectorAll('.c0py');
  console.log("Found " + copyDivs.length + " C0py elements")
  
  for (i = 0; i < copyDivs.length; ++i) {
    const createTooltipDiv = document.createElement('div');
    createTooltipDiv.classList.add('tooltip');
    createTooltipDiv.id = 'tooltip';
    copyDivs[i].parentNode.insertBefore(createTooltipDiv, copyDivs[i].nextSibling);
    const tooltipDiv = document.getElementsByClassName('tooltip')[i];
    const clipboardImg = new Image();
    clipboardImg.id = 'clipboard-icon';
    clipboardImg.classList.add('c0py-icon');
    clipboardImg.src = 'https://secopsstorageacc.blob.core.windows.net/icons/clipboard.svg';
    clipboardImg.alt = 'Copy this reference to Clipboard';
    tooltipDiv.appendChild(clipboardImg);
    clipboardImg.addEventListener("click", copyToClipboard, false);
    const createTooltipText = document.createElement('span');
    createTooltipText.classList.add('tooltiptext');
    createTooltipText.id = 'tooltip-text';
    createTooltipText.innerHTML = "Copy to clipboard";
    tooltipDiv.appendChild(createTooltipText);
    const text = copyDivs[i].innerHTML;
    document.getElementsByClassName('c0py-icon')[i].addEventListener("click", function() {newCopy(text)}, false);
    
    function newCopy (text) {

      // Copies a string to the clipboard. Must be called from within an 
      // event handler such as click. May return false if it failed, but
      // this is not always possible. Browser support for Chrome 43+, 
      // Firefox 42+, Safari 10+, Edge and IE 10+.
      // IE: The clipboard feature may be disabled by an administrator. By
      // default a prompt is shown the first time the clipboard is 
      // used (per session).
      if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text); 
    
      } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
    
        try {
          return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
          console.warn("Copy to clipboard failed.", ex);
          return false;
        } finally {
          document.body.removeChild(textarea);
        }
      }
    }
  } 
}
// the older function
function copyToClipboard() {
  const copyDivs = document.querySelectorAll('.c0py');
  for (i = 0; i < copyDivs.length; ++i) {
  //if (copyDivs && copyDivs.dataset.copy == 'true') {
    const range = document.createRange();
    range.selectNode(document.getElementsByClassName('c0py')[0]);
    window.getSelection().addRange(range);
    document.execCommand("copy");
  if (document.execCommand("copy")) {
    document.getElementsByClassName('tooltiptext')[0].innerHTML = "Copied!!!";
    console.log("Copied: " + document.getElementsByClassName('c0py')[0].innerHTML);
  } else {
    document.getElementsByClassName('tooltiptext')[0].innerHTML = "Copy failed";
    console.log("Copy failed");
    }
  }
}