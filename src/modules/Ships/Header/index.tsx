import React from "react";
import "../Header/style.css";

const Header = () => {
  return (
    <header className="ships_header">
      <div className="header_info">
        <a>info@lead-group.ru</a>
        <a>+7 (495) 123-45-67</a>
      </div>
      <div className="header_navigation">
        <a href={"#"}>О нас</a>
        <a href={"#"}>флот</a>
        <a href={"#"}>Инвесторам</a>
        <a href={"#"}>Карьера</a>
        <a href={"#"}>Пресс-центр</a>
        <a href={"#"}>устойчивое развитие</a>
        <a href={"#"}>Контакты</a>
      </div>
    </header>
  );
};

export default Header;
