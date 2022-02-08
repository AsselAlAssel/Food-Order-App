import React from "react";
import Card from "../UI/Card";
import PrintItem from "./PrintItem";
import calsses from  "./PrintMenu.module.scss"

const PrintMenu = (props) => {
  const Items = props.menu.map((item, index) => (
    <PrintItem key={index} data={item} />
  ));

  return <Card className={calsses['print-menu']}>{Items}</Card>;
};
export default PrintMenu;
