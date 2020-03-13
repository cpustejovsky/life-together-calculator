import React, { Component } from "react";
import "./App.css";
import Display from "./components/Display.jsx";
import Form from "./components/Form.jsx";

export default class App extends Component {
  state = {
    data: {
      yourName: "Charles",
      soName: "Catherine",
      yourBday: "1992-12-08",
      soBday: "1994-10-12",
      meetDate: "2014-02-19",
      datingDate: "2014-03-10",
      marriedDate: "2018-01-06"
    }
  };

  handleUpdate = data => {
    this.setState({data: data})
  }
  render() {
    return (
      <div>
        <h1>Life Together Calculator</h1>
        <Display data={this.state.data} />
        <Form onUpdate={this.handleUpdate}/>
      </div>
    );
  }
}
