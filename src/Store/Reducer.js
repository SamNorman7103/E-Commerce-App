const initialState = {
  products: [],
  cart: [],
  filteredProducts: [],
  user: "",
};

export const reducer = (state = initialState, action) => {
  if (action.type === "FETCH_POST_SUCCESS") {
    return {
      products: action.products,
      cart: state.cart,
      filteredProducts: state.filteredProducts,
      user: state.user,
    };
  }

  if (action.type === "ADD_TO_CART") {
    if (state.cart.filter((item) => item.id == action.item.id).length > 0) {
      let item = state.cart.filter((item) => item.id == action.item.id)[0];
      if (item.quantity > 98) {
        item.quantity = 99;
      } else {
        item.quantity += 1;
      }

      let tempCart = state.cart.filter((item) => item.id !== action.item.id);
      tempCart.push(item);
      console.log(tempCart);
      return {
        products: state.products,
        cart: [...tempCart],
        filteredProducts: state.filteredProducts,
      };
    } else {
      let item = action.item;
      let obj = Object.assign({}, item);
      obj.quantity = 0;
      item = obj;
      item.quantity += 1;
      return {
        products: state.products,
        cart: [...(state.cart || []), item],
        filteredProducts: state.filteredProducts,
        user: state.user,
      };
    }
  }

  if (action.type === "REMOVE_ITEM") {
    const tempCart = state.cart.filter((item) => item.id !== action.id);
    return {
      products: state.products,
      cart: tempCart,
      filteredProducts: state.filteredProducts,
      user: state.user,
    };
  }

  if (action.type === "ON_CHANGE") {
    console.log(action.category);
    const filteredProducts = state.products.filter(
      (item) => item.category === action.category
    );
    return {
      products: state.products,
      cart: state.cart,
      filteredProducts: filteredProducts,
      user: state.user,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      products: state.products,
      cart: action.cart,
      filteredProducts: state.filteredProducts,
      user: state.user,
    };
  }

  if (action.type === "UPDATE_QUANTITY") {
    let item = state.cart.filter((i) => i.id === action.id)[0];
    let indexOfItem = state.cart.indexOf(item);
    item.quantity = action.quantity;
    let tempCart = state.cart;
    tempCart.splice(indexOfItem, item);
    return {
      products: state.products,
      cart: [...tempCart],
      filteredProducts: state.filteredProducts,
      user: state.user,
    };
  }

  if (action.type === "LOGIN") {
    return {
      products: state.products,
      cart: state.cart,
      filteredProducts: state.filteredProducts,
      user: action.user,
    };
  }
};
