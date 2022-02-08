import React from "react";
import ReactDOM from "react-dom";

import PrintCart from "./PrintCart";

const Cart = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <PrintCart onShowHandler={props.onShowHandler} />,
        document.getElementById("cart-container")
      )}
    </React.Fragment>
  );
};
export default Cart;
