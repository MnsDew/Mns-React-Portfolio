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
    this.state = { titleIndex: 0, fade: "in" };
  }

  componentDidMount() {
    this.startAnimation();
  }

  componentWillUnmount() {
    clearTimeout(this.fadeTimeout);
    clearTimeout(this.switchTimeout);
  }

  startAnimation = () => {
    // Fade in
    this.setState({ fade: "in" });
    this.fadeTimeout = setTimeout(() => {
      // Stay visible, then fade out
      this.setState({ fade: "out" });
      this.switchTimeout = setTimeout(() => {
        // Switch to next title and repeat
        this.setState(
          prev => ({
            titleIndex: (prev.titleIndex + 1) % TITLES.length,
            fade: "in"
          }),
          this.startAnimation
        );
      }, 600); // fade out duration
    }, 2800); // visible duration
  };

  render() {
    const { titleIndex, fade } = this.state;
    return (
      <div className="title-container">
        <p className={`futuristic-title title-fade-${fade}`}>
          {TITLES[titleIndex]}
        </p>
      </div>
    );
  }
}

export default Title;
