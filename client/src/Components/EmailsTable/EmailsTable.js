import React, { Component } from "react";
import "./EmailsTable.scss";
import PropTypes from "prop-types";

// Services
import emailService from "../../Services/EmailsValidation";

class EmailsTable extends Component {
  static propTypes = {
    emails: PropTypes.arrayOf(PropTypes.string),
    onDelete: PropTypes.func
  };

  static defaultProps = {
    emails: [],
    onDelete: index => {}
  };

  render() {
    const { emails, onDelete } = this.props;
    return (
      <div>
        <h4 className="emailsTableHeader">Emails list to send them you joke</h4>
        <div className="EmailTable">
          <ul className="EmailTable_list">
            {emails.length ? (
              emails.map((email, i) => {
                return (
                  <li className="EmailTable_row" key={i.toString()}>
                    <div className="EmailTable_row_caption">{email}</div>
                    <div className="EmailTable_row_delete">
                      <span
                        className="EmailTable_row_delete_icon"
                        onClick={() => onDelete(i)}
                      >
                        X
                      </span>
                    </div>
                  </li>
                );
              })
            ) : (
              <li className="EmailTable_row">
                <div className="EmailTable_row_caption">No emails found!</div>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default EmailsTable;
