import React, { Component } from "react";

export class Prices extends Component {
  state = { currency: "USD" };

  render() {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            Bitcoin rate for {this.props.bpi.bpi.USD.description} :{" "}
            <span className="batch badge-primary">
              {this.props.bpi.bpi.USD.code}
            </span>{" "}
            <strong>{this.props.bpi.bpi.USD.rate}</strong>
          </li>
        </ul>
      </div>
    );
  }
}

export default Prices;
