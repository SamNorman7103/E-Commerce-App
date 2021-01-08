import { Component } from "react";

export default class ConfirmationPage extends Component {
  constructor(props) {
    super(props);

    this.state = { confirmation: "Thank you for your purchase!" };
  }
  render() {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h3>{this.state.confirmation}</h3>
      </div>
    );
  }
}
