import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoStarSharp } from "react-icons/io5";
import { PiPlayCircleThin } from "react-icons/pi";
import { Link } from "react-router-dom";

const Home = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container h-[95vh] relative   w-[100%] ">
      <div className="">
        <Slider {...settings}>
          <div className="!flex items-center justify-center ">
            <h3 className="h-[95vh] w-[100%]">
              <img
                className="h-[95vh] w-[100%] "
                src="https://images.hdqwalls.com/download/dune-part-two-movie-wd-1920x1080.jpg"
                alt=""
              />
              <div className="absolute inset-0 bg-black opacity-10"></div>
            </h3>
            <div className="absolute z-10 mr-[350px] mt-24  flex flex-col gap-8">
              <div>
                <h1 className="text-white">
                  <p className=" text-8xl text-transparent font-bold bg-clip-text bg-[url('https://creative-sorbet-96d1b6.netlify.app/static/media/texure.5fd81b0ea718d21dec89.jpg')]">
                    DUNE: PART TWO
                  </p>
                </h1>
              </div>

              <div className="flex gap-3 text-2xl ">
                <IoStarSharp className="text-red-700 " />
                <IoStarSharp className="text-red-700" />
                <IoStarSharp className="text-red-700" />
                <p className="text-2xl text-gray-400">8.9/10 (Imdb Raiting) </p>
                <p className="text-2xl text-gray-400">2hr:46mins</p>
              </div>
              <div>
                <p className="text-white w-[60%] text-xl">
                  Paul Atreides unites with Chani and the Fremen while seeking
                  revenge against the conspirators who destroyed his family.
                </p>
              </div>
              <div className="flex flex-col gap-4 text-my-red text-xl">
                <p className="text-white ">
                  <span className="text-red-700 mr-2">Director:</span>
                  Denis Villeneuve
                </p>
                <p className="text-white">
                  <span className="text-red-700 mr-2">Writers:</span>
                  Jon Spaihts,Frank Herbert
                </p>
                <p className="text-white">
                  <span className="text-red-700 mr-2">Stars:</span>
                  Timothée Chalamet,Zendaya,Rebecca Ferguson
                </p>
              </div>
              <div>
                <button className="w-[187px] h-[50px] bg-red-700 rounded-md text-white">
                  ► Play Now
                </button>
              </div>
            </div>
            <div className="absolute z-30  ml-[900px] flex items-center gap-8 cursor-pointer ">
              <Link to="/single-page">
                <PiPlayCircleThin className="text-white text-9xl  hover:text-red-600" />
              </Link>
              <p className="text-4xl text-white font-thin  ">WATCH TRAILER</p>
            </div>
          </div>
          <div>
            <div className="!flex items-center justify-center ">
              <h3 className="h-[95vh] w-[100%]">
                <img
                  className="h-[95vh] w-[100%] "
                  src="https://wallpapers.com/images/hd/the-mandalorian-1920-x-1080-background-y71oeham83rs6aum.jpg"
                  alt=""
                />
                <div className="absolute inset-0 bg-black opacity-10"></div>
              </h3>
              <div className="absolute z-10 mr-[350px] mt-24  flex flex-col gap-8">
                <div>
                  <h1 className="text-white">
                    <p className=" text-8xl text-transparent font-bold bg-clip-text bg-[url('https://creative-sorbet-96d1b6.netlify.app/static/media/texure.5fd81b0ea718d21dec89.jpg')]">
                      DUNE: PART TWO
                    </p>
                  </h1>
                </div>

                <div className="flex gap-3 text-2xl ">
                  <IoStarSharp className="text-red-700 " />
                  <IoStarSharp className="text-red-700" />
                  <IoStarSharp className="text-red-700" />
                  <p className="text-2xl text-gray-400">
                    8.9/10 (Imdb Raiting){" "}
                  </p>
                  <p className="text-2xl text-gray-400">2hr:46mins</p>
                </div>
                <div>
                  <p className="text-white w-[60%] text-xl">
                    Paul Atreides unites with Chani and the Fremen while seeking
                    revenge against the conspirators who destroyed his family.
                  </p>
                </div>
                <div className="flex flex-col gap-4 text-my-red text-xl">
                  <p className="text-white ">
                    <span className="text-red-700 mr-2">Director:</span>
                    Denis Villeneuve
                  </p>
                  <p className="text-white">
                    <span className="text-red-700 mr-2">Writers:</span>
                    Jon Spaihts,Frank Herbert
                  </p>
                  <p className="text-white">
                    <span className="text-red-700 mr-2">Stars:</span>
                    Timothée Chalamet,Zendaya,Rebecca Ferguson
                  </p>
                </div>
                <div>
                  <button className="w-[187px] h-[50px] bg-red-700 rounded-md text-white">
                    ► Play Now
                  </button>
                </div>
              </div>
              <div className="absolute z-30  ml-[900px] flex items-center gap-8 cursor-pointer ">
                <Link to="/single-page">
                  <PiPlayCircleThin className="text-white text-9xl  hover:text-red-600" />
                </Link>
                <p className="text-4xl text-white font-thin  ">WATCH TRAILER</p>
              </div>
            </div>
          </div>
          <div className="!flex items-center justify-center ">
            <h3 className="h-[95vh] w-[100%]">
              <img
                className="h-[95vh] w-[100%] "
                src="https://hdfilmcehennemi.cx/wp-content/themes/filmplus/tm/ll_XGZ_ZF8kk0R8fwsVf9KNAGH02YKRXlFf2YaRBvxuYeXlVXgGYXxtUNN.jpg"
                alt=""
              />
              <div className="absolute inset-0 bg-black opacity-10"></div>
            </h3>

            <div className="absolute z-10 mr-[350px] mt-24  flex flex-col gap-8">
              <div>
                <h1 className="text-white">
                  <p className=" text-8xl text-transparent font-bold bg-clip-text bg-[url('https://creative-sorbet-96d1b6.netlify.app/static/media/texure.5fd81b0ea718d21dec89.jpg')]">
                    DUNE: PART TWO
                  </p>
                </h1>
              </div>

              <div className="flex gap-3 text-2xl ">
                <IoStarSharp className="text-red-700 " />
                <IoStarSharp className="text-red-700" />
                <IoStarSharp className="text-red-700" />
                <p className="text-2xl text-gray-400">8.9/10 (Imdb Raiting) </p>
                <p className="text-2xl text-gray-400">2hr:46mins</p>
              </div>
              <div>
                <p className="text-white w-[60%] text-xl">
                  Paul Atreides unites with Chani and the Fremen while seeking
                  revenge against the conspirators who destroyed his family.
                </p>
              </div>
              <div className="flex flex-col gap-4 text-my-red text-xl">
                <p className="text-white ">
                  <span className="text-red-700 mr-2">Director:</span>
                  Denis Villeneuve
                </p>
                <p className="text-white">
                  <span className="text-red-700 mr-2">Writers:</span>
                  Jon Spaihts,Frank Herbert
                </p>
                <p className="text-white">
                  <span className="text-red-700 mr-2">Stars:</span>
                  Timothée Chalamet,Zendaya,Rebecca Ferguson
                </p>
              </div>

              <div>
                <button className="w-[187px] h-[50px] bg-red-700 rounded-md text-white">
                  ► Play Now
                </button>
              </div>
            </div>
            <div className="absolute z-30  ml-[900px] flex items-center gap-8 cursor-pointer ">
              <Link to="/single-page">
                <PiPlayCircleThin className="text-white text-9xl  hover:text-red-600" />
              </Link>
              <p className="text-4xl text-white font-thin  ">WATCH TRAILER</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Home;
