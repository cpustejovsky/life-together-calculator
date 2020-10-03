import React, { useState } from "react";
import "./App.scss";
import Display from "./components/Display";
import Form from "./components/Form.jsx";
import { Container } from "react-bootstrap";

const App = () => {
  const [yourName, setYourName] = useState("Charles");
  const [soName, setSoName] = useState("Catherine");
  const [yourBday, setYourBday] = useState("1992-12-18");
  const [soBday, setSoBday] = useState("1994-10-12");
  const [meetDate, setMeetDate] = useState("2014-02-19");
  const [datingDate, setDatingDate] = useState<string>("2014-03-10");
  const [marriedDate, setMarriedDate] = useState<string>("2018-01-06");

  const millisToDays = (millis: number): number => Math.floor(millis / 86400000);

  type DateData = {
    yourName: string,
    soName: string,
    yourBday: string,
    soBday: string,
    meetDate: string,
    datingDate?: string,
    marriedDate?: string,
  }

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
          yourBday={yourName}
          soBday={soBday}
          meetDate={meetDate}
          datingDate={datingDate}
          marriedDate={marriedDate}
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
