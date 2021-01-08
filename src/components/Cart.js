import CartItem from "./CartItem";
import { connect } from "react-redux";
import fetchPosts from "../Api";
import { Link } from "react-router-dom";
import { Row, Button, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Cart.css";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Cart(props) {
  let cartItems = [];
  let totalPrice = 0;
  let productPrice = 0;
  let taxPrice = 0;
  if (props.cart === undefined) {
    fetchPosts();
  } else if (props.cart !== undefined) {
    if (props.cart.length > 0) {
      console.log(props.cart);
      props.cart.map((item) => (productPrice += item.price * item.quantity));

      taxPrice = productPrice * 0.0715;
      totalPrice = taxPrice + productPrice;
      cartItems = props.cart.map((item) => (
        <CartItem
          key={item.id}
          img={item.img}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
          id={item.id}
        />
      ));
    } else if (props.cart.length === 0) {
      cartItems = [];
    }
  }

  return (
    <Container style={{ display: "flex", minHeight: "100vh" }}>
      <Col className="col-9">
        <Row>
          <h1>Shopping Cart</h1>
        </Row>
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "space-around",
            flexDirection: "column",
          }}
        >
          {cartItems}
        </div>
      </Col>
      <Col
        className="col-3"
        style={{
          border: "1px solid black",
          maxHeight: 350,
        }}
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
          }}
        >
          <h4 style={{ padding: 10 }}>Your Order will be...</h4>
          <h6>Products: ${numberWithCommas(productPrice.toFixed(2))}</h6>
          <h6>Tax: ${numberWithCommas(taxPrice.toFixed(2))} </h6>
          <h3 style={{ borderTop: "1px black solid" }}>
            Total: ${numberWithCommas(totalPrice.toFixed(2))}
          </h3>
          <div style={{ display: "flex" }}>
            <Link to="/Confirmation">
              <Button className="cartButton" onClick={() => props.clearCart()}>
                Order Now!
              </Button>
            </Link>
            <Link to="/Cart">
              <Button className="cartButton" onClick={() => props.clearCart()}>
                Clear Cart
              </Button>
            </Link>
          </div>
        </Container>
      </Col>
    </Container>
  );
}

const mapStatetoProps = ({ cart } = {}) => {
  return {
    cart: cart,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    clearCart: () =>
      dispatch({
        type: "CLEAR_CART",
        cart: [],
      }),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Cart);
