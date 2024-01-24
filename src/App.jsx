import React from "react";
import "./App.css";
import Buttons from "./Q1/Buttons";
import Form from "./Q2/From";
import Table from "./Q3/Table";

class App extends React.Component {
  render() {
    return (
      <>
        <Buttons />
        <Form />
        <Table />
      </>
    );
  }
}

export default App;
