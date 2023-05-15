import "./Footer.scss";
import { Link } from "react-router-dom";
import fb from './../../assets/icons/icon-facebook.png';
import insta from './../../assets/icons/icon-instagram.png';
import twittr from './../../assets/icons/icon-twitter.png';

function Footer() {
  return (
    <div className="footer">
         <div className="footer__left">
        <div className="footer__left-social">
        <Link className="footer__left footer__left--social" to="https://www.instagram.com"
          ><img
            src={insta}
            alt="Instagram"
           
        /></Link>
        </div>
            <div className="footer__left-social">
        <Link className="footer__left footer__left--social" to="https://www.facebook.com/"
          ><img
            src={fb}
            alt="facebook"
           
        /></Link>
        </div>
            <div className="footer__left-social">
        <Link className="footer__left footer__left--social" to="https://www.twitter.com/"
          ><img src={twittr} alt="Twitter"
        /></Link>
        </div>
      </div>
      <div className="footer__right">
      <p className="footer__text">&copy; MommyCare Inc. All Rights Reserved </p>
      </div>
    </div>
  );
}
export default Footer;