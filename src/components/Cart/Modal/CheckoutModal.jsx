import React, { useState } from "react";
import totalAmount from "../../CustomFunction/totalAmount";
import OrangeButton from "../../Button/OrangeButton";
import generateOrder from "../../Api/Order/generateOrder";
import generateCartItem from "../../CustomFunction/generateCartItem";
import OutOfStock from "./OutOfStock";
import SuccessOrderModel from "./SuccessOrderModel";

const CheckoutModal = ({ visible, setVisible, product }) => {
  const [err, setErr] = useState("");
  
  const unavailableProduct = product.filter(
    (element) => element.availableStock <= 0
  );
  
  
  const handleOrder = async () => {
    const orderDetail = {
      items: generateCartItem(product),
      totalAmount: totalAmount(product),
    };
    console.log(orderDetail);
    await generateOrder(orderDetail, setErr);
  };

  if (!visible) return null; // hide modal if not visible

  return (
    <>
      {/* Main Checkout Modal */}
      <div
        className="fixed inset-0 z-50 bg-black/10 backdrop-blur-sm flex items-center justify-center px-2 sm:px-4"
        onClick={() => setVisible(false)}
      >
        <div
          className="bg-white rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md md:max-w-xl flex flex-col gap-2 p-4 sm:p-6 md:p-8 max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-xl sm:text-2xl font-semibold text-orange-500">
            Check Out
          </div>

          {/* Header Row */}
          <div className="flex justify-between text-sm sm:text-base font-bold">
            <div className="min-w-52">Item</div>
            <div>Quantity</div>
            <div>Price</div>
          </div>

          {/* Products */}
          {product.map((item, index) => (
            <div
              className="flex justify-between rounded-md text-sm sm:text-base bg-gray-200 p-2"
              key={index}
            >
              <div className="min-w-50">{item?.productName}</div>
              <div className="text-center">x{item?.quantity}</div>
              <div className="text-end">{item?.price}</div>
            </div>
          ))}

          {/* Total */}
          <div className="flex justify-between items-center text-lg sm:text-xl font-semibold pt-2 border-t-2 border-gray-300 mt-2">
            <div>Total:</div>
            <div>{totalAmount(product)}</div>
          </div>

          {/* Proceed Button */}
          <div className="flex flex-col items-center mt-3">
            <OrangeButton title={"Proceed"} onClick={handleOrder} />
          </div>
        </div>
      </div>

      {/* OutOfStock Modal */}
      {err === "400" && (
        <OutOfStock
          show={err === "400"}
          setShow={() => setErr("")}
          unavailableProduct={unavailableProduct}
        />
      )}
      {err === "200" && (
        <SuccessOrderModel
          show={err === "200"}
          setShow={() => setErr("")}
          setVisible={setVisible}

        />
      )}
    </>
  );
};

export default CheckoutModal;
