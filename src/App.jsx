import React, { Component } from "react";
import "./App.scss";
import Display from "./components/Display.jsx";
import Form from "./components/Form.jsx";
import { Container } from "react-bootstrap";
export default class App extends Component {
  state = {
    data: {
      yourName: "Charles",
      soName: "Catherine",
      yourBday: "1992-12-18",
      soBday: "1994-10-12",
      meetDate: "2014-02-19",
      datingDate: "2014-03-10",
      marriedDate: "2018-01-06"
    }
  };

  millisToDays = millis => {
    var days = Math.floor(millis / 86400000);
    return days;
  };

  now = new Date();

  age_user = this.millisToDays(this.now - new Date(this.state.data.yourBday));
  age_so = this.millisToDays(this.now - new Date(this.state.data.soBday));
  age_meet = this.millisToDays(this.now - new Date(this.state.data.meetDate));
  age_dating = this.millisToDays(
    this.now - new Date(this.state.data.datingDate)
  );
  age_married = this.millisToDays(
    this.now - new Date(this.state.data.marriedDate)
  );
  percent_user = ((this.age_meet / this.age_user) * 100).toFixed(2) + "%";
  percent_so = ((this.age_meet / this.age_so) * 100).toFixed(2) + "%";

  handleUpdate = data => {
    this.setState({ data: data });
  };
  render() {
    console.log(this.state.data);
    console.log(new Date("1992-12-18"));
    console.log(this.age_meet);
    return (
      <div>
        <Container className="view">
          <h1 className="title">Life Together Calculator</h1>
          <Display
            data={this.state.data}
            age_meet={this.age_meet}
            age_dating={this.age_dating}
            age_married={this.age_married}
            percent_user={this.percent_user}
            percent_so={this.percent_so}
          />
          <Form onUpdate={this.handleUpdate} />
        </Container>
      </div>
    );
  }
}
