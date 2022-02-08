import React, { useContext } from "react";
import CartContext from "../Store/CatrContex";
import "./PrintCart.scss";
import Card from "../UI/Card";
import CartItem from "./CartItem";
import TotalAmount from "./TotalAmout";
const PrintCart = (props) => {
  const ctx = useContext(CartContext);
  const cartItem = ctx.cartList.map((ele ,index) => {
   return <CartItem data={ele} key={index} index={index} />;
  });

  return (
    <div className="cart" >
      <Card>
          {cartItem}
          <TotalAmount  onShowHandler={props.onShowHandler}/>
          </Card>
    </div>
  );
};
export default PrintCart;
