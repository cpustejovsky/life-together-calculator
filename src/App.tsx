import React, { useState } from "react";
import Display from "./components/Display";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { Container, Typography } from "@material-ui/core"
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles"

export type DateData = {
  yourName: string,
  soName: string,
  yourBday: string,
  soBday: string,
  meetDate: string,
  datingDate?: string,
  marriedDate?: string,
}

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    warning: {
      main: '#CC3300'
    },
    error: {
      main: '#FF0033'
    }
  },
});

const useStyles = makeStyles(() => ({
  view: {
    margin: "5vh auto",
    maxWidth: "600px",
  }
}));

const App = () => {
  const classes = useStyles();

  const [yourName, setYourName] = useState("Charles");
  const [soName, setSoName] = useState("Catherine");
  const [yourBday, setYourBday] = useState("1992-12-18");
  const [soBday, setSoBday] = useState("1994-10-12");
  const [meetDate, setMeetDate] = useState("2014-02-19");
  const [datingDate, setDatingDate] = useState<string>("2014-03-10");
  const [marriedDate, setMarriedDate] = useState<string>("2018-01-06");

  const millisToDays = (millis: number): number => Math.floor(millis / 86400000);

  const onUpdate = (data: DateData) => {
    setYourName(data.yourName);
    setSoName(data.soName);
    setYourBday(data.yourBday);
    setSoBday(data.soBday);
    setMeetDate(data.meetDate);
    setDatingDate(data.datingDate ? data.datingDate : "");
    setMarriedDate(data.marriedDate ? data.marriedDate : "");
  };

  const now = new Date().getTime();

  const ageUser = millisToDays(now - new Date(yourBday).getTime());
  const ageSo = millisToDays(now - new Date(soBday).getTime());
  const ageMeet = millisToDays(now - new Date(meetDate).getTime());
  const ageDating = millisToDays(now - new Date(datingDate).getTime());
  const ageMarried = millisToDays(now - new Date(marriedDate).getTime());
  const percentUser = ((ageMeet / ageUser) * 100).toFixed(2) + "%";
  const percentSo = ((ageMeet / ageSo) * 100).toFixed(2) + "%";

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.view}>
        <Typography align="center" variant="h3">Life Together Calculator</Typography>
        <p>
          Add some mathematical precision to your friendship || relationship ||
          marriage.
        </p>
        <Display
          yourName={yourName}
          soName={soName}
          ageMeet={ageMeet}
          ageDating={ageDating}
          ageMarried={ageMarried}
          percentUser={percentUser}
          percentSo={percentSo}
          yourBday={yourName}
          soBday={soBday}
          meetDate={meetDate}
          datingDate={datingDate}
          marriedDate={marriedDate}
        />
        <Typography align="center" variant="h4">Try it yourself</Typography>
        <hr style={{color: "black", height: "1px"}} />
        <Form onUpdate={onUpdate} />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
