import React, { Component } from "react";

export default class Display extends Component {
  render() {
    const {
      yourName,
      soName,
      yourBday,
      soBday,
      meetDate,
      datingDate,
      marriedDate
    } = this.props.data;
    if (
      yourName === null ||
      soName === null ||
      yourBday === null ||
      soBday === null ||
      meetDate === null
    ) {
      return (
        <h1>
          Please provide at least two names, two birthdays, and a meeting day.
        </h1>
      );
    }
    if (
      yourName !== null &&
      soName !== null &&
      yourBday !== null &&
      soBday !== null &&
      meetDate !== null &&
      datingDate === null &&
      marriedDate === null
    ) {
      return (
        <div>
          <h1>Display</h1>
          <ul>
            <li>
              <strong>Name: </strong>
              {yourName}
            </li>
            <li>
              <strong>Significant Other's Name: </strong>
              {soName}
            </li>
            <li>
              <strong>Birthday: </strong>
              {yourBday}{" "}
            </li>
            <li>
              <strong>Significant Other's Birthday: </strong>
              {soBday}{" "}
            </li>
            <li>
              <strong>Date You Met: </strong>
              {meetDate}{" "}
            </li>
          </ul>
        </div>
      );
    }
    if (
      yourName !== null &&
      soName !== null &&
      yourBday !== null &&
      soBday !== null &&
      meetDate !== null &&
      datingDate !== null &&
      marriedDate === null
    ) {
      return (
        <div>
          <h1>Display</h1>
          <ul>
            <li>
              <strong>Name: </strong>
              {yourName}
            </li>
            <li>
              <strong>Significant Other's Name: </strong>
              {soName}
            </li>
            <li>
              <strong>Birthday: </strong>
              {yourBday}{" "}
            </li>
            <li>
              <strong>Significant Other's Birthday: </strong>
              {soBday}{" "}
            </li>
            <li>
              <strong>Date You Met: </strong>
              {meetDate}{" "}
            </li>
            <li>
              <strong>Date You Started Dating: </strong>
              {datingDate}{" "}
            </li>
          </ul>
        </div>
      );
    }
    if (
      yourName !== null &&
      soName !== null &&
      yourBday !== null &&
      soBday !== null &&
      meetDate !== null &&
      datingDate !== null &&
      marriedDate !== null
    ) {
      return (
        <div>
          <h1>Display</h1>
          <ul>
            <li>
              <strong>Name: </strong>
              {yourName}
            </li>
            <li>
              <strong>Significant Other's Name: </strong>
              {soName}
            </li>
            <li>
              <strong>Birthday: </strong>
              {yourBday}{" "}
            </li>
            <li>
              <strong>Significant Other's Birthday: </strong>
              {soBday}{" "}
            </li>
            <li>
              <strong>Date You Met: </strong>
              {meetDate}{" "}
            </li>
            <li>
              <strong>Date You Started Dating: </strong>
              {datingDate}{" "}
            </li>
            <li>
              <strong>Date You were Married: </strong>
              {marriedDate}{" "}
            </li>
          </ul>
        </div>
      );
    }
  }
}
