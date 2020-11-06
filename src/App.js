import React from "react";
import "./styles.css";
import UserInput from "./UserInput";
import UserDetails from "./UserDetails";
import Cities from "./Cities";

export default class App extends React.Component {
  state = {
    userDetails: [],
    cities: []
  };
  addUserDataToList = (user) => {
    let users = this.state.userDetails.slice();
    let cities = this.state.cities.slice();
    if (cities.indexOf(user.city) === -1) {
      cities.push(user.city);
    }
    users.push(user);
    this.setState({
      userDetails: users,
      cities: cities
    });
  };
  render() {
    return (
      <div className="App">
        <UserInput getUserData={(user) => this.addUserDataToList(user)} />
        <div className="lists">
          <UserDetails userDetails={this.state.userDetails} />
          <Cities cities={this.state.cities} />
        </div>
      </div>
    );
  }
}
