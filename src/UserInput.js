import React from "react";
import NameEmail from "./NameEmail";
import City from "./City";

export default class UserDetails extends React.Component {
  state = {
    name: "",
    email: "",
    city: ""
  };
  render() {
    return (
      <div className="UserInput">
        <NameEmail
          getUserName={(name) => this.setState({ name: name })}
          getUserEmail={(email) => this.setState({ email: email })}
        />
        <City getUserCity={(city) => this.setState({ city: city })} />
        <button onClick={() => this.props.getUserData(this.state)}>
          SUBMIT
        </button>
      </div>
    );
  }
}
