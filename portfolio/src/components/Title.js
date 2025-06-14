import React, { Component } from "react";
import "../css/Title.css";

const TITLES = [
    "Software Engineer", 
    "AI Trainer", 
    "Full-Stack Developer", 
    "English Instructor",
    "Database Engineer",
    "Data Scientist"
];

class Title extends Component {
  constructor() {
    super();
    this.state = {titleIndex: 0, fadeIn: true};
  }

  componentDidMount() {
    this.animateTitles();
    this.timeout = setTimeout(() => {
      this.setState({fadeIn: false})
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.titleInterval);
    clearTimeout(this.timeout);
  }

  animateTitles() {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
      this.setState({titleIndex, fadeIn: true});
      this.timeout = setTimeout(() => {
        this.setState({fadeIn: false})
      }, 2000);
    }, 4000);
  }

  render() {
    return (
      <div className="title-container">
        <p className={`futuristic-title ${this.state.fadeIn ? "title-fade-in" : "title-fade-out"}`}>
          {TITLES[this.state.titleIndex]}
        </p>
      </div>
    );
  }
}

export default Title;
