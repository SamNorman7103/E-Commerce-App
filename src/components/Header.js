//node modules
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//styling
import "../App.css";
import { Navbar, Nav, Form } from "react-bootstrap";
import fetchPosts from "../Api";

function Header(props) {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand>
          {" "}
          <Link to="/" style={{ color: "black" }}>
            E-commerce Store
          </Link>
        </Navbar.Brand>
        <Nav
          className="mr-auto"
          style={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to="/" className="item col-10">
            Home
          </Link>
          <Link to="/Cart" className="item col-2">
            <div>
              <img
                style={{
                  resizeMode: "cover",
                  height: 30,
                  width: 30,
                }}
                className="cart"
                src={
                  "https://cdn0.iconfinder.com/data/icons/ecommerce-57/100/Ecommerce_RTE-03-512.png"
                }
                alt="CartImg"
              />
            </div>
          </Link>
        </Nav>
        <Form inline>
          <select
            name="Search"
            onChange={(event) => props.onChange(event.target.value)}
          >
            <option value="">All</option>
            <option value="phone">Phones</option>
            <option value="tv">TVs</option>
            <option value="small-appliance">Small Appliances</option>
            <option value="refrigerator">Refrigerators</option>
            <option value="watch">Watches</option>
            <option value="action-camera">Action Camera</option>
          </select>
        </Form>
      </Navbar>
    </div>
  );
}

const mapDispatchtoProps = (dispatch) => {
  return {
    onChange: (category) =>
      dispatch({
        type: "ON_CHANGE",
        category: category,
      }),
  };
};

export default connect(null, mapDispatchtoProps)(Header);
