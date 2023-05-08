import "./Slideshow.scss";
import { Link } from "react-router-dom";
import img1 from "./../../assets/images/daycare-images1.jpg";
import img2 from "./../../assets/images/daycare-image2.jpg";
import img3 from "./../../assets/images/daycare-image3.jpg";
import { useState } from "react";

function Slideshow() {
  const slides = [<img src={img1} alt="img"></img>,
  <img src={img2} alt="img"></img>,
  <img src={img3} alt="img"></img>
];
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="slideshow__container">
      Image Slider
      <div className="slideshow__slider">
        <div className="slideshow__leftarrow" onClick={goToPrevious}>
          ˂
        </div>
        <div className="slideshow__rightarrow" onClick={goToNext}>
          ˃
        </div>
        <div className="slideshow__hero"></div>
        <div className="slideshow__dotsContainer">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className="slideshow__dot"
              onClick={() => goToSlide(slideIndex)}
            >
              ●
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Slideshow;
