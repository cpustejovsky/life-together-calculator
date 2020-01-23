import React, { Component } from "react";

export default class Display extends Component {
  render() {
    const {
      name,
      sigOthName,
      bday,
      sigOthBday,
      dateMet,
      dateDating,
      dateMarried
    } = this.props.data;
    return (
      <div>
        <h1>Display</h1>
        <ul>
          <li>
            <strong>Name: </strong>
            {name}
          </li>
          <li>
            <strong>Significant Other's Name: </strong>
            {sigOthName}
          </li>
          <li>
            <strong>Birthday: </strong>
            {bday.day} {bday.month}, {bday.year}{" "}
          </li>
          <li>
            <strong>Significant Other's Birthday: </strong>
            {sigOthBday.day} {sigOthBday.month}, {sigOthBday.year}{" "}
          </li>
          <li>
            <strong>Date You Met: </strong>
            {dateMet.day} {dateMet.month}, {dateMet.year}{" "}
          </li>
          <li>
            <strong>Date You Started Dating: </strong>
            {dateDating.day} {dateDating.month}, {dateDating.year}{" "}
          </li>
          <li>
            <strong>Date You Were Married: </strong>
            {dateMarried.day} {dateMarried.month}, {dateMarried.year}{" "}
          </li>
        </ul>
      </div>
    );
  }
}
