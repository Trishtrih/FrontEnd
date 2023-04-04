import React from "react";
import "../Menu/style.css";
import { Routes, Route, Link } from "react-router-dom";
import Burgers from "../MenuCategories/Burgers";
import Drinks from "../MenuCategories/Drinks";
import Snacks from "../MenuCategories/Snacks";
const Menu = () => {
  return (
    <div>
      <div className={"Menu"}>
        <div>
          <Link to={"burgers"}> Бургеры </Link>
          <Link to={"drinks"}> Напитки </Link>
          <Link to={"snacks"}> Закуски </Link>
        </div>

        <button className={"BasketButton"} type="button">
          <div className={"BasketIcon"} />
          <div>Basket</div>
          <div>0</div>
        </button>
      </div>

      <Routes>
        <Route path={"burgers"} element={<Burgers />} />
        <Route path={"drinks"} element={<Drinks />} />
        <Route path={"snacks"} element={<Snacks />} />
      </Routes>
    </div>
  );
};

export default Menu;
