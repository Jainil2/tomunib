import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { services } from "../../assets/data/services";
import { review } from "../../assets/data/review";



const Header = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div>
      
      <Slider {...settings}>
        
        
          <div className="">
            <div
           
            className="bg-white h-[300px]   text-black rounded-xl"
          >
            <div class="max-w-screen-lg mx-auto mt-8 owl-carousel">
    <div class="w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
      <img src="https://placekitten.com/600/400" alt="Slide 1" class="w-full h-full object-cover" />
    </div>
    <div class="w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
      <img src="https://placekitten.com/601/400" alt="Slide 2" class="w-full h-full object-cover" />
    </div>
    <div class="w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
      <img src="https://placekitten.com/602/400" alt="Slide 3" class="w-full h-full object-cover" />
    </div>
    
  </div>

           
          </div>
          </div>
       
        
      </Slider>
     
       
     
    </div>
  );
};

export default Header;
