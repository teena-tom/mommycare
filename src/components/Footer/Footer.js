import "./Footer.scss";
import { Link } from "react-router-dom";
import fb from './../../assets/icons/Facebook-Icon.svg';
import insta from './../../assets/icons/Instagram-Icon.svg';
import yelp from './../../assets/icons/Yelp-Icon.svg';

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
        <Link  to="https://www.yelp.com/"
          ><img className="footer__social"
          src={yelp} alt="Twitter"
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