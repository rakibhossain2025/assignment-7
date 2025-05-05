import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 text-center space-y-3 pt-12 pb-5 mt-5">
      <div>
        <a className="cursor-pointer font-bold text-4xl text-[#003EA4]">
          Auction<span className="text-[#FFD337]">Gallery</span>
        </a>
      </div>
      <div className="flex gap-3 justify-center text-lg">
        <h4>Bid.</h4>
        <h4>Win.</h4>
        <h4>Own.</h4>
      </div>
      <div>
        <nav className="flex justify-center gap-3 list-none text-lg">
          <li className="hover:underline cursor-pointer">
            <a>Home</a>
          </li>
          <li className="hover:underline cursor-pointer">
            <a>Auctions</a>
          </li>
          <li className="hover:underline cursor-pointer">
            <a>Categories</a>
          </li>
          <li className="hover:underline cursor-pointer">
            <a>How to works</a>
          </li>
        </nav>
      </div>
      <div>
        <p>
          {" "}
          © {new Date().getFullYear()} - All right reserved by rakibul
          Industries Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
