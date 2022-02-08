import React, { useContext } from "react";
import CartContext from "../Store/CatrContex";
import classes from "./TotalAmount.module.scss";
const TotalAmount = (props) => {
  const ctx = useContext(CartContext);
  let total = 0;
  total += ctx.cartList.map((ele) => {
    return ele.price * ele.amount;
  });

  const clickHandler=()=>{
      props.onShowHandler();
  }
 
  return (
    <div>
      <div className={classes["total-amount"]}>
        <h2>Total Amount</h2>
        <p>$ {parseFloat(total)}</p>
      </div>
      <div className={classes["btn-total"]}>
        <button onClick={clickHandler}>cancle</button>
      </div>
    </div>
  );
};
export default TotalAmount;
