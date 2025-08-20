import React, { useEffect, useState } from "react";

const OutOfStock = ({ show, setShow, unavailableProduct, duration = 3000 }) => {
  const [timeLeft, setTimeLeft] = useState(duration / 1000);

  useEffect(() => {
    if (!show) return;

    setTimeLeft(duration / 1000); // reset countdown

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setShow(false);
          window.location.href ='/cart'
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [show, duration, setShow]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-md p-6 relative animate-fadeIn">
        
        {/* Animated Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center group"
        >
          <span className="block w-5 h-0.5 bg-gray-500 rotate-45 group-hover:bg-red-600 transition-all duration-300"></span>
          <span className="block w-5 h-0.5 bg-gray-500 -rotate-45 -translate-y-0.5 group-hover:bg-red-600 transition-all duration-300 absolute"></span>
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">
          Out of Stock!
        </h2>

        {/* Message */}
        <p className="text-sm text-gray-700 mb-4 text-center">
          Sorry, the following product{unavailableProduct.length > 1 ? "s are" : " is"} currently unavailable:
        </p>

        {/* List of Unavailable Products */}
        <ul className="mb-4 max-h-40 overflow-y-auto space-y-2 px-2">
          {unavailableProduct.map((item, idx) => (
            <li
              key={idx}
              className="bg-red-50 text-red-700 font-medium p-2 rounded-md text-center shadow-sm"
            >
              {item.productName}
            </li>
          ))}
        </ul>

        {/* Countdown */}
        <p className="text-xs text-gray-400 text-center">
          Closing in {timeLeft} second{timeLeft !== 1 ? "s" : ""}
        </p>

        {/* Bottom Close Button */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => {setShow(false)
                window.location.href ='/cart'
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default OutOfStock;
