import React, { useEffect, useState } from "react";

const SuccessOrderModel = ({ show, setShow, duration = 3000,setVisible }) => {
  const [timeLeft, setTimeLeft] = useState(duration / 1000);

  useEffect(() => {
    if (!show) return;

    setTimeLeft(duration / 1000); 

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setShow(false);
          setVisible(false)
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
      <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-sm p-6 relative animate-fadeIn">
        
        {/* Animated Checkmark */}
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-green-600 animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Header */}
        <h2 className="text-2xl font-bold text-green-600 mb-2 text-center">
          Order Successful!
        </h2>

        {/* Message */}
        <p className="text-sm text-gray-700 mb-4 text-center">
          Your order has been placed successfully. Thank you for shopping with us!
        </p>

        {/* Countdown */}
        <p className="text-xs text-gray-400 text-center">
          Closing in {timeLeft} second{timeLeft !== 1 ? "s" : ""}
        </p>

        {/* Close Button */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => {setShow(false);
                window.location.href ='/cart'
            }}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessOrderModel;
