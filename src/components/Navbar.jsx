import { useState } from "react";
import Logo from "../images/logo.svg";
import Menu from "../images/icon-hamburger.svg";
import Close from "../images/icon-close.svg";
export default function Navbar() {
  const [menu, setMenu] = useState(false);
  function handleClick() {
    setMenu(true);
  }
  function handleClose() {
    setMenu(false);
  }
  return (
    <>
      <div className={menu ? "nav_open" : "close"}>
        <p className="logos">
          <img src={Logo} alt="logo" />
          <img src={Close} alt="close" onClick={handleClose} />{" "}
        </p>
        <nav className="nav_list">
          <li> About</li>
          <li>Careers</li>
          <li> Events</li>
          <li> Products</li>
          <li> Support</li>
        </nav>
      </div>
      <div className="navbar">
        <img src={Logo} alt="logo" />
        <p className="menu">
          <img src={Menu} alt="menu" onClick={handleClick} />
        </p>
        <nav className="nav">
          <li> About</li>
          <li>Careers</li>
          <li> Events</li>
          <li> Products</li>
          <li> Support</li>
        </nav>
      </div>
    </>
  );
}
