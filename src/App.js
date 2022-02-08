import React, { useState,useContext } from "react";


const App = () => {
  const ctx = useContext(CartContext);

  const List = [
    {
      name: "Sushi",
      description: "Fines fish and veggies",
      price: 22.99,
    },
    {
      name: "Schnitzel",
      description: "A german specialty",
      price: 16.5,
    },
    {
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      name: "Green",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];

  const [menu, setmenu] = useState(List);
  return (
    <React.Fragment>
    hello
    </React.Fragment>
  );
};
export default App;
