import React, { Component } from "react";
import "./Notification.scss";
import PropTypes from "prop-types";

class Notification extends Component {
  static propTypes = {
    message: PropTypes.string,
    notify: PropTypes.func,
    type: PropTypes.string
  };

  static defaultProps = {
    message: ""
  };

  state = {
    show: false
  };

  render() {
    const { message, type } = this.props;
    return (
      <div
        className={
          message ? `notification show ${type}` : `notification hide ${type}`
        }
      >
        <div className="notification_container">{message}</div>
      </div>
    );
  }
}

export default Notification;
