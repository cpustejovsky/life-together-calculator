import React, { Component } from "react";
import "./App.css";
import Display from "./components/Display";
import Form from "./components/Form";

export default class App extends Component {
  state = {
    name: "Charles",
    sigOthName: "Catherine",
    bday: new Date("1992-12-18"),
    sigOthBday: new Date("1994-10-12"),
    dateMet: new Date("2014-02-19"),
    dateDating: new Date("2014-03-10"),
    dateMarried: new Date("2018-01-06")
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