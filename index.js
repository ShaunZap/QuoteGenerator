
document.addEventListener('DOMContentLoaded', function () {
    getQuote();
});

async function getQuote(){
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    document.getElementById("quoteText").innerHTML ='"' + data.content + '"';
    document.getElementById("quoteAuthor").innerHTML = '-' + data.author;
}