import React, { useState } from "react";
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
  const [marriedDate, setMarriedDate] = useState("2018-01-06");

  const millisToDays = (millis) => Math.floor(millis / 86400000);

  const onUpdate = (data) => {
    setYourName(data.yourName);
    setSoName(data.soName);
    setYourBday(data.yourBday);
    setSoBday(data.soBday);
    setMeetDate(data.meetDate);
    setDatingDate(data.datingDate);
    setMarriedDate(data.marriedDate);
  };

  const now = new Date();

  const ageUser = millisToDays(now - new Date(yourBday));
  const ageSo = millisToDays(now - new Date(soBday));
  const ageMeet = millisToDays(now - new Date(meetDate));
  const ageDating = millisToDays(now - new Date(datingDate));
  const ageMarried = millisToDays(now - new Date(marriedDate));
  const percentUser = ((ageMeet / ageUser) * 100).toFixed(2) + "%";
  const percentSo = ((ageMeet / ageSo) * 100).toFixed(2) + "%";

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
        <Form onUpdate={onUpdate} />
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
