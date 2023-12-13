function copyCode(button) {
    const codeContainer = button.previousElementSibling;
    const codeText = codeContainer.innerText || codeContainer.textContent;
  
    navigator.clipboard.writeText(codeText)
      .then(() => {
        // Provide feedback to the user (e.g., change button text)
        button.innerText = 'Code Copied!';
        setTimeout(() => {
          button.innerText = 'Copy Code';
        }, 2000);
      })
      .catch(err => {
        console.error('Unable to copy text to clipboard', err);
        });
}
  