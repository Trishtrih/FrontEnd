import React from "react";
import "../Footer/style.css";
const Index = () => {
  return (
    <div className="footer">
      <div className="footer-colum">
        <h2>О компании </h2>
        <a href={"#"}>Профиль компании</a>
        <a href={"#"}>История</a>
        <a href={"#"}>Совет директоров</a>
        <a href={"#"}>Контакты</a>
      </div>
      <div className="footer-colum">
        <h2>Флот </h2>
        <a href={"#"}>Виды деятельности</a>
        <a href={"#"}>Устойчивое развитие</a>
        <a href={"#"}>Безопасность и качество</a>
        <a href={"#"}>Защита окружающей среды</a>
        <a href={"#"}>Социальная ответственность</a>
      </div>
      <div className="footer-colum">
        <h2>Инвесторам </h2>
        <a href={"#"}>Акции</a>
        <a href={"#"}>Отчеты и результаты</a>
        <a href={"#"}>Раскрытие информации</a>
        <a href={"#"}>Корпоративное управление</a>
        <a href={"#"}>Аналитики</a>
        <a href={"#"}>Контакты для инвесторов</a>
      </div>
      <div className="footer-colum">
        191186,
        <br /> Санкт-Петербург,
        <br /> Невский переулок, д. 3, офис 10-25 125047,
        <br />
        Москва,
        <br /> Покровская площадь, д.3, к. 5,стр 1<br /> +7 (495) 123-45-67
        info@lead-group.ru
      </div>
    </div>
  );
};

export default Index;
