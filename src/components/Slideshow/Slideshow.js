import "./Slideshow.scss";
import { Link } from "react-router-dom";
import img1 from "./../../assets/images/daycare-images1.jpg";
import img2 from "./../../assets/images/daycare-image2.jpg";
import img3 from "./../../assets/images/daycare-image3.jpg";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Slideshow() {

return(
  <div className="slideshow">
    <Carousel>
      <div>
        <img src={img1}>

        </img>
      </div>
      <div>
        <img src={img2}>
          
        </img>
      </div>
      <div>
        <img src={img3}>
          
        </img>
      </div>
    </Carousel>
  </div>
)
}
export default Slideshow;
