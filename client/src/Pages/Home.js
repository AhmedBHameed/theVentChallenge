import React, { Component } from "react";
import styles from "./Home.scss";

// Components
import InputBox from "../Components/InputBox/InputBox";
import EmailsTable from "../Components/EmailsTable/EmailsTable";
import JokeBox from "../Components/JokeBox/JokeBox";

// Services
import http from "../Services/Http";
import emailService from "../Services/EmailsValidation";

class Home extends Component {
  state = {
    emails: [],
    joke: ""
  };

  componentWillMount() {
    this.apiJoke();
  }

  apiJoke = () => {
    http
      .get("joks/random")
      .then(resp => resp.data)
      .then(
        res => {
          this.setState({ joke: res.value.joke });
        },
        error => {
          console.error(error.response.data);
        }
      );
    this.setState({ emails: emailService.grab() });
  };

  onEmitEmail = (email, error) => {
    if (!error) {
      emailService.store(email);
      this.setState({ emails: emailService.grab() });
    }
  };

  onDeleteEmail = index => {
    const emails = emailService.remove(index);
    this.setState({ emails });
  };

  sendAJoke = jokeObj => {
    jokeObj.emails = emailService.grab().join(", ");
    http
      .post("joks/send", jokeObj)
      .then(resp => resp.data)
      .then(
        res => {
          // this.setState({ joke: res.value.joke });
          console.log(res);
        },
        error => {
          console.error(error.response.data);
        }
      );
  };

  render() {
    const { emails, joke } = this.state;
    return (
      <div className="home_container">
        <div className="jokeBox_container">
          <JokeBox
            joke={joke}
            sendAJoke={this.sendAJoke}
            newJoke={this.apiJoke}
          />
        </div>
        <div className="email_container">
          <div className="separator">
            <InputBox emitEmail={this.onEmitEmail} />
          </div>
          <div className="separator">
            <EmailsTable emails={emails} onDelete={this.onDeleteEmail} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
