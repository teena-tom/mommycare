import "./Slideshow.scss";
import { Link } from "react-router-dom";
import img0 from "./../../assets/images/image0.jpg";
import img1 from "./../../assets/images/body-image.jpeg";
import img2 from "./../../assets/images/daycare-image2.jpg";
import img3 from "./../../assets/images/daycare-image3.jpg";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { NavLink } from "react-router-dom";

function Slideshow() {
  return (
    <div className="slideshow">
      <Carousel className="slideshow__carousel">
        <div>
          <img src={img0} alt="sldieshow"></img>
        </div>
        <div>
          <img src={img1} alt="sldieshow"></img>
        </div>
        <div>
          <img src={img2} alt="sldieshow"></img>
        </div>
        <div>
          <img src={img3} alt="sldieshow"></img>
        </div>
      </Carousel>

      <div className="slideshow__hero-text">
        <h1>ENROLL YOUR CHILD IN ONE OF OUR DAYCARE</h1>

        <NavLink to="/daycares" className="slideshow__button">
          Find Daycare
        </NavLink>
      </div>
    </div>
  );
}
export default Slideshow;
