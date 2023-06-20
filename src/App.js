import React, { Component } from "react";
import Stopwatch from "./Components/Stopwatch";
import Countdown from "./Components/Countdown";

class App extends Component {
  constructor(prop) {
    super(prop);

    this.state = {
      stopwatch: false,
      countdown: false,
    };
  }

  toggleCard = (watch) => {
    let prevState = this.state;
    prevState[watch] = !prevState[watch];
    this.setState({
      watch: prevState,
    });
  };

  render() {
    return (
      <>
        <section className="main">
          <h1>⌛️ Timers ⏳</h1>
          <div className=" card-container flex nav">
            {!this.state.stopwatch ? (
              <button onClick={() => this.toggleCard("stopwatch")}>
                Show Stopwatch
              </button>
            ) : (
              <Stopwatch toggleCard={this.toggleCard} />
            )}

            {!this.state.countdown ? (
              <button onClick={() => this.toggleCard("countdown")}>
                Show Countdown
              </button>
            ) : (
              <Countdown toggleCard={this.toggleCard} />
            )}
          </div>
        </section>
      </>
    );
  }
}

export default App;
