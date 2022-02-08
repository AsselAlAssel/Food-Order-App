import React, { useContext } from "react";
import Button from "./UI/Button";
import cart from "./Icons/cart.png";
import classes from "./Header.module.scss";
import CartContext from "./Store/CatrContex";


const Header = (props) => {
  const ctx = useContext(CartContext);
  const className = props.showCart ? classes["bump"] : "";
  return (
    <div className={classes.header}>
      <div>
        <h2>ReactMeals</h2>
      </div>
      <div>
        <Button
          className={`${classes["btr-cart"]} ${className} `}
          onClick={props.onShowHandler}
        >
          <img src={cart} alt="" /> Your Cart <span>{ctx.totalAmount}</span>
        </Button>
      </div>
    </div>
  );
};
export default Header;
