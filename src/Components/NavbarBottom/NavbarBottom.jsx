import React from "react";
import "./NavbarBottom.css";
import { pizza } from "../../assets/Svg";
import { basket } from "../../assets/Svg";

function NavbarBottom() {
  return (
    <div>
      <div className="navBottom">
        <div className="container">
          <div className="row">
            <div className="cardLeft">
              <span>{pizza}</span>
              <p></p>
            </div>
            <div className="cardRight">
              <button>
                {basket}<span>0 ₽</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarBottom;
