import React from "react";
import { Col, Row } from "react-bootstrap";
import { Formik } from "formik";
const Form = ({ onUpdate }) => {
  let updatedData = {
    yourName: null,
    soName: null,
    yourBday: null,
    soBday: null,
    meetDate: null,
    datingDate: null,
    marriedDate: null,
  };

  return (
    <Formik
      initialValues={updatedData}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          onUpdate(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <div className="form-group">
                <label htmlFor="">Your Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="yourName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.yourName}
                  placeholder="Aragorn"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="form-group">
                <label htmlFor="">Other Person's Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="soName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.soName}
                  placeholder="Arwen"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="form-group">
                <label htmlFor="">Your Birthday</label>
                <input
                  className="form-control"
                  type="date"
                  name="yourBday"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.yourBday}
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="form-group">
                <label htmlFor="">Other Person's Birthday</label>
                <input
                  className="form-control"
                  type="date"
                  name="soBday"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.soBday}
                />
              </div>
            </Col>
          </Row>
          <div className="form-group">
            <label htmlFor="">Date Met</label>
            <input
              className="form-control"
              type="date"
              name="meetDate"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.meetDate}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Date Started Dating (If Applicable)</label>
            <input
              className="form-control"
              type="date"
              name="datingDate"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.datingDate}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Date Married (If Applicable)</label>
            <input
              className="form-control"
              type="date"
              name="marriedDate"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.marriedDate}
            />
          </div>
          <div className="form-group">
            {" "}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-lg btn-primary btn-block"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Form;
