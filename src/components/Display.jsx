import React, { Component } from "react";

export default class Display extends Component {
  render() {
    let {
      yourName,
      soName,
      yourBday,
      soBday,
      meetDate,
      datingDate,
      marriedDate
    } = this.props.data;
    let age_meet = this.props.age_meet;
    let age_dating = this.props.age_dating;
    let age_married = this.props.age_married;
    let percent_user = this.props.percent_user;
    let percent_so = this.props.percent_so;

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
          

          <p>
            {yourName} has known {soName} <strong>{percent_user}</strong> of their lives.
          </p>
          <p>
            {soName} has known {yourName} <strong>{percent_so}</strong> of their lives.
          </p>
          <p>
            They met <strong>{age_meet}</strong> days ago.
          </p>
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
          <p>
            {yourName} has known {soName} <strong>{percent_user}</strong> of their lives.
          </p>
          <p>
            {soName} has known {yourName} <strong>{percent_so}</strong> of their lives.
          </p>
          <p>
            They met <strong>{age_meet}</strong> days ago.
          </p>
          <p>
            They started dating <strong>{age_dating} days ago.</strong>
          </p>
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
          <p>
            {yourName} has known {soName} <strong>{percent_user}</strong> of their lives.
          </p>
          <p>
            {soName} has known {yourName} <strong>{percent_so}</strong> of their lives.
          </p>
          <p>
            They met <strong>{age_meet}</strong> days ago.
          </p>
          <p>
            They started dating <strong>{age_dating}</strong> days ago.
          </p>
          <p>
            They were married <strong>{age_married}</strong> days ago.
          </p>
        </div>
      );
    }
  }
}
