import { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default class ErrorPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Error: "Error 404. Page Not Found.",
      Message:
        "Uh oh, we can't seem to find the page you're looking for! Try going back to the previous page or click 'Home' to go to the main page!",
    };
  }
  render() {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          paddingTop: "100px",
        }}
      >
        <h3>{this.state.Error}</h3>
        <h5>{this.state.Message}</h5>

        <Link to="/" style={{ paddingTop: "20px" }}>
          <Button>Home</Button>
        </Link>
      </div>
    );
  }
}
