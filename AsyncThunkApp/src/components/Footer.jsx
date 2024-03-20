import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center bg-footer h-[270px] w-full p-16">
      <div className="flex justify-between ">
        <div className="flex flex-col gap-6 text-xl font-medium ">
          <div className="flex gap-10">
            <p className="text-white">Terms of Use</p>
            <p className="text-white">Privacy Policy</p>
            <p className="text-white">Blog</p>
            <p className="text-white">FAQ</p>
            <p className="text-white">Watch List</p>
          </div>

          <p className="text-white font-thin w-5/6">
            © 2024 STREAMIT. All Rights Reserved. All videos and shows on this
            platform are trademarks of, and all related images and content are
            the property of, Streamit Inc. Duplication and copy of this is
            strictly prohibited. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col text-2xl font-medium cursor-pointer gap-6 mr-96 ">
          <div className="">
            <p className="text-white text-center">Follow Us</p>
          </div>
          <div className="flex gap-12">
            <FaFacebook className="text-white text-5xl hover:scale-95" />
            <BsTwitterX className="text-white text-5xl hover:scale-95" />
            <FaGithub className="text-white text-5xl hover:scale-95" />
            <FaSquareInstagram className="text-white text-5xl  hover:scale-95" />
          </div>
        </div>

        <div className="flex flex-col text-xl font-medium cursor-pointer gap-6 items-center  ">
          <div className="w-[200px] text-center">
            <p className="text-white text-2xl ">Streamit App</p>
          </div>
          <div className="flex gap-12">
            <FaAppStoreIos className="text-white text-5xl hover:scale-95" />
            <IoLogoGooglePlaystore className="text-white text-5xl hover:scale-95" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
