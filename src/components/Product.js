import { Route, Link, Switch } from "react-router-dom";
import ProductDetails from "./Details";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";


function Product(props){
  let roundedRating = (props.rating / 5 * 10) * 10;
    return (
      <div className="product w-25 p-3" style={{textAlign:"center", margin: 20, alignItems: "center", display: "flex", flexDirection:"column"}}>
        <Link to={`/ProductDetails/${props.id}`} className="item">
          <div style={{height:200, width:200}}>
            <img style={{
              objectFit: "contain",
              height: "100%",
              maxWidth: "100%",
              overflow: "hidden"
            }}
              className="productImg"
              src={props.img}
              alt={props.title}
            />
          </div>
        </Link>
        <h4 className="productTitle">{props.title}</h4>
        <div className="stars">
          <div className="stars-outer">
            <div className="stars-inner" style={{width: `${roundedRating}%`}}>
            </div>
          </div>
        </div>
        <h5 className="productPrice">${props.price}</h5>
        <span></span>
        <button onClick={() => {props.addToCart({img: props.img, title:props.title, price:props.price, id: props.id})}}>
          Add to Cart
        </button>
        <Switch>
          <Route
            path={`/ProductDetails/${props.title}`}
            render={(props) => (
              <ProductDetails
                {...props}
                id={props.id}
                img={props.img}
                title={props.title}
                price={props.price}
                rating={props.rating}
                description={props.description}
                category={props.category}
                quantity = {props.quantity}
              />
            )}
          />
        </Switch>
      </div>
    );
}


const mapDispatchtoProps = (dispatch) => {
  return {
    addToCart: (item) => 
    dispatch({ 
      type: "ADD_TO_CART",
      item: item 
    }),
  };
};

export default connect(null,mapDispatchtoProps)(Product);
