import React from "react";
import "./table.css";
export default class Table extends React.Component {
  state = {
    tableWidth: "100%",
  };

  handleClick = () => {
    this.setState({ tableWidth: "50%" });
  };

  handleDoubleClick = () => {
    this.setState({ tableWidth: "100%" });
  };

  render() {
    return (
      <>
        <h1>EXE_2 - Q3</h1>
        <table
          id="q3"
          border="1"
          style={{ width: this.state.tableWidth }}
          onClick={this.handleClick}
          onDoubleClick={this.handleDoubleClick}
        >
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </>
    );
  }
}
