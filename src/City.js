import React from "react";

export default class UserDetails extends React.Component {
  render() {
    return (
      <div className="city">
        <input
          type="text"
          placeholder="User city"
          onChange={(event) => this.props.getUserCity(event.target.value)}
        />
      </div>
    );
  }
}
