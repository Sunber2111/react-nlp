import Content from "Features/content";
import Navigation from "Features/nav";
import React from "react";
import "./styles.scss";

const App = () => {
  return <div id="app">
    <Navigation/>
    <Content/>
  </div>;
};

export default App;
