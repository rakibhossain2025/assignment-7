import React from "react";
import { IoNotifications } from "react-icons/io5";

const Header = () => {
  return (
    <div>
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <a className="cursor-pointer font-bold text-4xl text-[#003EA4]">
            Auction<span className="text-[#FFD337]">Gallery</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Auctions</a>
            </li>
            <li>
              <a>Categories</a>
            </li>
            <li>
              <a>How to works</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="avatar flex gap-5 items-center">
            <div className="relative cursor-pointer">
              <IoNotifications size={25} className="cursor-pointer mr-1" />
              <span className="absolute top-0 z-10 bg-red-500 px-1 py-0 text-sm right-0 rounded-full">
                9
              </span>
            </div>
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
