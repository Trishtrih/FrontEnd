import React from "react";
import "../Projects/style.css";
import SwitchButtonLeft from "../../helpers/SwitchButtons/SwitchButtonLeft";
import SwitchButtonRight from "../../helpers/SwitchButtons/SwitchButtonRight";

const Projects = () => {
  return (
    <div className={"projects-main"}>
      <div className="projects-header">
        <h2>ПРОЕКТЫ</h2>
        <div>
          <a>ВСЕ ПРОЕКТЫ</a>
          <div>
            <SwitchButtonLeft />
            <SwitchButtonRight />
          </div>
        </div>
      </div>
      <div className="projects-card">
        <div className="projects-description">
          <div>
            <h3>Diam nulla vulputate id cum</h3>
            <a>
              Fringilla eget auctor non sed viverra mattis. Lectus est est
              ullamcorper eu natoque vitae mi consequat. Eget ac elit viverra
              nec donec cras. Nec nunc nisi augue imperdiet blandit facilisis.
              Massa in purus ultricies libero vitae.
            </a>
          </div>
        </div>
        <div className="projects-info">
          <div>
            <div className="projects-block-info">
              <div>
                <a>130 000</a>
                <a>тонн</a>
              </div>
              <a>вес бетонного основания платформы</a>
            </div>
            <div className="projects-block-info">
              <div>
                <a>3,3</a>
                <a>узла</a>
              </div>
              <a>составила скорость буксировки платформы </a>
            </div>
          </div>
          <div>
            <div className="projects-block-info">
              <div>
                <a>15</a>
                <a>судов</a>
              </div>
              <a>проектная команда</a>
            </div>
            <div className="projects-block-info">
              <div>
                <a>41</a>
                <a>метр</a>
              </div>
              <a>высота каждой колонны</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
