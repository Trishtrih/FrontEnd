import React from "react";
import BurgerImg1 from "./burger2.jpg";
import "../Burgers/style.css";
import MenuItem from "../../MenuItem";
const Burgers = () => {
  const imgSrc = "BurgersImages/burger1.jpg";
  const BurgerName = "Name";
  const composition =
    "Булочка, котлета из мраморной говядины, колбаса Пепперони, соус Фирменный, салат Айсберг, свежие томаты, сыр Моцарелла, томаты вяленые, соус Песто, луковый конфитюр, красный лук";
  const price = "240Р";
  return (
    <div className={"List"}>
      <img src={BurgerImg1} alt={"blabla"} />
      <MenuItem
        img={BurgerImg1}
        name={BurgerName}
        composition={composition}
        price={price}
      />
      <MenuItem
        img={BurgerImg1}
        name={BurgerName}
        composition={composition}
        price={price}
      />
      <MenuItem
        img={BurgerImg1}
        name={BurgerName}
        composition={composition}
        price={price}
      />
    </div>
  );
};

export default Burgers;
