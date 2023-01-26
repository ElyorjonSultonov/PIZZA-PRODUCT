import React from "react";
import "./Combo.css";
import Combo1 from "../../../assets/imgs/Combo1.png";
import Combo2 from "../../../assets/imgs/Combo2.png";
import Combo3 from "../../../assets/imgs/Combo3.png";
import Combo4 from "../../../assets/imgs/Combo4.png";

function Combo() {
  return (
    <div className="combo">
      <div className="container">
        <div className="comboTitle">
          <h1>Комбо</h1>
        </div>
        <div className="row">
          <div className="cards">
            <img src={Combo1} alt="" />
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
            <img src={Combo2} alt="" />
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
            <img src={Combo3} alt="" />
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
            <img src={Combo4} alt="" />
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
            <img src={Combo2} alt="" />
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
            <img src={Combo1} alt="" />
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
            <img src={Combo4} alt="" />
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
            <img src={Combo3} alt="" />
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

export default Combo;
