"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { services } from "../assets/data/services";
import { review } from "../assets/data/review";
import Footer from "./Footer";

export default function Testimonial() {
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
        {review.map((d) => (
          <div key={d.name} className="">
            <div className="bg-white h-[300px]   text-black rounded-xl">
              <div className=" rounded-t-xl h-40 flex justify-center items-center">
                <img
                  src={d.img}
                  alt=""
                  className="h-40 w-40 p-5 rounded-full "
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center">{d.review}</p>
              </div>
              <div className="flex justify-center">
                <button className="bg-blue-800 text-white text-lg px-6 py-1 rounded-xl flex justify-center">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Footer />
    </div>
  );
}
