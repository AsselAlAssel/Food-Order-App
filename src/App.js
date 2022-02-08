import React, { useState } from "react";
import Cart from "./components/cart/Cart";
import Header from "./components/Header";
import PrintMenu from "./components/printMenu/printMenu";

const App = () => {
 

  const List = [
    {
      name: "Sushi",
      description: "Fines fish and veggies",
      price: 22.99,
      id: "m1",
    },
    {
      name: "Schnitzel",
      description: "A german specialty",
      price: 16.5,
      id: "m2",
    },
    {
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
      id: "m3",
    },
    {
      name: "Green",
      description: "Healthy...and green...",
      price: 18.99,
      id: "m4",
    },
  ];

  const [menu, setmenu] = useState(List);
  const [ShowCart, setShowCart] = useState(false);
  const ShowCartHandler = () => {
    setShowCart(!ShowCart);
  };
  return (
    <React.Fragment>
      {ShowCart && <Cart onShowHandler={ShowCartHandler} />}
      <Header onShowHandler={ShowCartHandler} showCart={ShowCart}/>
      <PrintMenu menu={menu} />
    </React.Fragment>
  );
};
export default App;
