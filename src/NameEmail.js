import React from "react";

export default class NameEmail extends React.Component {
  render() {
    return (
      <div className="nameEmail">
        <input
          type="text"
          placeholder="User Name"
          onChange={(event) => this.props.getUserName(event.target.value)}
        />
        <input
          type="text"
          placeholder="User Email"
          onChange={(event) => this.props.getUserEmail(event.target.value)}
        />
      </div>
    );
  }
}
