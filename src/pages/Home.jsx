import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID='1' title='Popular' fetchURL={requests.requestPopular} />
      <Row rowID='2' title='Romance' fetchURL={requests.requestRomance} />
      <Row rowID='3' title='Comedy' fetchURL={requests.requestComedy} />
    </div>
  );
};

export default Home;
