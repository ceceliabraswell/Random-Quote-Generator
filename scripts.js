const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiURL = "https://api.quotable.io/random"; //assigns api website to const

async function getQuote(){

    try {
        btnEl.innerText = "Loading..."; //button displays loading when clicked
        btnEl.disabled = true;  //button is disabled after being clicked
        quoteEl.innerText = "Updating...";
        authorEl.innerText = "Updating...";

        const response = await fetch(apiURL); //fetches quote from URL.
        const data = await response.json(); //converts response to json
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        
        quoteEl.innerText = quoteContent; 
        authorEl.innerText = "~ " + quoteAuthor; 

        btnEl.innerText = "Get a quote"; //after quote loads, button returns to original text
        btnEl.disabled = false; //after quote loads, button no longer disabled
    } catch (error) {
        quoteEl.innerText = "An error has occurred. Please try again." //displays error msg if offline
        authorEl.innerText = "Error." //displays error if offline
        btnEl.innerText = "Get a quote";
        btnEl. disabled = false;
    }
}

getQuote(); //displays a quote when website first loads

btnEl.addEventListener('click', getQuote);