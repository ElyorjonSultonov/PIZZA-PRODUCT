import React from "react";
import "./Sushi.css";
import { pizzaFilter } from "../../../assets/Svg";
import Sushi1 from "../../../assets/imgs/sushi1.png";
import Sushi2 from "../../../assets/imgs/sushi2.png";
import Sushi3 from "../../../assets/imgs/sushi3.png";
import Sushi4 from "../../../assets/imgs/sushi4.png";

function Sushi() {
  return (
    <div className="sushi">
      <div className="container">
        <div className="sushiTitle">
          <h1>Суши</h1>
          <button>
            <span>{pizzaFilter}</span> Фильтры
          </button>
        </div>
        <div className="row">
          <div className="cards">
            <img src={Sushi1} alt="" />
            <div className="cardBody">
              <h2>Филадельфия кранч</h2>
              <p>
                Тигровая креветка, огурец, <br /> авокадо, соус Айоли, рис,
                ик...
              </p>
              <div className="chooseBtn">
                <button>Выбрать</button>
                <h3>от 399 ₽</h3>
              </div>
            </div>
          </div>
          <div className="cards">
            <img src={Sushi2} alt="" />
            <div className="cardBody">
              <h2>Филадельфия кранч</h2>
              <p>
                Тигровая креветка, огурец, <br /> авокадо, соус Айоли, рис,
                ик...
              </p>
              <div className="chooseBtn">
                <button>Выбрать</button>
                <h3>от 399 ₽</h3>
              </div>
            </div>
          </div>
          <div className="cards">
            <img src={Sushi3} alt="" />
            <div className="cardBody">
              <h2>Филадельфия кранч</h2>
              <p>
                Тигровая креветка, огурец, <br /> авокадо, соус Айоли, рис,
                ик...
              </p>
              <div className="chooseBtn">
                <button>Выбрать</button>
                <h3>от 399 ₽</h3>
              </div>
            </div>
          </div>
          <div className="cards">
            <img src={Sushi4} alt="" />
            <div className="cardBody">
              <h2>Филадельфия кранч</h2>
              <p>
                Тигровая креветка, огурец, <br /> авокадо, соус Айоли, рис,
                ик...
              </p>
              <div className="chooseBtn">
                <button>Выбрать</button>
                <h3>от 399 ₽</h3>
              </div>
            </div>
          </div>
          <div className="cards">
            <img src={Sushi4} alt="" />
            <div className="cardBody">
              <h2>Филадельфия кранч</h2>
              <p>
                Тигровая креветка, огурец, <br /> авокадо, соус Айоли, рис,
                ик...
              </p>
              <div className="chooseBtn">
                <button>Выбрать</button>
                <h3>от 399 ₽</h3>
              </div>
            </div>
          </div>
          <div className="cards">
            <img src={Sushi3} alt="" />
            <div className="cardBody">
              <h2>Филадельфия кранч</h2>
              <p>
                Тигровая креветка, огурец, <br /> авокадо, соус Айоли, рис,
                ик...
              </p>
              <div className="chooseBtn">
                <button>Выбрать</button>
                <h3>от 399 ₽</h3>
              </div>
            </div>
          </div>
          <div className="cards">
            <img src={Sushi2} alt="" />
            <div className="cardBody">
              <h2>Филадельфия кранч</h2>
              <p>
                Тигровая креветка, огурец, <br /> авокадо, соус Айоли, рис,
                ик...
              </p>
              <div className="chooseBtn">
                <button>Выбрать</button>
                <h3>от 399 ₽</h3>
              </div>
            </div>
          </div>
          <div className="cards">
            <img src={Sushi1} alt="" />
            <div className="cardBody">
              <h2>Филадельфия кранч</h2>
              <p>
                Тигровая креветка, огурец, <br /> авокадо, соус Айоли, рис,
                ик...
              </p>
              <div className="chooseBtn">
                <button>Выбрать</button>
                <h3>от 399 ₽</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sushi;
