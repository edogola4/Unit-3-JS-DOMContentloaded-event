// Your code here

// Set up a DOMContentLoaded event listener to detect when the HTML page has loaded
// and the document is ready to be manipulated.
document.addEventListener("DOMContentLoaded", function() {
    // Select the paragraph element with the id "text"
    const paragraph = document.getElementById("text");
    
    // Change the text content of the paragraph to "This is really cool!"
    paragraph.textContent = "This is really cool!"; // Use textContent to modify the content
});
