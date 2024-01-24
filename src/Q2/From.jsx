import React from "react";
import "./form.css";
import Message from "./Message";

export default class Form extends React.Component {
  state = {
    isFocus: false,
    identifier: "",
    gradeValue: "",
  };

  handleFocus = (identifier) => {
    this.setState({ identifier: identifier });
    this.setState((prevState) => ({ isFocus: !prevState.isFocus }));
  };

  handleChange = (grade) => {
    this.setState({ gradeValue: grade });
  };

  render() {
    return (
      <>
        <h1>EXE_2 - Q2</h1>
        <h3>Registered to Studies!</h3>

        <table>
          <tbody>
            {this.state.isFocus && this.state.identifier === "fn" && (
              <Message message="Please fill here your first name*" />
            )}
            <tr>
              <td>
                <label htmlFor="fn">First Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="fn"
                  onFocus={(e) => this.handleFocus(e.target.id)}
                  onBlur={() => this.handleFocus("")}
                />
              </td>
            </tr>
            {this.state.isFocus && this.state.identifier === "ln" && (
              <Message message="Please fill here your last name!!" />
            )}
            <tr>
              <td>
                <label htmlFor="ln">Last Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="ln"
                  onFocus={(e) => this.handleFocus(e.target.id)}
                  onBlur={() => this.handleFocus("")}
                />
              </td>
            </tr>
            {this.state.isFocus && this.state.identifier === "gr" && (
              <Message message="Please fill here your grade!!" />
            )}

            <tr>
              <td>
                <label htmlFor="gr">Grade:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="gr"
                  onFocus={(e) => this.handleFocus(e.target.id)}
                  onBlur={(e) => this.handleFocus(e.target.id)}
                  onChange={(e) => this.handleChange(e.target.value)}
                />
              </td>
            </tr>
            {this.state.gradeValue > 555 && (
              <Message message="Congratulations, you have been admitted to studies" />
            )}
            {this.state.gradeValue <= 555 && this.state.gradeValue !== "" && (
              <Message message="Unfortunately, you were not accepted to the studies." />
            )}
          </tbody>
        </table>
      </>
    );
  }
}
