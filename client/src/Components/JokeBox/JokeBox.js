import React, { Component } from "react";
import "./JokeBox.scss";
import PropTypes from "prop-types";

// Services
import http from "../../Services/Http";

class JokeBox extends Component {
  static propTypes = {
    sendAJoke: PropTypes.func,
    newJoke: PropTypes.func,
    joke: PropTypes.string
  };

  static defaultProps = {
    sendAJoke: obj => {},
    newJoke: obj => {},
    joke: ""
  };

  jokeSubmit = e => {
    e.preventDefault();
    const { sendAJoke, joke } = this.props;

    sendAJoke({ joke });
    return false;
  };

  render() {
    const { joke, newJoke } = this.props;
    return (
      <div className="JokeBox">
        <form className="JokeBox_form" onSubmit={this.jokeSubmit}>
          <input
            className="JokeBox_refresh"
            type="button"
            value="New Joke"
            onClick={newJoke}
          />
          <textarea
            className="JokeBox_textarea"
            min="5"
            max="10"
            placeholder="Your next Joke here"
            value={joke}
            readOnly
          />
          <input
            className="JokeBox_send"
            type="submit"
            value="Make them laugh ;)"
          />
        </form>
      </div>
    );
  }
}

export default JokeBox;
