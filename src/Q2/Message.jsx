import React from "react";

export default class Message extends React.Component {
  render() {
    return (
      <tr className="message">
        <td colSpan={2}>
          <p>{this.props.message}</p>
        </td>
      </tr>
    );
  }
}
