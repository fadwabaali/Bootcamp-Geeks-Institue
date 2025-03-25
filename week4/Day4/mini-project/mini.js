const quotes = [
    { id: 0, quote: "The only way to do great work is to love what you do.", author: "Steve Jobs", likes: 0 },
    { id: 1, quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer", likes: 0 },
    { id: 2, quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt", likes: 0 },
    { id: 3, quote: "Another quote from steve", author: "Steve Jobs", likes: 0 },
    { id: 4, quote: "Another quote from steve1", author: "Steve Jobs", likes: 0 },
    { id: 5, quote: "Another quote from steve2", author: "Steve Jobs", likes: 0 },
    { id: 6, quote: "Another quote from steve3", author: "Steve Jobs", likes: 0 },
];

let lastQuoteId = null;
let filteredQuotes = [];
let currentQuoteIndex = 0;

const generateQuote = () => {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteId);

    lastQuoteId = randomIndex;
    const quote = quotes[randomIndex];

    displayQuote(quote);
};

const displayQuote = (quote) => {
    document.getElementById('quote-text').textContent = quote.quote;
    document.getElementById('quote-author').textContent = `- ${quote.author}`;
    document.getElementById('like-count').textContent = `Likes: ${quote.likes}`;
};

document.getElementById('generate-quote').addEventListener('click', generateQuote);

document.getElementById('add-quote-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newQuoteText = document.getElementById('new-quote').value;
    const newAuthorText = document.getElementById('new-author').value;
    const newQuote = {
        id: quotes.length,
        quote: newQuoteText,
        author: newAuthorText,
        likes: 0
    };
    quotes.push(newQuote);
    document.getElementById('new-quote').value = '';
    document.getElementById('new-author').value = '';
});

document.getElementById('char-count').addEventListener('click', () => {
    const quoteText = document.getElementById('quote-text').textContent;
    alert(`Character Count (with spaces): ${quoteText.length}`);
});

document.getElementById('char-count-no-spaces').addEventListener('click', () => {
    const quoteText = document.getElementById('quote-text').textContent;
    const charCountNoSpaces = quoteText.replace(/\s/g, '').length;
    alert(`Character Count (no spaces): ${charCountNoSpaces}`);
});

document.getElementById('word-count').addEventListener('click', () => {
    const quoteText = document.getElementById('quote-text').textContent;
    const wordCount = quoteText.split(/\s+/).length;
    alert(`Word Count: ${wordCount}`);
});

document.getElementById('like-quote').addEventListener('click', () => {
    const quoteText = document.getElementById('quote-text').textContent;
    const quote = quotes.find(q => q.quote === quoteText);
    if (quote) {
        quote.likes += 1;
        document.getElementById('like-count').textContent = `Likes: ${quote.likes}`;
    }
});

document.getElementById('filter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const author = document.getElementById('filter-author').value.trim().toLowerCase();
    filteredQuotes = quotes.filter(q => q.author.toLowerCase() === author);
    currentQuoteIndex = 0;
    if (filteredQuotes.length > 0) {
        displayQuote(filteredQuotes[currentQuoteIndex]);
        document.getElementById('prev-quote').style.display = 'inline';
        document.getElementById('next-quote').style.display = 'inline';
    } else {
        alert('No quotes found for this author.');
        document.getElementById('prev-quote').style.display = 'none';
        document.getElementById('next-quote').style.display = 'none';
    }
});

document.getElementById('prev-quote').addEventListener('click', () => {
    if (currentQuoteIndex > 0) {
        currentQuoteIndex--;
        displayQuote(filteredQuotes[currentQuoteIndex]);
    }
});

document.getElementById('next-quote').addEventListener('click', () => {
    if (currentQuoteIndex < filteredQuotes.length - 1) {
        currentQuoteIndex++;
        displayQuote(filteredQuotes[currentQuoteIndex]);
    }
});