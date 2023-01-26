import React from "react";
import "./Home.css";
import CategoryBtn from "./CategoryBtn/CategoryBtn";
import Pizza from "./Pizza/Pizza";
import Sushi from "./Sushi/Sushi";
import Snacks from "./Snacks/Snacks";
import Desserts from "./Desserts/Desserts";
import Drink from "./Drink/Drink";
import Sauces from "./Sauces/Sauces";
import Combo from "./Combo/Combo";
import Delivery from "./Delivery/Delivery";

function Home() {
  return (
    <div className="homePage">
      <CategoryBtn />
      <Pizza />
      <Sushi />
      <Snacks />
      <Desserts />
      <Drink />
      <Sauces />
      <Combo />
      <Delivery />
    </div>
  );
}

export default Home;
