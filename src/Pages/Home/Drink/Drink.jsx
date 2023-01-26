import React from "react";
import "./Drink.css";
import Drink1 from "../../../assets/imgs/Drink1.png";
import Drink2 from "../../../assets/imgs/Drink2.png";
import Drink3 from "../../../assets/imgs/Drink3.png";
import Drink4 from "../../../assets/imgs/Drink4.png";
import Drink5 from "../../../assets/imgs/Drink5.png";
import Drink6 from "../../../assets/imgs/Drink6.png";

function Drink() {
  return (
    <div className="drink">
      <div className="container">
        <div className="drinkTitle">
          <h1>Напитки</h1>
        </div>
        <div className="row">
          <div className="cards">
            <img src={Drink1} alt="" />
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
            <img src={Drink2} alt="" />
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
            <img src={Drink3} alt="" />
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
            <img src={Drink4} alt="" />
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
            <img src={Drink5} alt="" />
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
            <img src={Drink6} alt="" />
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
            <img src={Drink1} alt="" />
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
            <img src={Drink2} alt="" />
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

export default Drink;
