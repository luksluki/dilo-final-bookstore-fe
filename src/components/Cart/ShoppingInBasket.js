import React, { PropTypes } from "react";

import ItemInBasket from "./ItemInBasket";
import "./ItemInBasket.css";

const ShoppingBasket = ({ selectedBooks, booksList, addNewOrder }) => {
  const msg = (
    <div className="alert alert-info">
      <h2>Shopping Basket is empty</h2>
      <p>Add some Books</p>
    </div>
  );

  const booksInBasket = Object.keys(selectedBooks);

  const renderOrder = function (key) {
    const book = booksList[key];
    const count = selectedBooks[key];

    return (
      <ItemInBasket
        key={key}
        name={book.name}
        count={count}
        price={book.price}
      />
    );
  };
  //   const addToHistory = (name, email, address) => {
  //     addNewOrder(name, email, address);
  //   };

  const total = booksInBasket.reduce((prevTotal, key) => {
    const book = booksList[key];
    const count = selectedBooks[key];

    return prevTotal + (count * book.price || 0);
  }, 0);

  const shoppingBasket = (
    <div className="container">
      {booksInBasket.map(renderOrder)}
      <div className="totalBox">
        <span>Total:</span>
        <span>{total} Rp.</span>
      </div>
    </div>
  );

  return (
    <div className="container">
      {booksInBasket.length ? shoppingBasket : msg}
      <div className="infoBox">
        <h3>Shipping Details</h3>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-success">
          Submit{" "}
        </button>
      </div>
    </div>
  );
};

// ShoppingBasket.propTypes = {
//   basket: PropTypes.object,
//   itemsList: PropTypes.array,
//   addToHistory: PropTypes.func
// };

export default ShoppingBasket;
