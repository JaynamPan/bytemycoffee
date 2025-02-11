const homeUrl = "./python/lesson1/lesson1-en.md"
var md = null
function updateFile(url) {
    fetch(url)
        .then(response => response.text())  // Get the file as text
        .then(markdownText => {
            var resultHtml = md.render(markdownText);
            document.getElementById('markdown-content').innerHTML = resultHtml;
        })
        .catch(error => console.error('Failed to load content', error));
}

function changeLanguage() {
    var language = document.getElementById("language-selector").value;
    updateFile(homeUrl.replace("en", language))
}

// execute this after the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize MarkdownIt
    md = window.markdownit ? window.markdownit() : new MarkdownIt();

    updateFile(homeUrl)


});
