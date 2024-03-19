import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container h-[85vh]  w-[100%]   overflow-hidden  ">
      <div className="">
        <Slider {...settings}>
          <div className="!flex items-center justify-center">
            <h3 className="h-[90vh] w-[100%]">
              <img
                className="h-[90vh] w-[100%]"
                src="https://wallpapers.com/images/hd/dolittle-adventure-movie-mik8ljs59ruwwght.jpg"
                alt=""
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className="h-[90vh] w-[100%]"
                src="https://images7.alphacoders.com/110/1109651.jpg"
                alt=""
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className="h-[90vh] w-[100%]"
                src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16379585_v_h9_ad.jpg"
                alt=""
              />
            </h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Home;
