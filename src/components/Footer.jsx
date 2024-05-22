import Logo from "../images/logo.svg";
import Facebook from "../images/icon-facebook.svg";
import Instagram from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_item1">
        <img src={Logo} alt="logo" />
        <ul className="footer_item1_list">
          <li>About</li>
          <li>Career</li>
          <li>Events</li>
          <li>product</li>
          <li>Support</li>
        </ul>
      </div>
      <div className="footer_item2">
        <ul className="footer_item2_list">
          <img src={Facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={pinterest} alt="pinterest" />
          <img src={Instagram} alt="instagram" />
        </ul>
        <p className="footer_rights">
          Loop Studios &copy; All rights reserved.
        </p>
      </div>
    </footer>
  );
}
