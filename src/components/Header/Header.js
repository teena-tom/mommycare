import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <NavLink to="/">
          {" "}
          Home
          {/* <img className="header__logo" src={Tlogo} alt="logo"></img> */}
        </NavLink>
      </div>
      <div className="header__right">
        <div className="header__daycare">
          {" "}
          <NavLink to="/" className="header__button">
            Daycares
          </NavLink>
        </div>

        <div className="header__children">
          {" "}
          <NavLink to="/children" className="header__button">
            Children
          </NavLink>
        </div>
      </div>
    </header>
  );
}
export default Header;
