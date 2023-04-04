import React from "react";
import "../MenuItem/style.css";
const MenuItem = ({ img, name, composition, price }) => {
  return (
    <div className={"MenuItem"}>
      <div className={"Image"}>
        <img src={img} alt={"Burger one"} />
      </div>
      <p className={"ItemName"}>{name}</p>
      <p className={"Composition"}>{composition} </p>
      <div>
        <p>{price}</p>
        <button> выбрать</button>
      </div>
    </div>
  );
};

export default MenuItem;
