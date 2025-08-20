import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import ProductModal from "../Modal/ProductModal";
import addToCart from "../../localstorage/addToCart";
import deleteProductApi from "../../Api/product/deleteProductApi";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../Modal/DeleteModal";

const Card = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const [cartbool, setCartbool] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const user = JSON.parse(localStorage.getItem("userDetails"));
  const role = user?.role;
  const navigate = useNavigate();

  const handleClickCart = () => {
    if (cartbool) {
      setCartbool(false);
    } else {
      setCartbool(true);
      addToCart(item);
    }
  };

  const handleUpdate = (item) => {
    navigate("/addProduct", { state: item });
  };

  return (
    <>
      <div
        className="bg-white rounded-2xl w-full md:w-[20vw] min-h-[350px] shadow-md hover:shadow-xl transition duration-300 relative overflow-hidden group border border-gray-100"
        onClick={() => setShowModal(true)}
      >

        <div className="absolute z-10 top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
          {item?.availableStock > 0
            ? `${item?.availableStock} in stock`
            : "Out of Stock"}
        </div>
        <div className="relative">
          <img
            src={item?.image}
            alt={item?.name}
            className="w-full h-60 object-cover rounded-t-2xl"
          />
          {role === "admin" && (
            <button
              className="absolute top-3 right-3 text-xl text-right z-20"
              onClick={(e) => {
                e.stopPropagation();
                setShowDelete(true);
              }}
            >
              <MdDelete className="text-orange-500 text-2xl drop-shadow cursor-pointer hover:scale-110 transition" />
            </button>
          )}
        </div>

        <div className="p-4 flex flex-col justify-between h-[calc(100%-240px)]">
          <div>
            <p className="text-center text-gray-400 text-sm mb-1">
              {item?.category}
            </p>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-gray-800">
                {item?.productName}
              </h2>
              <div className="flex gap-1 text-yellow-400 text-lg">
                {[...Array(Math.floor(item?.rating) || 0)].map((_, idx) => (
                  <MdOutlineStarPurple500 key={idx} />
                ))}
                {[...Array(5 - (Math.floor(item?.rating) || 0))].map(
                  (_, idx) => (
                    <IoStarOutline key={idx} />
                  )
                )}
              </div>
            </div>
          </div>


          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold text-[#fa7516]">
              ${item?.price}
            </span>

            {role === "admin" ? (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleUpdate(item);
                }}
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-[14px] px-3 py-2 rounded-md transition"
              >
                <GrUpdate />
                Update
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClickCart(item);
                }}
                className={`flex items-center gap-2 ${cartbool
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-[#fa7516] hover:bg-[#e46a14]"
                  } text-white text-[14px] px-3 py-2 rounded-md transition`}
              >
                <FaShoppingCart />
                {cartbool ? "Added" : "Add to cart"}
              </button>
            )}
          </div>
        </div>
      </div>

      {showDelete && <DeleteModal setShowDelete={setShowDelete} value={item} />}
      {showModal && (
        <ProductModal
          data={item}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      )}
    </>
  );
};

export default Card;
