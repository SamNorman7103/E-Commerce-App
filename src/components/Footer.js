import "../App.css";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Component } from "react";

export class Footer extends Component {
 toTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
 };

 render() {
  return (
   <div>
    <Navbar bg="light" variant="light">
     <Navbar.Brand> <Link to="/" style={{color:"black"}}>E-commerce Store</Link></Navbar.Brand>
     <Button onClick={this.toTop} variant="outline-info">Back To Top</Button>
    </Navbar>
   </div>
  )
 }
}
