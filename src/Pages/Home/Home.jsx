import React from "react";
import "./Home.css";
import CategoryBtn from "./CategoryBtn/CategoryBtn";
import Pizza from "./Pizza/Pizza";

function Home() {
  return (
    <div className="homePage">
      <CategoryBtn />
      <Pizza />
    </div>
  );
}

export default Home;
