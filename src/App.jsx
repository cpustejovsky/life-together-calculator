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

  handleUpdate = data => {
    this.setState({ data: data });
  };
  render() {

    console.log(this.state.data);
    
    let now = new Date();

    let age_user = this.millisToDays(now - new Date(this.state.data.yourBday));
    let age_so = this.millisToDays(now - new Date(this.state.data.soBday));
    let age_meet = this.millisToDays(now - new Date(this.state.data.meetDate));
    let age_dating = this.millisToDays(
      now - new Date(this.state.data.datingDate)
    );
    let age_married = this.millisToDays(
      now - new Date(this.state.data.marriedDate)
    );
    let percent_user = ((age_meet / age_user) * 100).toFixed(2) + "%";
    let percent_so = ((age_meet / age_so) * 100).toFixed(2) + "%";
    
    return (
      <div>
        <Container className="view">
          <h1 className="title">Life Together Calculator</h1>
          <p>
            Add some mathematical precision to your friendship || relationship
            || marriage.
          </p>
          <Display
            data={this.state.data}
            age_meet={age_meet}
            age_dating={age_dating}
            age_married={age_married}
            percent_user={percent_user}
            percent_so={percent_so}
          />
          <h2>Try it yourself</h2>
          <hr />
          <Form onUpdate={this.handleUpdate} />
          <footer className="footer">
            <a href="https://cpustejovsky.com/" rel="noreferrer noopener">Cpustejovsky <i className="far fa-thumbs-up"></i>,{" "}
            {new Date().getFullYear()}</a>
          </footer>
        </Container>
      </div>
    );
  }
}
