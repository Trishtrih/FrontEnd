import React from "react";
import "./style.css";
const DetailedInformation = () => {
  return (
    <div className={"detailed-information"}>
      <h1>Клыков Владислав Константинович</h1>
      <a>Junior Frontend Developer</a>
      <div className={"about-me-information"}>
        <div className={"detailed-information-block"}>
          <h2>Личная информация</h2>
          <a>
            <span>Гражданство:</span> Российская Федерация
          </a>
          <a>
            <span>Образование:</span> Высшее(бакалавр)
          </a>
          <a>
            <span>Дата рождения:</span> 08.01.1999 г.
          </a>
          <a>
            <span>Пол:</span> Мужской
          </a>
          <a>
            <span>Семейное положение:</span> Холост
          </a>
        </div>
        <div className={"detailed-information-block"}>
          <h2>Образование</h2>
          <a>
            <span>ТУСУР:</span>
          </a>
          <a>
            <span>Факультет:</span> Факультет систем управлениея
          </a>
          <a>
            <span>Специальность:</span> Информатика и вычислительная техника
          </a>
          <a>
            <span>Дата окончания:</span> 2020г
          </a>
          <a>
            <span>Форма обучения:</span> Очная
          </a>
        </div>
        <div className={"detailed-information-block"}>
          <h2>Дополнительная информация</h2>
          <a>
            <span>Личные качества:</span> Личные качества
          </a>
          <a>
            <span>Профессиональные навыки:</span> Профессиональные навыки:
          </a>
          <a>
            <span>О себе:</span> о себе
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailedInformation;
