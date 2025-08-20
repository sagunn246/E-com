import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { NavLink, useNavigate, useOutletContext } from "react-router";
import { useLocation } from "react-router";

const Searchbar = ({ setProductData }) => {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const maindata = useOutletContext();
  const handleSearch = () => {
    const element = document.getElementById("product");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  if (location.pathname === "/" || location.pathname === '/products') {
    useEffect(() => {
      let temp = maindata.filter(
        (item) =>
          item.productName.toLowerCase().includes(search.toLowerCase()) ||
          item.category.toLowerCase().includes(search.toLowerCase())
      );
      setProductData(temp);
    }, [search, location.pathname]);
  }
  return (
    <div>
      <div className="flex items-center bg-gray-100 rounded-2xl text-black h-10 w-60 justify-between px-2">
        <input
          type="text"
          className="text-[15px] outline-none bg-transparent w-full px-2"
          placeholder="Search here"
          onClick={() => handleSearch()}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IoIosSearch className="text-xl" />
      </div>
    </div>
  );
};

export default Searchbar;
