import React, { useState } from "react";
import quotes from "./quotes";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  return "#" + Array.from({ length: 6 }).map(() => letters[Math.floor(Math.random() * 16)]).join("");
};

function App() {
  const [usedQuotes, setUsedQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [color, setColor] = useState(getRandomColor());

  const getNewQuote = () => {
    let remainingQuotes = quotes.filter(q => !usedQuotes.includes(q.quote));
    if (remainingQuotes.length === 0) {
      setUsedQuotes([]);
      remainingQuotes = quotes;
    }
    const random = remainingQuotes[Math.floor(Math.random() * remainingQuotes.length)];
    setCurrentQuote(random);
    setUsedQuotes(prev => [...prev, random.quote]);
    setColor(getRandomColor());
  };

  const styles = {
    backgroundColor: color,
    color: color,
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.5s ease"
  };

  return (
    <div style={styles}>
      <div style={{ backgroundColor: "#fff", padding: "2rem", borderRadius: "10px", textAlign: "center", width: "400px" }}>
        <h1 style={{ color }}>{currentQuote.quote}</h1>
        <p>— {currentQuote.author}</p>
        <button
          onClick={getNewQuote}
          style={{ backgroundColor: color, color: "#fff", border: "none", padding: "10px 20px", cursor: "pointer", marginTop: "1rem", borderRadius: "5px" }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
