const quotes = [
    {
        quote: "Good",
        author: "Rick",
    },
    {
        quote: "Good Good",
        author: "Rick Rick",
    },
    {
        quote: "Sweet",
        author: "weidon",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;