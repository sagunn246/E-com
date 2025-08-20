import React, { useState } from "react";
import Signup from "./Signup/Signup";
import Login from "./login/Login";

const MainAuth = () => {
  const [screen, setScreen] = useState(true);

  return (
    <div
      className="flex min-h-screen w-full justify-center items-center p-6"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url('https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl w-full flex flex-col md:flex-row bg-white/40 backdrop-blur-md rounded-3xl shadow-2xl shadow-black/40 overflow-hidden border border-white/20">

        {/* Left Image */}
        <div className="hidden md:block w-1/2 relative group">
          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
            alt="Food"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/20 flex items-center justify-center p-4">
            <h2 className="text-white text-3xl md:text-4xl font-bold text-center leading-snug drop-shadow-lg">
              Find your favorite food
            </h2>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center gap-6">
          <div className="text-center mb-4">
            <h1 className="text-3xl md:text-4xl font-extrabold text-orange-500 drop-shadow-md">
              {screen ? "Sign Up" : "Login"}
            </h1>
            <p className="text-white mt-2 text-sm md:text-base">
              {screen
                ? "Create your account and start shopping!"
                : "Welcome back! Login to continue."}
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20">
            {screen ? <Signup setScreen={setScreen} /> : <Login setScreen={setScreen} />}
          </div>


        </div>
      </div>
    </div>
  );
};

export default MainAuth;
