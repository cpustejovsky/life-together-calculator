import React from "react";
import _ from "lodash";
import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  display: {
    paddingBottom: "3rem",
    justifyContent: "space-around",
  },
  displayBox: {
    textAlign: "center",
    marginBottom: "2rem",
    border: "1px solid #818181",
    boxShadow: "0px 2px 4px #818181",
    borderRadius: "10px",
    width: "fit - content",
    padding: "5px",
    "& p": {
      marginBottom: "0.5rem",
    }
  },
  error: {
    textAlign: "center",
    color: theme.palette.error.main,
    margin: "10vh 0",
  }
}));

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
  const classes = useStyles();
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
      <Grid container className={classes.display}>
        <Grid item md={5} className={classes.displayBox}>
          {" "}
          <p>
            {yourName} has known {soName} <strong>{percentUser}</strong> of
            their lives.
          </p>
        </Grid>
        <Grid item md={5} className={classes.displayBox}>
          {" "}
          <p>
            {soName} has known {yourName} <strong>{percentSo}</strong> of their
            lives.
          </p>
        </Grid>
        <Grid item md={6} className={classes.displayBox}>
          <p>
            They met <strong>{ageMeet}</strong> days ago.
          </p>
          <p>
            They started dating <strong>{ageDating}</strong> days ago.
          </p>
          <p>
            They were married <strong>{ageMarried}</strong> days ago.
          </p>
        </Grid>
      </Grid>
    );
  } else if (datingInput) {
    return (
      <Grid container className={classes.display}>
        <Grid item md={5} className={classes.displayBox}>
          {" "}
          <p>
            {yourName} has known {soName} <strong>{percentUser}</strong> of
            their lives.
          </p>
        </Grid>
        <Grid item md={5} className={classes.displayBox}>
          {" "}
          <p>
            {soName} has known {yourName} <strong>{percentSo}</strong> of their
            lives.
          </p>
        </Grid>
        <Grid item md={6} className={classes.displayBox}>
          <p>
            They met <strong>{ageMeet}</strong> days ago.
          </p>
          <p>
            They started dating <strong>{ageDating}</strong> days ago.
          </p>
        </Grid>
      </Grid>
    );
  } else if (meetingInput) {
    return (
      <Grid container className={classes.display}>
        <Grid item md={5} className={classes.displayBox}>
          {" "}
          <p>
            {yourName} has known {soName} <strong>{percentUser}</strong> of
            their lives.
          </p>
        </Grid>
        <Grid item md={5} className={classes.displayBox}>
          {" "}
          <p>
            {soName} has known {yourName} <strong>{percentSo}</strong> of their
            lives.
          </p>
        </Grid>
        <Grid item md={6} className={classes.displayBox}>
          <p>
            They met <strong>{ageMeet}</strong> days ago.
          </p>
        </Grid>
      </Grid>
    );
  } else if (insufficientInput) {
    return (
      <Typography variant="h5" className={classes.error}>
        Please provide at least <strong>two names</strong>,{" "}
        <strong>two birthdays</strong>, and <strong>the date y'all met</strong>.
      </Typography>
    );
  } else {
    return (
      <Typography variant="h5" className={classes.error}>
        Something went wrong. Please contact cpustejovsky about this issue (link
        in the footer)
      </Typography>
    );
  }
};

export default Display;
