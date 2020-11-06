import React from "react";

export default class UserDetails extends React.Component {
  render() {
    console.log("this props", this.props);
    return (
      <div className="userDetails">
        userDetails
        <ul>
          {this.props.userDetails.map((user, index) => {
            return (
              <li key={index}>
                {user.name},{user.email},{user.city}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
