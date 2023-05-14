import { NavLink } from "react-router-dom";
import Hlogo from "./../../assets/icons/home-logo.png";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <NavLink to="/">
          {" "}
          <img className="header__logo" src={Hlogo} alt="logo"></img>
        </NavLink>
      </div>
      <div className="header__right">
        <div className="header__daycare">
          {" "}
          <NavLink to="/daycares" className="header__button">
            Daycares
          </NavLink>
        </div>

        <div className="header__children">
          {" "}
          <NavLink to="/children" className="header__button">
            Parents
          </NavLink>
        </div>
      </div>
    </header>
  );
}
export default Header;
