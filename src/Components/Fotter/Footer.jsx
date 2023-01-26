import React from "react";
import "./Footer.css";
import { pizza } from "../../assets/Svg";
import { call } from "../../assets/Svg";
import { instagarm } from "../../assets/Svg";
import { fasebook } from "../../assets/Svg";
import { locationFooter } from "../../assets/Svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="logo">
            <span>{pizza}</span>
            <p>© Copyright 2021 — Куда Пицца</p>
          </div>
          <ul>
            <li className="bold">Куда пицца</li>
            <li>О компании</li>
            <li>Пользовательское соглашение</li>
            <li>Условия гарантии</li>
          </ul>
          <ul>
            <li className="bold">Помощь</li>
            <li>Ресторан</li>
            <li>Контакты</li>
            <li>Поддержка</li>
            <li>Отследить заказ</li>
          </ul>
          <ul className="dfex">
            <li className="bold">Контакты</li>
            <li className="footerIcon">
              <span>{call}</span> +7 (926) 223-10-11
            </li>
            <li className="footerIcon">
              <span>{locationFooter}</span> Москва, ул. Юных Ленинцев, д.99
            </li>
            <li className="footerIcon">
              <span>{fasebook}</span> Facebok
            </li>
            <li className="footerIcon">
              <span>{instagarm}</span> Instagram
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
