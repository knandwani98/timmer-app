import React, { Component } from "react";

class Countdown extends Component {
  state = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    isRunning: false,
  };

  handleZero = (time) => {
    if (time < 10) {
      return `0${time}`;
    }
    return time;
  };

  handlePlus = (input) => {
    const { isRunning, timmer } = this.state;
    let prevState = timmer;

    if (!isRunning) {
      prevState[input] = prevState[input] + 1;

      this.setState({
        timer: prevState,
      });
    }
  };

  handleMinus = (input) => {
    const { isRunning, timer } = this.state;
    let prevState = timer;

    if (!isRunning && timer[input] > 0) {
      prevState[input] = prevState[input] - 1;

      this.setState({
        timer: prevState,
      });
    }
  };

  componentDidUpdate = () => {
    const { isRunning, timer } = this.state;
    if (isRunning) {
      this.interval = setInterval(() => {
        if (timer.seconds > 0) {
          this.setState({ timer: { ...timer, seconds: timer.seconds - 1 } });
        } else if (timer.minutes > 0) {
          this.setState({
            timer: { ...timer, minutes: timer.minutes - 1, seconds: 59 },
          });
        } else if (timer.hours > 0) {
          this.setState({
            timer: {
              ...timer,
              hours: timer.hours - 1,
              minutes: 59,
              seconds: 59,
            },
          });
        }
      }, 1000);
    }
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  handleStart = () => {
    const { timer } = this.state;

    if (timer.hours !== 0 || timer.minutes !== 0 || timer.seconds !== 0) {
      this.setState({
        isRunning: true,
      });
    } else {
      window.alert("Countdown Ended");
    }
  };

  handleStop = () => {
    this.setState({
      isTimerOn: false,
      isTimerStop: true,
    });
  };

  handleResume = () => {
    this.setState({
      isTimerOn: true,
      isTimerStop: false,
    });
  };

  handleReset = () => {
    this.setState({
      timerReset: true,
      timer: {
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    });
  };

  render() {
    let { toggleCard } = this.props;
    let { hours, minutes, seconds } = this.state;

    return (
      <>
        <div className="card">
          {/* Close Button */}
          <button
            onClick={() => {
              toggleCard("countdown");
            }}
            className="close"
          >
            x
          </button>

          <h3>Countdown</h3>

          <h2>Hours:Minutes:Seconds</h2>

          <div>
            <button
              onClick={() => this.handlePlus("hours")}
              className="arrow up"
            >
              ⬆
            </button>
            <button
              onClick={() => this.handlePlus("minutes")}
              className="arrow up"
            >
              ⬆
            </button>
            <button
              onClick={() => this.handlePlus("seconds")}
              className="arrow up"
            >
              ⬆
            </button>
          </div>

          <h3>
            {this.handleZero(hours)} : {this.handleZero(minutes)} :{" "}
            {this.handleZero(seconds)}
          </h3>

          <div>
            <button
              // onClick={() => this.handleMinus("hours")}
              className="arrow down"
            >
              ⬇
            </button>
            <button
              // onClick={() => this.handleMinus("minutes")}
              className="arrow down"
            >
              ⬇
            </button>
            <button
              // onClick={() => this.handleMinus("seconds")}
              className="arrow down"
            >
              ⬇
            </button>
          </div>

          <div className="start flex">
            {/* {!this.state.isTimerOn && !this.state.isTimerStop && (
              <button onClick={this.handleStart}>Start</button>
            )}

            {this.state.isTimerOn && (
              <button onClick={this.handleStop}>Stop</button>
            )}

            {!this.state.isTimerOn && this.state.isTimerStop && ( */}
            <>
              <button onClick={this.handleResume}>Resume</button>
              <button onClick={this.handleReset}>Reset</button>
            </>
            {/* )} */}
          </div>
        </div>
      </>
    );
  }
}

export default Countdown;
