import React from "react";
import "./Pizza.css";
import { pizzaFilter } from "../../../assets/Svg";
import Pizzaa1 from "../../../assets/imgs/pizza1.png";
import Pizzaa2 from "../../../assets/imgs/pizza2.png";
import Pizzaa3 from "../../../assets/imgs/pizza3.png";
import Pizzaa4 from "../../../assets/imgs/pizza4.png";

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
        <div className="row">
          <div className="cards">
            <img src={Pizzaa1} alt="" />
            <div className="cardBody">
              <h2>Чикен Сладкий Чили</h2>
              <p>
                Курица, Лук, Перец Халапеньо, <br /> Сыр Моцарелла, Томатный
                соу...
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
              <h2>Чикен Сладкий Чили</h2>
              <p>
                Курица, Лук, Перец Халапеньо, <br /> Сыр Моцарелла, Томатный
                соу...
              </p>
              <div className="chooseBtn">
                <button>Выбрать</button>
                <h3>от 399 ₽</h3>
              </div>
            </div>
          </div>
          <div className="cards">
            <img src={Pizzaa3} alt="" />
            <div className="cardBody">
              <h2>Чикен Сладкий Чили</h2>
              <p>
                Курица, Лук, Перец Халапеньо, <br /> Сыр Моцарелла, Томатный
                соу...
              </p>
              <div className="chooseBtn">
                <button>Выбрать</button>
                <h3>от 399 ₽</h3>
              </div>
            </div>
          </div>
          <div className="cards">
            <img src={Pizzaa4} alt="" />
            <div className="cardBody">
              <h2>Чикен Сладкий Чили</h2>
              <p>
                Курица, Лук, Перец Халапеньо, <br /> Сыр Моцарелла, Томатный
                соу...
              </p>
              <div className="chooseBtn">
                <button>Выбрать</button>
                <h3>от 399 ₽</h3>
              </div>
            </div>
          </div>
          <div className="cards">
            <img src={Pizzaa4} alt="" />
            <div className="cardBody">
              <h2>Чикен Сладкий Чили</h2>
              <p>
                Курица, Лук, Перец Халапеньо, <br /> Сыр Моцарелла, Томатный
                соу...
              </p>
              <div className="chooseBtn">
                <button>Выбрать</button>
                <h3>от 399 ₽</h3>
              </div>
            </div>
          </div>
          <div className="cards">
            <img src={Pizzaa3} alt="" />
            <div className="cardBody">
              <h2>Чикен Сладкий Чили</h2>
              <p>
                Курица, Лук, Перец Халапеньо, <br /> Сыр Моцарелла, Томатный
                соу...
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
              <h2>Чикен Сладкий Чили</h2>
              <p>
                Курица, Лук, Перец Халапеньо, <br /> Сыр Моцарелла, Томатный
                соу...
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
              <h2>Чикен Сладкий Чили</h2>
              <p>
                Курица, Лук, Перец Халапеньо, <br /> Сыр Моцарелла, Томатный
                соу...
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

export default Pizza;
