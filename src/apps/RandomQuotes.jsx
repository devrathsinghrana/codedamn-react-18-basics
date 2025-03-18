import React, { useState } from "react";

const quotes = [
  "Quote 1",
  "Quote 2",
  "Quote 3",
  "Quote 4",
  "Quote 5",
  "Quote 6",
  "Quote 7",
];
const RandomQuotes = () => {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomizeQuote = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  return (
    <div>
      <h1>Quote</h1>
      <p>{quote}</p>
      <button onClick={getRandomizeQuote}>Get random quote</button>
    </div>
  );
};

export default RandomQuotes;
