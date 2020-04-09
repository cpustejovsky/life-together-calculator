import React, { useState, useEffect } from "react";
import "./App.scss";
import Display from "./components/Display.jsx";
import Form from "./components/Form.jsx";
import { Container } from "react-bootstrap";

const App = () => {
  const [yourName, setYourName] = useState("Charles");
  const [soName, setSoName] = useState("Catherine");
  const [yourBday, setYourBday] = useState("1992-12-18");
  const [soBday, setSoBday] = useState("1994-10-12");
  const [meetDate, setMeetDate] = useState("2014-02-19");
  const [datingDate, setDatingDate] = useState("2014-03-10");
  const [marriedDate, setMarriedDate] = useState("2014-03-10");

  const millisToDays = (millis) => {
    var days = Math.floor(millis / 86400000);
    return days;
  };

  useEffect(() => {
    // setState({ data: data });
    window.scrollTo(0, 0);
    return () => {};
  }, []);

  let now = new Date();

  let ageUser = millisToDays(now - new Date(yourBday));
  let ageSo = millisToDays(now - new Date(soBday));
  let ageMeet = millisToDays(now - new Date(meetDate));
  let ageDating = millisToDays(now - new Date(datingDate));
  let ageMarried = millisToDays(now - new Date(marriedDate));
  let percentUser = ((ageMeet / ageUser) * 100).toFixed(2) + "%";
  let percentSo = ((ageMeet / ageSo) * 100).toFixed(2) + "%";

  return (
    <div>
      <Container className="view">
        <h1 className="title">Life Together Calculator</h1>
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
        />
        <h2>Try it yourself</h2>
        <hr />
        <Form />
        <footer className="footer">
          <a href="https://cpustejovsky.com/" rel="noreferrer noopener">
            Cpustejovsky <i className="far fa-thumbs-up"></i>,{" "}
            {new Date().getFullYear()}
          </a>
        </footer>
      </Container>
    </div>
  );
};

export default App;
