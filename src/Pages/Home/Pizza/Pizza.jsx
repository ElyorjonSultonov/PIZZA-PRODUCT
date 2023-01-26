import React from "react";
import "./Pizza.css";
import { pizzaFilter } from "../../../assets/Svg";

function Pizza() {
  return (
    <div className="pizzaPage">
      <div className="container">
        <div className="pizzaTitle">
          <h1>Пицца</h1>
          <button>
            <span>{pizzaFilter}</span> Фильтры
          </button>
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default Pizza;
