import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/Navbar";
import Cartcard from "./Cartcard";
import totalAmount from "../CustomFunction/totalAmount";
import OrangeButton from "../Button/OrangeButton";
import CheckoutModal from "./Modal/CheckoutModal";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const data = localStorage.getItem("cart");
  const [item, setItem] = useState(data ? JSON.parse(data) : []);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState([]);
  const [checkedall, setCheckedall] = useState(false);

  const toggleSelectAll = () => {
    if (selected.length === item.length) {
      setSelected([]);
      setCheckedall(false);
    } else {
      setSelected([...item]);
      setCheckedall(true);
    }
  };

  return (
    <div className="bg-whiten min-h-screen pt-20 pb-10 px-4 md:px-10 lg:px-40">
      <Navbar />

      {item.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="flex flex-col lg:flex-row gap-6 mt-10">
          <div className="w-full lg:w-[60%] flex flex-col gap-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold">My Cart</h2>
              <button
                onClick={toggleSelectAll}
                className="text-white bg-blue-500 px-4 py-1 rounded-md text-sm"
              >
                {selected.length === item.length
                  ? "Deselect All"
                  : "Select All"}
              </button>
            </div>

            {item.map((itemData, index) => (
              <Cartcard
                key={index}
                product={itemData}
                setItem={setItem}
                selected={selected}
                setSelected={setSelected}
                checkedall={checkedall}
              />
            ))}
          </div>
          <div className="w-full lg:w-[40%] bg-white p-6 rounded-md shadow-md border h-fit sticky top-24">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
              Order Summary 🧾
            </h2>

            <div className="flex flex-col gap-2 text-lg text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${totalAmount(selected)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>

              <div className="flex justify-between font-bold text-orange-500 text-xl mt-2 border-t pt-3">
                <span>Total Amount</span>
                <span>${totalAmount(selected)}</span>
              </div>
            </div>

            <div className="mt-6">
              <OrangeButton
                title="Proceed to Checkout"
                onClick={() => setVisible((prev) => !prev)}
                disabled={selected.length === 0}
              />
            </div>
          </div>
        </div>
      )}

      {visible && (
        <CheckoutModal
          visible={visible}
          product={selected}
          setVisible={setVisible}
        />
      )}
    </div>
  );
};

export default Cart;
