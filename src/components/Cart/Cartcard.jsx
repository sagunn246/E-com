import React, { useEffect, useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import removeFromCart from "../localstorage/removeFromCart";
import Quantity from "./Quantity";

const Cartcard = ({ product, setItem, selected, setSelected, checkedall }) => {
  const [fav, setFav] = useState(false);
  const [item, setItemState] = useState(product);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setItemState(product);
    if (checkedall) {
      console.log(checkedall);
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [checkedall]);

  const toggleFavorite = () => setFav((prev) => !prev);

  const handleCheckbox = () => {
    if (checked) {
      setSelected((prev) => prev.filter((i) => i.id !== item.id));
      setChecked(false);
    } else {
      setSelected((prev) => [...prev, item]);
      setChecked(true);
    }
  };

  return (
    <div className="w-full flex justify-center my-2">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl w-[90vw] sm:w-[70vw] flex items-center overflow-hidden border border-orange-300">

        {/* Checkbox */}
        <div className="p-4">
          <input
            type="checkbox"
            className="w-5 h-5 cursor-pointer accent-orange-500"
            checked={checked}
            onChange={handleCheckbox}
          />
        </div>

        {/* Product Image */}
        <div className="flex justify-center items-center p-4">
          <img
            src={item?.image}
            alt={item?.productName}
            className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-xl border border-orange-200"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 p-4 flex flex-col justify-between gap-2">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 truncate">
              {item?.productName}
            </h2>
            <p className="text-sm text-orange-500">{item?.category}</p>
            <p className="text-sm text-red-700">
              {item?.availableStock === 0
                ? "Out Of Stock"
                : `Available Stock: ${item?.availableStock || 0}`}
            </p>
          </div>

          {/* Price + Actions */}
          <div className="flex justify-between items-center mt-2">
            <span className="text-lg sm:text-xl font-bold text-orange-600">
              ${item?.price}
            </span>

            <div className="flex gap-3 text-lg sm:text-xl text-gray-700">
              {fav ? (
                <FaHeart
                  onClick={toggleFavorite}
                  className="text-orange-500 cursor-pointer"
                />
              ) : (
                <GrFavorite
                  onClick={toggleFavorite}
                  className="text-gray-500 hover:text-orange-500 cursor-pointer"
                />
              )}
              <MdDeleteForever
                onClick={() => removeFromCart(item, setItem)}
                className="cursor-pointer text-gray-600 hover:text-orange-600 transition"
              />
            </div>
          </div>

          {/* Quantity Component */}
          <Quantity
            data={item}
            quantity={item?.quantity}
            setItemState={setItemState}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      </div>
    </div>
  );
};

export default Cartcard;
