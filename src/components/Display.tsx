import React from "react";
import _ from "lodash";
import { Col, Row } from "react-bootstrap";
import "../App.scss";

type Props = {
  yourName: string,
  soName: string,
  yourBday: string,
  soBday: string,
  meetDate: string,
  datingDate: string,
  marriedDate: string,
  ageMeet: number,
  ageDating: number,
  ageMarried: number,
  percentUser: string,
  percentSo: string,
}

const Display = (props: Props) => {
  const {
    yourName,
    soName,
    yourBday,
    soBday,
    meetDate,
    datingDate,
    marriedDate,
    ageMeet,
    ageDating,
    ageMarried,
    percentUser,
    percentSo,
  } = props;
  const meeting = [yourName, soName, yourBday, soBday, meetDate];
  const dating = [yourName, soName, yourBday, soBday, meetDate, datingDate];
  const married = [
    yourName,
    soName,
    yourBday,
    soBday,
    meetDate,
    datingDate,
    marriedDate,
  ];
  let insufficientInput = meeting.some((el) => _.isEmpty(el));
  let meetingInput = meeting.every((el) => !_.isEmpty(el));
  let datingInput = dating.every((el) => !_.isEmpty(el));
  let marriedInput = married.every((el) => !_.isEmpty(el));
  if (marriedInput) {
    return (
      <Row className="display">
        <Col md={5} className="display__box">
          {" "}
          <p>
            {yourName} has known {soName} <strong>{percentUser}</strong> of
            their lives.
          </p>
        </Col>
        <Col md={5} className="display__box">
          {" "}
          <p>
            {soName} has known {yourName} <strong>{percentSo}</strong> of their
            lives.
          </p>
        </Col>
        <Col md={6} className="display__box">
          <p>
            They met <strong>{ageMeet}</strong> days ago.
          </p>
          <p>
            They started dating <strong>{ageDating}</strong> days ago.
          </p>
          <p>
            They were married <strong>{ageMarried}</strong> days ago.
          </p>
        </Col>
      </Row>
    );
  } else if (datingInput) {
    return (
      <Row className="display">
        <Col md={5} className="display__box">
          {" "}
          <p>
            {yourName} has known {soName} <strong>{percentUser}</strong> of
            their lives.
          </p>
        </Col>
        <Col md={5} className="display__box">
          {" "}
          <p>
            {soName} has known {yourName} <strong>{percentSo}</strong> of their
            lives.
          </p>
        </Col>
        <Col md={6} className="display__box">
          <p>
            They met <strong>{ageMeet}</strong> days ago.
          </p>
          <p>
            They started dating <strong>{ageDating}</strong> days ago.
          </p>
        </Col>
      </Row>
    );
  } else if (meetingInput) {
    return (
      <Row className="display">
        <Col md={5} className="display__box">
          {" "}
          <p>
            {yourName} has known {soName} <strong>{percentUser}</strong> of
            their lives.
          </p>
        </Col>
        <Col md={5} className="display__box">
          {" "}
          <p>
            {soName} has known {yourName} <strong>{percentSo}</strong> of their
            lives.
          </p>
        </Col>
        <Col md={6} className="display__box">
          <p>
            They met <strong>{ageMeet}</strong> days ago.
          </p>
        </Col>
      </Row>
    );
  } else if (insufficientInput) {
    return (
      <h3 className="error">
        Please provide at least <strong>two names</strong>,{" "}
        <strong>two birthdays</strong>, and <strong>the date y'all met</strong>.
      </h3>
    );
  } else {
    return (
      <h3 className="error">
        Something went wrong. Please contact cpustejovsky about this issue (link
        in the footer)
      </h3>
    );
  }
};

export default Display;
