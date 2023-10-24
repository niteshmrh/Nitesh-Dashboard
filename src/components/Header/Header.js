import React from "react";
import "./style.css";
import { Icons } from "../../assets/icons";
import Clock from "../../hooks/Clock";

function Header(props) {
  return (
    <header className="header-section">
      <Clock />

      <div className="profile-section">
        <div className="profile">{Icons.RxPerson}</div>

        <div className="profile-name">
          <button className="profile-btn">
            <h6>Agent Name {Icons.FaCaretDown}</h6>
          </button>

          <div className="profile-dropdown card">
            <ul className="dropdown-items">
              <li>Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
