import React from "react";
import BannerComp from "./BannerComp";
import AllItems from "./AllItems";
import NumberUseSate from "./NumberUseState";
import StringComp from "./StringComp";
import BooleanState from "./BooleanState";
import ObjectState from "./ObjectState";
import ArrayComp from "./ArrayComp";
import AxiosComp from "./AxiosComp";
const Home = () => {
  return (
    <div>
      <BannerComp />
      <AllItems />
      <NumberUseSate />
      <hr />
      <StringComp />
      <hr />
      <BooleanState />
      <hr />
      <ObjectState />
      <hr />
      <ArrayComp />
      <h2>UseEffect - Axios</h2>
      <AxiosComp />
    </div>
  );
};

export default Home;
