import React from "react";
import "../News/style.css";
const News = () => {
  return (
    <div className={"news"}>
      <div className={"news-content"}>
        <div className={"news-header"}>
          <h2>НОВОСТИ</h2>
          <a href={"#"}>ВСЕ НОВОСТИ</a>
        </div>
        <div className={"news-posts"}>
          <div className={"news-post"}>
            <div className={"news-date"}>
              <a>29 декабря 2022 Г.</a>
            </div>
            <div className={"news-info"}>
              <h2 className={"news-headline"}>
                Elementum ipsum eget venenatis at rutrum aenean. Neque gravida
                nunc dolor tellus ac tellus. Turpis.
              </h2>
              <a className={"news-text"}>
                Euismod nunc vel sit orci odio eget semper pharetra risus. Nibh
                pharetra neque amet enim egestas tincidunt. Eu.
              </a>
            </div>
          </div>
          <div className={"news-post"}>
            <div className={"news-date"}>
              <a>20 декабря 2022 Г.</a>
            </div>
            <div className={"news-info"}>
              <h2 className={"news-headline"}>
                Volutpat vehicula scelerisque consectetur nullam nunc vel.
                Sagittis enim feugiat maecenas.
              </h2>
              <a className={"news-text"}>
                Facilisis aliquam in velit nibh ipsum quis. Diam nulla fringilla
                etiam id et egestas dui odio. Lectus nam gravida.
              </a>
            </div>
          </div>
          <div className={"news-post"}>
            <div className={"news-date"}>
              <a>14 декабря 2022 Г.</a>
            </div>
            <div className={"news-info"}>
              <h2 className={"news-headline"}>
                Etiam donec fames sed nunc senectus ut eget. Nibh felis eget.
              </h2>
              <a className={"news-text"}>
                Volutpat egestas porttitor duis purus quam est quam. Tempor
                aliquam vel arcu euismod. Mattis ullamcorper.
              </a>
            </div>
          </div>
          <div className={"news-post"}>
            <div className={"news-date"}>
              <a>29 декабря 2022 Г.</a>
            </div>
            <div className={"news-info"}>
              <h2 className={"news-headline"}>
                Amet volutpat urna vitae vitae. Varius accumsan mattis egestas
                sagittis arcu libero. Sit at.
              </h2>
              <a className={"news-text"}>
                Vestibulum ut justo sagittis eu. Tincidunt viverra odio mauris
                ut nec tellus ante. Sit ac etiam sed vestibulum.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
