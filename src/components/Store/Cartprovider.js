import React, { useReducer } from "react";
import CartContext from "./CatrContex";
import { updateCartLis, updateCartLisWhenRemove } from "./Functions";
const CartReducer = (state, action) => {
  if (action.type === "ADD") {
    console.log(state.items);
    return {
      items: updateCartLis(state.items, action.value),
      totalAmounts: state.totalAmounts + action.value.amount,
    };
  } else if (action.type === "REMOVE") {
    if (action.value.sign===-1) {
      return {
        items: updateCartLisWhenRemove(state.items, action.value.value),
        totalAmounts: state.totalAmounts - 1,
      };
    } else {
      state.items[action.value.value].amount += 1;
      return {
        items: state.items,
        totalAmounts: state.totalAmounts + 1,
      };
    }
  }
  return {
    items: [],
    totalAmount: 0,
  };
};

const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(CartReducer, {
    items: [],
    totalAmounts: 0,
  });
  const AddItemHandler = (item) => {
    dispatch({ type: "ADD", value: item });
  };
  const BlusOrMinus = (temp) => {
    dispatch({ type: "REMOVE", value: temp });
  };

  const contex = {
    cartList: cartState.items,
    totalAmount: cartState.totalAmounts,
    addItem: AddItemHandler,
    blusOrMinus: BlusOrMinus,
  };
  console.log(cartState.items);
  return (
    <CartContext.Provider value={contex}>{props.children}</CartContext.Provider>
  );
};
export default CartProvider;
