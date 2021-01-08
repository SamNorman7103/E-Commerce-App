# React-ECommerce-Store

In this project you will build a simple production e-commerce store using React and Redux. This project will help students understand how to structure an application, build reusable and understandable components.

## General Requirements:

1. Use the React/Redux structure to implement a data store in your application. (20 pts)
   a. Use actions to dispatch data to reducers
   b. Use reducers to manipulate the store data
   c. Use getters to retrieve data from your store
   d. Use both stateless and stateful components. (10 pts)
   e. Use a form input to filter products. (10 pts)
   f. At a minimum build 5 components, should be more, remember to simply your components. (20 pts)
   g. Use a router component to navigate within your application (React Router?). (15 pts)
2. Use routes to change pages (Router, Route, Link)
3. Use route params to pass props to a component

Absolutely no critical bugs and minimal console warnings, preferably none since they are easy to identify. (20 pts)
Commit and PUSH your work using git DAILY (5 pts)
The App Details:

The goal of this app is to incorporate everything that we have learned in the React block by building an online store. This store should have a products page, product details page, and cart page at a minimum. As with most apps it should also have a header or menu with navigation and footer…

## The Pages:

On the cart page you should include the functionality to update, delete, and confirm purchases, ideally this should be done by dispatching events to the store.
The products page should have the functionality to filter or search products and display all the products or the list of filtered products.
The product detail page should display all the details of the product and have the ability to add products to the cart at a minimum.

## The Products:

I have created this products endpoint to retrieve an array of products to use in your applications:
https://my-json-server.typicode.com/tdmichaelis/typicode/products
Currently the products are formatted like this but more information could be added but not taken away.
{
“id: 2352,
“title”: “Product Title”,
“description”: “description text”,
“img”: “img url”
“price”: 99.99,
“rating”: 4.5,
“categories”: “category
}
Also you can hit the categories endpoint here to retrieve the categories:
https://my-json-server.typicode.com/tdmichaelis/typicode/categories

## BONUS:

Include a mock login page that takes a username and password. Store the username in the store and use it in the app somewhere, header, cart page, or anywhere you might need it.
