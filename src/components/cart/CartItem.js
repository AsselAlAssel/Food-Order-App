import React, { useContext } from "react";
import CartContext from "../Store/CatrContex";
import classes from "./CartItem.module.scss";
const CartItem = (props) => {
  const ctx = useContext(CartContext);
  const removeClickHandler = () => {
   
    ctx.blusOrMinus({value:props.index,sign:-1});
  };
  const addClickHandler = () => {
    // console.log()

    ctx.blusOrMinus({value:props.index,sign:+1});
  };
  return (
    <div className={classes["item-control"]}>
      <div className={classes.info}>
        <span className={classes.title}>{props.data.name}</span>
        <br />
        <span className={classes.price}>$ {props.data.price}</span>
        <span className={classes.amount}>x {props.data.amount}</span>
      </div>
      <div className={classes.btn}>
        <button onClick={removeClickHandler}>-</button>
        <button onClick={addClickHandler}>+</button>
      </div>
    </div>
  );
};
export default CartItem;
