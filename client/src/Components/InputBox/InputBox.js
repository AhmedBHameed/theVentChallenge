import React, { Component } from "react";
import "./InputBox.scss";
import PropTypes from "prop-types";

// Services
import emailService from "../../Services/EmailsValidation";

class InputBox extends Component {
  static propTypes = {
    emitEmail: PropTypes.func
  };

  static defaultProps = {
    emitEmail: (email, error) => {}
  };

  state = {
    email: "",
    error: null
  };
  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }
  // callApi = async () => {
  //   const response = await fetch("/api/hello");
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);
  //   return body;
  // };
  // handleSubmit2 = async e => {
  //   e.preventDefault();
  //   const response = await fetch("/api/world", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ post: this.state.post })
  //   });
  //   const body = await response.text();
  //   this.setState({ responseToPost: body });
  // };

  handleSubmit = e => {
    e.preventDefault();
    const { email } = this.state;
    const { emitEmail } = this.props;
    let error = null;
    if (!emailService.isValid(email)) {
      error = new Error(email + " is invalid email address!");
      emitEmail("", error);
      this.setState({ error });
      return false;
    }
    if (emailService.isExists(email)) {
      error = new Error(email + " is already exists!");
      emitEmail("", error);
      this.setState({ error });
      return false;
    }
    this.setState({ error });
    emitEmail(email, null);
    return false;
  };

  onChange = ({ target: { value } }) => {
    this.setState({ email: value });
  };

  render() {
    const { email, error } = this.state;
    return (
      <div className="InputBox">
        <div className="InputBox_alert">{error && error.message}&nbsp;</div>
        <form className="InputBox_form" onSubmit={this.handleSubmit}>
          <input
            className="InputBox_form_input"
            type="email"
            value={email}
            onChange={this.onChange}
            placeholder="Add new email here"
          />
          <input
            type="submit"
            className="InputBox_form_button"
            value="Add email"
          />
        </form>
      </div>
    );
  }
}

export default InputBox;
