import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Row, Col} from 'react-bootstrap';
import fetchPosts from '../Api';

import "../stars.css";
function ProductDetails(props) {
    let { id } = useParams();
    let product = [];
    let productInfo = [];
    let roundedRating = 0;
    if (props.products === undefined || productInfo === undefined){
      fetchPosts();
    }
    else {
      product = props.products.filter((product) => product.id == id); 
      productInfo = product[0];
      roundedRating = (productInfo.rating / 5 * 10) * 10;
    }

   
  return (
    <div>
      <p>{productInfo.category}</p>
      <h1>{productInfo.title}</h1>
      <Row>
        <Col>
          <img
            src={productInfo.img}
            alt={productInfo.title}
            width="auto"
            height="500"
          />
        </Col>
        <Col>
          <h5>${productInfo.price}</h5>
          <h6>{productInfo.description}</h6>
          <Row>
            <div className= "rating">
              <h6>{productInfo.rating} / 5</h6>
              <div className="stars">
                <div className="stars-outer">
                  <div className="stars-inner" style={{width: `${roundedRating}%`}}>
                  </div>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <button onClick={() => props.addToCart({img: productInfo.img, title:productInfo.title, price:productInfo.price, id: productInfo.id})}>
              Add to Cart
            </button>
          </Row>
        </Col>
      </Row>
    </div> 
   
  );
}

const mapStatetoProps = ({ products } = {}) => {
  return {
    products
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    addToCart: (item) => 
    dispatch({ 
      type: "ADD_TO_CART",
      item: item 
    }),
  };
};

export default connect(mapStatetoProps,mapDispatchtoProps)(ProductDetails);