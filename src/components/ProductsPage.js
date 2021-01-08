import Product from "./Product";
import { connect } from "react-redux";
import { Row } from "react-bootstrap";
import fetchPosts from "../Api";

function ProductsPage(props) {
  let products = [];

  if (props.products === undefined) {
    fetchPosts();
  } else if (
    props.filteredProducts !== undefined &&
    props.filteredProducts.length > 0
  ) {
    products = props.filteredProducts.map((product) => (
      <Product
        key={product.id}
        id={product.id}
        img={product.img}
        title={product.title}
        rating={product.rating}
        price={product.price}
        description={product.description}
        category={product.category}
        quantity={product.quantity}
      />
    ));
  } else {
    products = props.products.map((product) => (
      <Product
        key={product.id}
        id={product.id}
        img={product.img}
        title={product.title}
        rating={product.rating}
        price={product.price}
        description={product.description}
        category={product.category}
        quantity={product.quantity}
      />
    ));
  }
  return (
    <div>
      <Row>
        <h1>E-Commerce Store</h1>
      </Row>
      <Row
        style={{ flex: 1, justifyContent: "space-around", minHeight: "100vh" }}
      >
        {products}
      </Row>
    </div>
  );
}

const mapStatetoProps = ({ products, cart, filteredProducts } = {}) => {
  return {
    products,
    cart,
    filteredProducts,
  };
};

export default connect(mapStatetoProps)(ProductsPage);
