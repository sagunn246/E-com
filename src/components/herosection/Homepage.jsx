import React from "react";
import { CiShoppingCart } from "react-icons/ci";

function Homepage() {
  const handleClick = () => {
    const element = document.getElementById("product");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="relative flex flex-col justify-center md:mt-0 mt-0 lg:mt-25 mx-0 md:mx-0 lg:mx-[100px] h-[88vh] md:rounded-[0px] rounded-[0px] lg:rounded-lg overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="relative z-20 px-6 md:px-10 text-white font-mono flex flex-col justify-center h-full mt-5 items-start text-left max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-2 drop-shadow-2xl leading-tight">
          <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Order your
          </span>
        </h1>
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 drop-shadow-2xl leading-tight">
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
            Favourite food
          </span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl mb-6 text-gray-200 drop-shadow-lg leading-relaxed font-light max-w-3xl">
          Discover a variety of delicious meals made with fresh ingredients. From quick bites to full feasts, we bring your favourite food right to your doorstep—
          <span className="text-orange-300 font-medium"> fast, hot, and tasty!</span>
          .
        </p>

        <button className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white px-8 py-3 md:px-10 md:py-4 flex rounded-full items-center gap-3 text-lg md:text-xl font-bold hover:scale-105 transition-all duration-300 cursor-pointer shadow-2xl shadow-orange-500/25" onClick={() => handleClick()}>
          <span>Shop Now</span>
          <CiShoppingCart className="text-2xl md:text-3xl" />
        </button>
      </div>
    </div>
  );
}

export default Homepage;
