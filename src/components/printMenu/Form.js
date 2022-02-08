import React, { useRef } from "react";
import Button from "../UI/Button";
import classes from "./Form.module.scss";
const Form = (props) => {
  const Amount = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(Amount.current.value);
  };
  return (
    <form onSubmit={submitHandler} className={classes["form-control"]}>
      <div>
        <label htmlFor="amount">Amount</label>
        <input type="number" min={1} step="1"  ref={Amount} defaultValue="1" />
      </div>
      <Button className={classes["btn-form"]}>+ Add</Button>
    </form>
  );
};
export default Form;
