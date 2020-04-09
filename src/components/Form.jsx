import React from "react";
import { Col, Row } from "react-bootstrap";
const Form = (props) => {
  let updatedData = {
    yourName: null,
    soName: null,
    yourBday: null,
    soBday: null,
    meetDate: null,
    datingDate: null,
    marriedDate: null,
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  const onInputChange = (e) => {
    switch (e.target.name) {
      case "yourName":
        updatedData.yourName = e.target.value;
        break;
      case "soName":
        updatedData.soName = e.target.value;
        break;
      case "yourBday":
        updatedData.yourBday = e.target.value;
        break;
      case "soBday":
        updatedData.soBday = e.target.value;
        break;
      case "meetDate":
        updatedData.meetDate = e.target.value;
        break;
      case "datingDate":
        updatedData.datingDate = e.target.value;
        break;
      case "marriedDate":
        updatedData.marriedDate = e.target.value;
        break;
      default:
        break;
    }
  };
  const handleDataChange = () => {
    console.log(updatedData)
    props.onUpdate(updatedData);
  };
  return (
    <div>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <Row>
          <Col md={6}>
            {" "}
            <div className="form-group">
              <p>Your Name</p>
              <input
                onChange={(e) => onInputChange(e)}
                className="form-control"
                type="text"
                name="yourName"
                placeholder="Aragorn"
              />
            </div>
          </Col>
          <Col md={6}>
            {" "}
            <div className="form-group">
              <p>Other Person's Name</p>
              <input
                onChange={(e) => onInputChange(e)}
                className="form-control"
                type="text"
                name="soName"
                placeholder="Arwen"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            {" "}
            <div className="form-group">
              <p>Your Birthday</p>
              <input
                onChange={(e) => onInputChange(e)}
                className="form-control"
                type="date"
                name="yourBday"
              />
            </div>
          </Col>
          <Col md={6}>
            {" "}
            <div className="form-group">
              <p>Other Person's Birthday</p>
              <input
                onChange={(e) => onInputChange(e)}
                className="form-control"
                type="date"
                name="soBday"
              />
            </div>
          </Col>
        </Row>

        <div className="form-group">
          <p>Date Met</p>
          <input
            onChange={(e) => onInputChange(e)}
            className="form-control"
            type="date"
            name="meetDate"
          />
        </div>
        <div className="form-group">
          <p>Date Started Dating (If Applicable)</p>
          <input
            onChange={(e) => onInputChange(e)}
            className="form-control"
            type="date"
            name="datingDate"
          />
        </div>
        <div className="form-group">
          <p>Date Married (If Applicable)</p>
          <input
            onChange={(e) => onInputChange(e)}
            className="form-control"
            type="date"
            name="marriedDate"
          />
        </div>
        <div className="form-group">
          <button
            onClick={()=>handleDataChange()}
            className="btn btn-lg btn-primary btn-block"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
