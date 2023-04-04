import React from "react";
import "./style.css";
import MiniShip from "./images/mini_ship.png";
import Header from "../Header";
const FirstScreen = () => {
  return (
    <div className={"ships_main"}>
      <Header />
      <div className="more-about-ship">
        <h1>Первый в мире ледокольный газовоз</h1>
        <a className={"latina_text"}>
          Et elementum penatibus lacinia eget ut amet lorem. Id lectus magna
          quis odio in. In mi vitae ultrices et luctus eu gravida tincidunt
          cras. Quisque pellentesque mollis ut sed.
        </a>
        <button className="more_button">Подробнее</button>
      </div>
      <div className={"tanker-description"}>
        <h3>Танкер-газовоз СПГ «КАПИТАН ДАНИЛКИН»</h3>
        <div className={"ships_parameters"}>
          <div className={"list-ships-parameters"}>
            <div className={"position-list-ships-parameters"}>
              <a className={"ships_parameter"}>Грузовместимость:</a>
              <a className={"value_ships_parameter"}>172 600м3</a>
            </div>
            <div className={"position-list-ships-parameters"}>
              <a className={"ships_parameter"}>Ледопроходимость:</a>
              <a className={"value_ships_parameter"}>2,1 м</a>
            </div>
            <div className={"position-list-ships-parameters"}>
              <a className={"ships_parameter"}>Ледовый класс: </a>
              <a className={"value_ships_parameter"}>Arc7</a>
            </div>
            <div className={"position-list-ships-parameters"}>
              <a className={"ships_parameter"}>Число «Азиподов»: </a>
              <a className={"value_ships_parameter"}>3</a>
            </div>
          </div>
          <img className={"miniShip"} src={MiniShip} alt={"mini_ship"} />
        </div>
      </div>
      <div className={"firstScreen_switch_buttons"}>
        <button className={"switch_button"}>
          <div className={"vector_left"}>
            <div className={"inside_vector"}></div>
          </div>
        </button>
        <button className={"switch_button"}>
          <div className={"vector_right"}>
            <div className={"inside_vector"}></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FirstScreen;
