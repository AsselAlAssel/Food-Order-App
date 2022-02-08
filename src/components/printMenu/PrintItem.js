import React, { useContext } from "react";
import CartContext from "../Store/CatrContex";
import Form from "./Form";
import PrintInformation from "./PrintInformation";
import classes from "./PrintItem.module.scss";

const PrintItem = (props) => {
  const ctx = useContext(CartContext);

  const submitForm = (amount) => {
    amount=parseInt(amount);
    let temp ={...props.data, amount};
   
    ctx.addItem(temp);
  };
  return (
    <div className={classes["item-controler"]}>
      <PrintInformation data={props.data} />
      <Form onSubmit={submitForm} />
    </div>
  );
};
export default PrintItem;
