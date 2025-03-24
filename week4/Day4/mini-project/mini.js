const quotes = [
    { id: 0, quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { id: 1, quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { id: 2, quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" }
];

let lastQuoteId = null;

const generateQuote = () => {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteId);

    lastQuoteId = randomIndex;
    const quote = quotes[randomIndex];

    document.getElementById('quote-text').textContent = quote.quote;
    document.getElementById('quote-author').textContent = `- ${quote.author}`;
};

document.getElementById('generate-quote').addEventListener('click', generateQuote);