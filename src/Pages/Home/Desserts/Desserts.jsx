import React from "react";
import "./Desserts.css";
import Desserts1 from "../../../assets/imgs/Desserts1.png";
import Dessert2 from "../../../assets/imgs/Desserts2.png";
import Desserts3 from "../../../assets/imgs/Desserts3.png";
import Desserts4 from "../../../assets/imgs/Desserts4.png";
import Desserts5 from "../../../assets/imgs/Desserts5.png";
import Desserts6 from "../../../assets/imgs/Desserts6.png";

function Desserts() {
  return (
    <div className="desserts">
      <div className="container">
        <div className="dessertsTitle">
          <h1>Десерты</h1>
        </div>
        <div className="row">
          <div className="cards">
            <img src={Desserts1} alt="" />
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
            <img src={Dessert2} alt="" />
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
            <img src={Desserts3} alt="" />
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
            <img src={Desserts4} alt="" />
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
            <img src={Desserts4} alt="" />
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
            <img src={Desserts5} alt="" />
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
            <img src={Desserts6} alt="" />
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
            <img src={Desserts3} alt="" />
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

export default Desserts;
