import React from "react";
import "./Snacks.css";
import Snacks1 from "../../../assets/imgs/snacks1.png";
import Snacks2 from "../../../assets/imgs/snacks2.png";
import Snacks3 from "../../../assets/imgs/snacks3.png";
import Snacks4 from "../../../assets/imgs/snacks4.png";
import Pizzaa1 from "../../../assets/imgs/pizza1.png";
import Pizzaa2 from "../../../assets/imgs/pizza2.png";

function Snacks() {
  return (
    <div className="snacks">
      <div className="container">
        <div className="snacksTitle">
          <h1>Закуски</h1>
        </div>
        <div className="row">
          <div className="cards">
            <img src={Snacks1} alt="" />
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
            <img src={Snacks2} alt="" />
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
            <img src={Snacks3} alt="" />
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
            <img src={Snacks4} alt="" />
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
            <img src={Snacks4} alt="" />
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
            <img src={Snacks3} alt="" />
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
            <img src={Pizzaa1} alt="" />
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
            <img src={Pizzaa2} alt="" />
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

export default Snacks;
