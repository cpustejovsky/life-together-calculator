import React, { useState } from "react";
import Display from "./components/Display";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { Container, Typography, CssBaseline } from "@material-ui/core"
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles"

export type DateData = {
  yourName: string,
  soName: string,
  yourBday: Date,
  soBday: Date,
  meetDate: Date,
  datingDate?: Date | null,
  marriedDate?: Date | null,
}

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#002884"
    },
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
    backgroundColor: "white",
    padding: "2%",
    borderRadius: "20px",
    boxShadow: "0px -2px 5px 3px rgba(255,255,255,0.5)"
  }
}));

const App = () => {
  const classes = useStyles();

  const [yourName, setYourName] = useState("Charles");
  const [soName, setSoName] = useState("Catherine");
  const [yourBday, setYourBday] = useState(new Date("1992-12-18"));
  const [soBday, setSoBday] = useState(new Date("1994-10-12"));
  const [meetDate, setMeetDate] = useState(new Date("2014-02-19"));
  const [datingDate, setDatingDate] = useState<Date | null>(new Date("2014-03-10"));
  const [marriedDate, setMarriedDate] = useState<Date | null>(new Date("2018-01-06"));

  const millisToDays = (millis: number): number => Math.floor(millis / 86400000);

  const onUpdate = (data: DateData) => {
    setYourName(data.yourName);
    setSoName(data.soName);
    setYourBday(data.yourBday);
    setSoBday(data.soBday);
    setMeetDate(data.meetDate);
    setDatingDate(data.datingDate || null)
    setMarriedDate(data.marriedDate || null)
  };

  const now = new Date().getTime();
  const ageUser = millisToDays(now - yourBday.getTime());
  const ageSo = millisToDays(now - soBday.getTime());
  const ageMeet = millisToDays(now - meetDate.getTime());
  const ageDating = datingDate ? millisToDays(now - datingDate.getTime()) : null;
  const ageMarried = marriedDate ? millisToDays(now - marriedDate.getTime()) : null;
  const percentUser = ((ageMeet / ageUser) * 100).toFixed(2) + "%";
  const percentSo = ((ageMeet / ageSo) * 100).toFixed(2) + "%";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Container className={classes.view}>
          <Typography paragraph align="center" variant="h3">Life Together Calculator</Typography>
          <Typography paragraph align="center" variant="subtitle2">Add some mathematical precision to your friendship || relationship ||
          marriage.</Typography>
          <Display
            yourName={yourName}
            soName={soName}
            ageMeet={ageMeet}
            ageDating={ageDating}
            ageMarried={ageMarried}
            percentUser={percentUser}
            percentSo={percentSo}
            yourBday={new Date(yourBday).toLocaleDateString()}
            soBday={new Date(soBday).toLocaleDateString()}
            meetDate={new Date(meetDate).toLocaleDateString()}
            datingDate={datingDate ? datingDate.toLocaleDateString() : null}
            marriedDate={marriedDate ? marriedDate.toLocaleDateString() : null}
          />
          <Typography align="center" variant="h4">Try it yourself</Typography>
          <hr style={{ color: "black", height: "1px" }} />
          <Form onUpdate={onUpdate} />
          <Footer />
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
