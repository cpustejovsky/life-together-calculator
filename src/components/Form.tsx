import React from "react";
import { Grid, TextField } from "@material-ui/core";
import { Formik } from "formik";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { DateData } from "../App"
type Props = {
  onUpdate: (data: DateData) => void
}



const Form = (props: Props) => {
  const { onUpdate } = props
  let updatedData = {
    yourName: "",
    soName: "",
    yourBday: "",
    soBday: "",
    meetDate: "",
    datingDate: "",
    marriedDate: "",
  };

  return (
    <Grid container>
      <Formik
        initialValues={updatedData}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            onUpdate(values);
            setSubmitting(false);
            window.scrollTo(0, 0)
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

              <TextField
                type="text"
                name="yourName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.yourName}
                placeholder="Aragorn"
                label="Your Name"
                variant="outlined"
              />

              <TextField
                type="text"
                name="soName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.soName}
                placeholder="Arwen"
                label="Other Person's Name"
                variant="outlined"
              />
              <TextField
                type="date"
                name="yourBday"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.yourBday}
                label="Your Birthday"
                variant="outlined"
                placeholder="hello"
              />
              <br />
              <br />
              <br />
              <br />
              <Grid container>
                <Grid item md={6}>
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
                </Grid>
                <Grid item md={6}>
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
                </Grid>
              </Grid>
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
    </Grid>
  );
};

export default Form;
