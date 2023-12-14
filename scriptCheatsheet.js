function copyCode(button) {
    const codeContainer = button.previousElementSibling;
    const codeText = codeContainer.innerText || codeContainer.textContent;
  
    navigator.clipboard.writeText(codeText)
      .then(() => {
        // Tells user when the code is copied 
        button.innerText = 'Code Copied!';
        setTimeout(() => {
          button.innerText = 'Copy Code';
        }, 2000);
      })
      .catch(err => {
        console.error('Unable to copy text to clipboard', err);
        });
}
  