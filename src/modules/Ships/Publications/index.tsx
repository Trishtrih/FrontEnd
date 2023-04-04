import React from "react";
import "../Publications/style.css";
import ImageForPublicationPost from "../Publications/images/imageForPublicationPost.png";
const Publications = () => {
  return (
    <div className="publications-main">
      <div className="publications-content">
        <div className={"publications-header"}>
          <h2>ПУБЛИКАЦИИ</h2>
          <a href={"#"}>ВСЕ ПУБЛИКАЦИИ</a>
        </div>
        <div className={"publications-posts"}>
          <div className="publications-post">
            <img src={ImageForPublicationPost} alt={"ship"} />
            <a className={"publications-post-date"}>6 сентября 2022 Г.</a>
            <a className={"publications-post-main-info"}>
              Nibh lacinia venenatis bibendum eget fermentum semper amet. Sed eu
              quis sed erat aliquam elementum nec. Pellentesque fringilla nunc.
            </a>
            <a className={"publications-post-link"}>
              Et blandit volutpat sed ullamcorper massa.
            </a>
          </div>
          <div className="publications-post">
            <img src={ImageForPublicationPost} alt={"ship"} />
            <a className={"publications-post-date"}>6 сентября 2022 Г.</a>
            <a className={"publications-post-main-info"}>
              Mattis sem habitant non vitae scelerisque. Sagittis eleifend id
              convallis posuere feugiat nibh sed risus et. Id aliquam enim ut ac
              nunc porttitor.
            </a>
            <a className={"publications-post-link"}>
              Sollicitudin aliquet lorem sed varius a eget quis.
            </a>
          </div>
          <div className="publications-post">
            <img src={ImageForPublicationPost} alt={"ship"} />
            <a className={"publications-post-date"}>5 сентября 2022 Г.</a>
            <a className={"publications-post-main-info"}>
              Sit quis non facilisis posuere. Nec sit auctor nibh integer lacus.
              Posuere vel amet quam egestas pulvinar dictum nunc tellus vitae.
              Non amet lacus.
            </a>
            <a className={"publications-post-link"}>
              In nulla non mattis facilisi sapien. In sodales.
            </a>
          </div>
          <div className="publications-post">
            <img src={ImageForPublicationPost} alt={"ship"} />
            <a className={"publications-post-date"}>8 сентября 2022 Г.</a>
            <a className={"publications-post-main-info"}>
              Lobortis vitae in tellus ac fames amet. Magna et in nunc
              suspendisse eget. Massa ultrices velit turpis orci non gravida
              praesent in nibh quis.
            </a>
            <a className={"publications-post-link"} href={"#"}>
              Sagittis consequat placerat egestas nunc.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
