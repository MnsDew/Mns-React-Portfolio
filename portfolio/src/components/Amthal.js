import React, { Component } from "react";
import '../Amthal.css';

class Amthal extends Component {
  constructor() {
    super();
    this.state = { 
      mathal: {}, 
      TenQuotes: [],
      loading: false, // To manage the loading state
      error: null,    // For any fetch errors
    };
  }

  componentDidMount() {
    this.fetchRandomQuote();
  }

  // Fetch random quote when component mounts
  fetchRandomQuote = () => {
    this.setState({ loading: true });
    fetch("mns70-react-portfolio.vercel.app/quotes/random")
    // old link https://mns-react-portfolio.onrender.com

      .then((response) => response.json())
      .then((json) => this.setState({ mathal: json, loading: false }))
      .catch((error) => this.setState({ error, loading: false }));
  }

  // Fetch ten more quotes when button is clicked
  fetchAmthal = () => {
    this.setState({ loading: true });
    fetch("https://mns70-react-portfolio.vercel.app/quotes/ten")
    // old link https://mns-react-portfolio.onrender.com
    // 
      .then((response) => response.json())
      .then((json) => this.setState({ TenQuotes: json, loading: false }))
      .catch((error) => this.setState({ error, loading: false }));
  }

  render() {
    const { mathal, TenQuotes, loading, error } = this.state;

    return (
      <div className="amthal-container">
        <h2>Today's Quote</h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <div className="quote-card">{mathal.title || "No quote available"}</div>
        )}
        <hr />
        <h3 className="amthal-title">Find Your Next Favorite Quote !</h3>
        <button className="amthal-button" onClick={this.fetchAmthal}>
          More...Quotes
        </button>

        {TenQuotes.length > 0 && (
          <div>
            {TenQuotes.map((mathal) => (
              <div key={mathal.id} className="quote-card">
                {mathal.title}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Amthal;
