import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import "../App.scss";

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

    const insufficientInputs =
      yourName === null ||
      soName === null ||
      yourBday === null ||
      soBday === null ||
      meetDate === null;

    const meetingInput =
      yourName !== null &&
      soName !== null &&
      yourBday !== null &&
      soBday !== null &&
      meetDate !== null &&
      datingDate === null &&
      marriedDate === null;

    const datingInput =
      yourName !== null &&
      soName !== null &&
      yourBday !== null &&
      soBday !== null &&
      meetDate !== null &&
      datingDate !== null &&
      marriedDate === null;

    const marriedInput =
      yourName !== null &&
      soName !== null &&
      yourBday !== null &&
      soBday !== null &&
      meetDate !== null &&
      datingDate !== null &&
      marriedDate !== null;

    if (insufficientInputs) {
      return (
        <h3 class="error">
          Please provide at least <strong>two names</strong>,{" "}
          <strong>two birthdays</strong>, and{" "}
          <strong>the date y'all met</strong>.
        </h3>
      );
    }
    if (meetingInput) {
      return (
        <Row className="display">
          <Col md={5} className="display__box">
            {" "}
            <p>
              {yourName} has known {soName} <strong>{percent_user}</strong> of
              their lives.
            </p>
          </Col>
          <Col md={5} className="display__box">
            {" "}
            <p>
              {soName} has known {yourName} <strong>{percent_so}</strong> of
              their lives.
            </p>
          </Col>
          <Col md={6} className="display__box">
            <p>
              They met <strong>{age_meet}</strong> days ago.
            </p>
          </Col>
        </Row>
      );
    }
    if (datingInput) {
      return (
        <Row className="display">
          <Col md={5} className="display__box">
            {" "}
            <p>
              {yourName} has known {soName} <strong>{percent_user}</strong> of
              their lives.
            </p>
          </Col>
          <Col md={5} className="display__box">
            {" "}
            <p>
              {soName} has known {yourName} <strong>{percent_so}</strong> of
              their lives.
            </p>
          </Col>
          <Col md={6} className="display__box">
            <p>
              They met <strong>{age_meet}</strong> days ago.
            </p>
            <p>
              They started dating <strong>{age_dating}</strong> days ago.
            </p>
          </Col>
        </Row>
      );
    }
    if (marriedInput) {
      return (
        <Row className="display">
          <Col md={5} className="display__box">
            {" "}
            <p>
              {yourName} has known {soName} <strong>{percent_user}</strong> of
              their lives.
            </p>
          </Col>
          <Col md={5} className="display__box">
            {" "}
            <p>
              {soName} has known {yourName} <strong>{percent_so}</strong> of
              their lives.
            </p>
          </Col>
          <Col md={6} className="display__box">
            <p>
              They met <strong>{age_meet}</strong> days ago.
            </p>
            <p>
              They started dating <strong>{age_dating}</strong> days ago.
            </p>
            <p>
              They were married <strong>{age_married}</strong> days ago.
            </p>
          </Col>
        </Row>
      );
    }
  }
}
