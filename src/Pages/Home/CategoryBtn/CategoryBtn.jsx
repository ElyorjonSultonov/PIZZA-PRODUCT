import React from "react";
import "./CategoryBtn.css";
import { action } from "../../../assets/Svg";
import { pizzaBtn } from "../../../assets/Svg";
import { sushi } from "../../../assets/Svg";
import { drink } from "../../../assets/Svg";
import { appetizers } from "../../../assets/Svg";
import { kombo } from "../../../assets/Svg";
import { desserts } from "../../../assets/Svg";
import { sauces } from "../../../assets/Svg";
import Category1 from "../../../assets/imgs/category1.png";
import Category2 from "../../../assets/imgs/category2.png";

function CategoryBtn() {
  return (
    <div className="categoryBtn">
      <div className="container">
        <div className="row">
          <button>
            <span className="hoverSpan"> {action}</span> <span>Акции</span>
          </button>
          <button>
            <span>{sauces}</span> <span>Пицца</span>
          </button>
          <button>
            <span className="hoverSpan"> {appetizers}</span> <span>Суши</span>
          </button>
          <button>
            <span className="hoverSpan"> {desserts}</span> <span>Напитки</span>
          </button>
          <button>
            <span className="hoverSpan"> {pizzaBtn}</span> <span>Закуски</span>
          </button>
          <button>
            <span className="hoverSpan"> {kombo}</span> <span>Комбо</span>
          </button>
          <button>
            <span className="hoverSpan"> {drink}</span>
            <span>Десерты</span>
          </button>
          <button>
            <span className="hoverSpan"> {sushi}</span>
            <span>Соусы</span>
          </button>
        </div>
        <div className="rowG">
          <div className="cards">
            <img src={Category1} alt="" />
            <p>
              3 средние пиццы <br /> от 999 рублей
            </p>
          </div>
          <div className="cards">
            <img src={Category2} alt="" />
            <p>
              Кэшбек 10% на <br /> самовывоз (доставка)
            </p>
          </div>
          <div className="cards">
            <img src={Category1} alt="" />
            <p>
              3 средние пиццы <br /> от 999 рублей
            </p>
          </div>
          <div className="cards">
            <img src={Category2} alt="" />
            <p>
              Кэшбек 10% на <br /> самовывоз (доставка)
            </p>
          </div>
        </div>
        <form action="">
          <p>Проверить адрес доставки</p>
          <input type="text" placeholder="Адрес" />
          <button>Проверить</button>
        </form>
      </div>
    </div>
  );
}

export default CategoryBtn;
