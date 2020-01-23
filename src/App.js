import React, { Component } from "react";
import "./App.css";
import Display from "./components/Display.jsx";
import Form from "./components/Form.jsx";

export default class App extends Component {
  state = {
    name: "Charles",
    sigOthName: "Catherine",
    bday: {
      day: 18,
      month: "December",
      year: 1992
    },
    sigOthBday: {
      day: 12,
      month: "November",
      year: 1994
    },
    dateMet: {
      day: 19,
      month: "February",
      year: 2014
    },
    dateDating: {
      day: 10,
      month: "March",
      year: 2014
    },
    dateMarried: {
      day: 6,
      month: "January",
      year: 2018
    }
  }
  render() {
    return (
      <div>
        <h1>Life Together Calculator</h1>
        <Display data={this.state} />
        <Form />
      </div>
    );
  }
}