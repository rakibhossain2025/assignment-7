import React from "react";

const Banner = () => {
  return (
    <div className=" relative h-[100vh]">
      <div className="absolute top-2/5 ml-12 z-10 space-y-4">
        <h1 className="text-white text-5xl w-3/4 font-semibold">Bid on Unique Items from Around the World</h1>
        <p className="text-gray-100 w-4/6 text-lg">Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
        <button className="btn rounded-4xl">Explore Auctions</button>
      </div>
      <div className="h-full -z-10">
        <img className="w-full h-full brightness-90" src="Banner-min.jpg" alt="" />
      </div>
    </div>
  );
};

export default Banner;
