import React from "react";
import "../Ecology/style.css";
import SwitchButtonLeft from "../../helpers/SwitchButtons/SwitchButtonLeft";
import SwitchButtonRight from "../../helpers/SwitchButtons/SwitchButtonRight";
import ecologyImg from "../Ecology/images/ecologyImg.png";
const Ecology = () => {
  return (
    <div className="ecology-main">
      <SwitchButtonLeft />
      <div className="ecology-card">
        <div>
          <div>
            <a>Устойчивое развитие</a>
          </div>
          <h3>Безопасность и качество</h3>
          <ul>
            <li>
              <span>
                Tincidunt fames porta pretium congue orci cursus. Ut nisl
                ultrices elit euismod tincidunt. Vitae accumsan tellus lectus
                viverra id scelerisque. Pellentesque viverra in nibh a gravida
                vulputate mauris. Proin nibh fusce faucibus a est sit sit in.
              </span>
            </li>
            <li>
              <span>
                Lobortis imperdiet adipiscing commodo ipsum vulputate in at
                nibh. Diam velit neque nisl pellentesque nunc. Elementum lacus
                commodo eu sed id massa scelerisque.
              </span>
            </li>
            <li>
              <span>
                Lacinia nunc sagittis arcu lobortis sed arcu suspendisse
                imperdiet nunc. Eu nunc tempor ultrices sollicitudin orci diam.
              </span>
            </li>
            <li>
              <span>
                Quisque hac molestie mauris nunc mus nunc. Consequat sed ac
                integer sed nunc ut curabitur tincidunt. Urna eget sed at
                tristique in scelerisque cras.
              </span>
            </li>
          </ul>
        </div>
        <img src={ecologyImg} alt={"ship"} />
      </div>
      <SwitchButtonRight />
    </div>
  );
};

export default Ecology;
