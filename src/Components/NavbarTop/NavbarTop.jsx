import React from "react";
import "./NavbarTop.css";
import { location } from "../../assets/Svg";
import { account } from "../../assets/Svg";

function NavbarTop() {
  return (
    <div>
      <nav>
        <div className="container">
          <div className="row">
            <div className="cardLeft">
              <div className="logo">
                <span>{location}</span>
                <p>Москва</p>
              </div>
              <p className="adress">Проверить адрес</p>
              <div className="delivery">
                <p>Среднее время доставки*:</p>
                <span>00:24:19</span>
              </div>
            </div>
            <div className="cardRight">
              <p>
                Время работы: с <span>11:00</span> до <span>23:00</span>{" "}
              </p>
              <div className="account">
                <span>{account}</span>
                <p>Войти в аккаунт</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarTop;
