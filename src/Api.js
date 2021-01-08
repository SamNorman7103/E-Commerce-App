const extractDataFromCall = (data) => {
  let arr = [];
  data.forEach((element) => arr.push(element));
  return arr;
};

const getAPIInfo = async (url) => {
  const apiRequest = await fetch(url);
  const products = await apiRequest.json();
  let data = await extractDataFromCall(products);
  return data;
};

export const fetchPostsSuccess = (posts) => ({
  type: "FETCH_POST_SUCCESS",
  products: posts,
});

export default function fetchPosts() {
  return async (dispatch) => {
    try {
      let apiCall = await getAPIInfo(
        "https://my-json-server.typicode.com/tdmichaelis/json-api/products"
      );
      dispatch(fetchPostsSuccess(apiCall));
    } catch (e) {
      console.log(e);
    }
  };
}
