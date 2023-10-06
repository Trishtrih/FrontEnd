import React from "react";
import "./style.css";
import MainInformation from "../MainInformation";
import DetailedInformation from "../DetailedInformation";
const Home = () => {
  return (
    <div className={"main-home"}>
      <MainInformation />
      <DetailedInformation />
    </div>
  );
};
export default Home;
