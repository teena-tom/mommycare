import "./Footer.scss";
import { Link } from "react-router-dom";
import fb from './../../assets/icons/icon-facebook.png';
import insta from './../../assets/icons/icon-instagram.png';
import twittr from './../../assets/icons/icon-twitter.png';

function Footer() {
  return (
    <div className="footer">
         <div className="footer__left">
          <div className="footer__jointext">
         <h4 >Join us on Social</h4> </div>
         <div className="footer__social-container">
        <div className="footer__left-social">
        <Link  to="https://www.instagram.com"
          ><img className="footer__social"
            src={insta}
            alt="Instagram"
           
        /></Link>
        </div>
            <div className="footer__left-social">
        <Link  to="https://www.facebook.com/"
          ><img className="footer__social"
            src={fb}
            alt="facebook"
           
        /></Link>
        </div>
            <div className="footer__left-social">
        <Link  to="https://www.twitter.com/"
          ><img className="footer__social"
          src={twittr} alt="Twitter"
        /></Link>
        </div>
        </div>
      </div>
      <div className="footer__right">
      <p className="footer__text">&copy; MommyCare Inc. All Rights Reserved </p>
      </div>
    </div>
  );
}
export default Footer;