import './Slideshow.scss';
import {Link} from "react-router-dom";
import img1 from'./../../assets/images/daycare-images1.jpg';
import img2 from'./../../assets/images/daycare-image2.jpg';
import img3 from'./../../assets/images/daycare-image3.jpg';

function Slideshow() {
    return(
       <div>
        <div className="slideshow__container">

         {/* Full-width images with number and caption text  */}
        <div className="mySlides__fade">
          <div class="numbertext">1 / 3</div>
          <img src={img1} className='Image' alt='Hero_Image'></img>
          <div class="text">Caption Text</div>
        </div>,
      
        <div className="mySlides__fade">
          <div class="numbertext">2 / 3</div>
          <img src={img2} className='Image' alt='Hero_Image'></img>
          <div class="text">Caption Two</div>
        </div>,
      
        <div className="mySlides__fade">
          <div class="numbertext">3 / 3</div>
          <img src={img3} className='Image' alt='Hero_Image'></img>
          <div class="text">Caption Three</div>
        </div>,
      
         {/* Next and previous buttons  */}
        <Link class="prev" onclick="plusSlides(-1)">&#10094;</Link>
        <Link class="next" onclick="plusSlides(1)">&#10095;</Link>
      </div>
     
      
       {/* The dots/circles  */}
      <div className='.dots' >
      {/* style="text-align:center" */}
        <Link class="dot" onclick="currentSlide(1)"></Link>
        <Link class="dot" onclick="currentSlide(2)"></Link>
        <Link class="dot" onclick="currentSlide(3)"></Link>
      </div>
      </div>
      
    )
}
export default Slideshow;