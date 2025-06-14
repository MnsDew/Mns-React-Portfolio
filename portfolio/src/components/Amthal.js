import React, { useEffect, useState } from "react";
import '../css/Amthal.css';

const Amthal = () => {
  const [mathal, setMathal] = useState({});
  const [tenQuotes, setTenQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch random quote on mount
  useEffect(() => {
    fetchRandomQuote();
    // eslint-disable-next-line
  }, []);

  const fetchRandomQuote = () => {
    setLoading(true);
    setError(null);
    fetch("https://mns70-react-portfolio.vercel.app/quotes/random")
      .then((response) => response.json())
      .then((json) => {
        setMathal(json);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const fetchAmthal = () => {
    setLoading(true);
    setError(null);
    fetch("https://mns70-react-portfolio.vercel.app/quotes/ten")
      .then((response) => response.json())
      .then((json) => {
        setTenQuotes(json);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <div className="amthal-futuristic-container">
      <h2 className="futuristic-title-glow">🌌 Today's Quote</h2>
      {loading ? (
        <div className="futuristic-spinner"></div>
      ) : error ? (
        <div className="futuristic-error">
          <p>🚨 {error.message}</p>
          <button className="futuristic-btn" onClick={fetchRandomQuote}>Retry</button>
        </div>
      ) : (
        <div className="futuristic-quote-card animate">
          <span className="futuristic-quote-text">
            {mathal.title || <span className="futuristic-empty">No quote available</span>}
          </span>
        </div>
      )}
      <hr className="futuristic-hr" />
      <h3 className="futuristic-subtitle">Find Your Next Favorite Quote!</h3>
      <button className="futuristic-btn" onClick={fetchAmthal}>
        <span>🚀 Click for More random... Quotes</span>
      </button>

      {tenQuotes.length > 0 && (
        <div className="futuristic-quotes-list">
          {tenQuotes.map((mathal, index) => (
            <div key={mathal.id || index} className="futuristic-quote-card animate">
              <span className="futuristic-quote-text">{mathal.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Amthal;
