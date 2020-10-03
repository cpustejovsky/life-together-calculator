import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { Formik, Field } from "formik";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles"
import { DateData } from "../App"
type Props = {
  onUpdate: (data: DateData) => void
}

const useStyles = makeStyles(() => ({
  textField: {
    margin: "5px auto",

  }
}));

const DatePickerField = (props: any) => {
  const { field, handleBlur, form, label, ...other } = props
  const currentError = form.errors[field.name];
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        fullWidth
        clearable
        disablePast
        name={field.name}
        format="MM/dd/yyyy"
        helperText={currentError}
        error={Boolean(currentError)}
        onError={(error) => {
          // handle as a side effect
          if (error !== currentError) {
            form.setFieldError(field.name, error);
          }
        }}
        // if you are using custom validation schema you probably want to pass `true` as third argument
        onChange={(date) => form.setFieldValue(field.name, date, false)}
        {...other}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
        onBlur={handleBlur}
        label={label}
        margin="normal"
      />
    </MuiPickersUtilsProvider>
  );
};


const Form = (props: Props) => {
  const classes = useStyles();
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
                fullWidth
                className={classes.textField}
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
                fullWidth
                className={classes.textField}
              />
              <Field name="yourBday" label="Your Birthday" component={DatePickerField} />
              <Field name="soBday" label="Other Person's Birthday" component={DatePickerField} />
              <Field name="soBday" label="Other Person's Birthday" component={DatePickerField} />
              <Field name="meetDate" label="Date Met" component={DatePickerField} />
              <Field name="datingDate" label="Date Started Dating (If Applicable)" component={DatePickerField} />
              <Field name="marriedDate" label="Date Married (If Applicable)" component={DatePickerField} />

              <Button
                size="large"
                fullWidth
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={() => handleSubmit()}
              >
                Submit
            </Button>

            </form>
          )}
      </Formik>
    </Grid>
  );
};

export default Form;
