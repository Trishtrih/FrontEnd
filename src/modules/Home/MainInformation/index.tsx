import React from "react";
import MyPhoto from "./img/MyPhoto.jpeg";
import "./style.css";
const MainInformation = () => {
  return (
    <div className={"main-information"}>
      <div className={"photo"}>
        <img src={MyPhoto} alt={"MyPhoto"} width={250} height={250} />
      </div>
      <div className={"contact-information"}>
        <a>
          <div className={"bagel"} /> +7 (909) 538-62-57{" "}
        </a>
        <a>
          <div className={"bagel"} /> vladislav-klykov@mail.ru{" "}
        </a>
        <a>
          <div className={"bagel"} />
          Томск
        </a>
      </div>
      <div className={"work-information"}>
        <div className={"salary-information"}>
          <a>
            <div className={"bagel"} />
            Желаемая зарплата:
          </a>
          <a>20000-50000 рублей</a>
        </div>
        <div className={"schedule-information"}>
          <a>
            <div className={"bagel"} /> Занятость:
          </a>
          <a>Полный день</a>
        </div>
        <div className={"language-information"}>
          <a>
            <div className={"bagel"} /> Иностранные языки:
          </a>
          <a>Английский: B1 (intermediate)</a>
        </div>
        <div className={"skills-information"}>
          <a>
            <div className={"bagel"} />
            Навыки:
          </a>
          <ul className={"skill-list"}>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JS</li>
            <li>ES6</li>
            <li>Git</li>
            <li>React</li>
            <li>Redux</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainInformation;
