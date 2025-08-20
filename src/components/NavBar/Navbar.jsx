import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { FiShoppingCart, FiGrid, FiMenu, FiX } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import Searchbar from "./Searchbar";

const Navbar = ({ setProductData, maindata }) => {
  const [count, setCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const data = JSON.parse(localStorage.getItem("userDetails"));
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    setCount(cart ? cart.length : 0);
  }, []);

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-white shadow-xl">
      <nav className="flex justify-between items-center h-20 px-4 md:px-10">

        <div
          className="text-2xl md:text-3xl font-bold cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400"
          onClick={() => navigate("/")}
        >
          Daddy's Kitchen
        </div>



        <div className="hidden md:flex items-center gap-6">
          <Searchbar setProductData={setProductData} maindata={maindata} />
          {data?.role === "admin" ? (
            <div className="relative" onClick={() => navigate("/dashboard")}>
              <FiGrid className="text-3xl cursor-pointer" />
            </div>
          ) : (
            <div className="relative" onClick={() => navigate("/cart")}>
              <FiShoppingCart className="text-3xl cursor-pointer" />
              <span className="absolute text-white bg-blue-600 h-5 w-5 rounded-full text-[12px] flex justify-center items-center -bottom-1 left-5">
                {count}
              </span>
            </div>
          )}
          <div className="cursor-pointer" onClick={() => navigate("/setting")}>
            <IoSettingsOutline className="text-3xl" />
          </div>
        </div>


        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white w-full px-4 py-4 shadow-lg flex flex-col gap-4">
          <Searchbar setProductData={setProductData} maindata={maindata} />
          {data?.role === "admin" ? (
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate("/dashboard")}>
              <FiGrid className="text-2xl" />
              <span>Dashboard</span>
            </div>
          ) : (
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate("/cart")}>
              <FiShoppingCart className="text-2xl" />
              <span>Cart ({count})</span>
            </div>
          )}
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate("/setting")}>
            <IoSettingsOutline className="text-2xl" />
            <span>Settings</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
