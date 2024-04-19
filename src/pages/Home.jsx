import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <div>
      <Main />
      {/* <Row rowID="1" title="Up coming" fetchURL={requests.requestUpcoming} /> */}
      <Row rowID="1" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="2" title="Romance" fetchURL={requests.requestRomance} />
      <Row rowID="3" title="Comedy" fetchURL={requests.requestComedy} />
      <Row rowID="4" title="Political" fetchURL={requests.requestPolitical} />
      <Row
        rowID="5"
        title="Feminist Activism"
        fetchURL={requests.requestFeministActivism}
      />
    </div>
  );
};

export default Home;
