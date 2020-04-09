import React from "react";
import { Col, Row } from "react-bootstrap";
import "../App.scss";

const Display = (props) => {
  const {
    yourName,
    soName,
    yourBday,
    soBday,
    meetDate,
    datingDate,
    marriedDate,
  } = props;
  const ageMeet = props.ageMeet;
  const ageDating = props.ageDating;
  const ageMarried = props.ageMarried;
  const percentUser = props.percentUser;
  const percentSo = props.percentSo;

  const inputs = {
    insufficient:
      yourName === null ||
      soName === null ||
      yourBday === null ||
      soBday === null ||
      meetDate === null,
    meeting:
      yourName !== null &&
      soName !== null &&
      yourBday !== null &&
      soBday !== null &&
      meetDate !== null &&
      datingDate === null &&
      marriedDate === null,
    dating:
      yourName !== null &&
      soName !== null &&
      yourBday !== null &&
      soBday !== null &&
      meetDate !== null &&
      datingDate !== null &&
      marriedDate === null,
    married:
      yourName !== null &&
      soName !== null &&
      yourBday !== null &&
      soBday !== null &&
      meetDate !== null &&
      datingDate !== null &&
      marriedDate !== null,
  };

  if (inputs.insufficient) {
    return (
      <h3 class="error">
        Please provide at least <strong>two names</strong>,{" "}
        <strong>two birthdays</strong>, and <strong>the date y'all met</strong>.
      </h3>
    );
  }
  if (inputs.meeting) {
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
  }
  if (inputs.dating) {
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
  }
  if (inputs.married) {
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
  }
};

export default Display;
