import React, { Component } from "react";
import "./Home.scss";

// Components
import InputBox from "../Components/InputBox/InputBox";
import EmailsTable from "../Components/EmailsTable/EmailsTable";
import JokeBox from "../Components/JokeBox/JokeBox";
import Notification from "../Components/Notification/Notification";

// Services
import http from "../Services/Http";
import emailService from "../Services/EmailsValidation";

class Home extends Component {
  state = {
    emails: [],
    joke: "",
    message: ""
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
          this.triggerNotify(res.success, "success");
        },
        error => {
          this.triggerNotify(error.response.data.error.message, "error");

          console.error(error.response.data.error.message);
        }
      );
  };

  triggerNotify = (message, type) => {
    this.setState({ message, type });
    setTimeout(() => {
      this.setState({ message: "", type });
    }, 3500);
  };

  render() {
    const { emails, joke, message, type } = this.state;
    return (
      <div className="home_container">
        <div className="headCenter">
          <img
            className="smallIcon"
            src="https://media.tenor.com/images/17e91cf2991314dd78eecec4668476a0/tenor.gif"
            alt="laugh"
          />
          <h1>Make them laugh app</h1>
        </div>
        <div className="jokeBox_container">
          <JokeBox
            joke={joke}
            sendAJoke={this.sendAJoke}
            newJoke={this.apiJoke}
          />
          <Notification
            message={message}
            type={type}
            notify={this.triggerNotify}
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
