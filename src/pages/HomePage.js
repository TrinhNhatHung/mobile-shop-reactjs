import React from "react";
import Cart from "../bindings/Cart";
import Message from "../bindings/Message";
import Products from "../bindings/Products";
import Pagination from "../bindings/Pagination";
import { Provider } from "react-redux";

import { store } from "../redux/store";
function HomePage() {
  return (
    <Provider store={store}>
      <main id="mainContainer">
        <div className="container">
          <Products />
          <Message />
          <Cart />
        </div>
        <Pagination />
      </main>
    </Provider>
  );
}

export default HomePage;
