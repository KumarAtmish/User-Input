import React from "react";

export default class UserDetails extends React.Component {
  render() {
    return (
      <div className="cities">
        cities
        <ul>
          {this.props.cities.map((city, index) => {
            return <li key={index}>{city}</li>;
          })}
        </ul>
      </div>
    );
  }
}
