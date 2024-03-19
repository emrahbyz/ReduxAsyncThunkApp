import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import Home from "./Home";
const Navbar = () => {
  return (
    <nav className="bg-black via-black opacity-90 from-black   p-1 absolute w-[100%]  z-40 shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-4xl text-my-red font-bold  tracking-widest mb-12 ml-2 ">
            Cinematrix
          </p>
        </div>
        <div className="flex gap-6 text-xl font-medium cursor-pointer mr-28">
          <p className="text-white ">Home</p>
          <p className="text-white ">Series</p>
          <p className="text-white ">Movies</p>
          <p className="text-white ">Pages</p>
          <p className="text-white ">Pricing</p>
          <p className="text-white ">Contact</p>
        </div>
        <div className="flex gap-4 mr-12  ">
          <IoIosSearch className="text-white  text-5xl hover:scale-95" />
          <IoIosNotifications className="text-white text-5xl hover:scale-95" />
          <FaUser className="text-white text-4xl mt-1 hover:scale-95" />
          <button className="w-[200px] bg-my-red text-xl font-bold text-white rounded-md cursor-pointer hover:scale-95">
            Subscribe Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
