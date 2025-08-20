import React, { useState } from "react";
import OrderStatusModel from "./modal/OrderStatusModel";

const OrderCard = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState(data.status || "Pending");

  const statusColors = {
    pending: "bg-orange-100 text-orange-800",
    completed: "bg-green-100 text-green-700",
    cancelled: "bg-red-100 text-red-700",
    "in-progress": "bg-orange-50 text-orange-700",
  };

  return (
    <div className="w-full bg-white border rounded-xl shadow-sm p-6 flex flex-col gap-6 transition-all hover:shadow-md">

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-3">
        <h3 className="text-sm font-semibold text-gray-900">
          Order #{data._id?.slice(-10) || "N/A"}
        </h3>
        <span className="text-xs text-gray-500 mt-1 sm:mt-0">
          {new Date(data.createdAt).toLocaleDateString()}
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3 flex flex-col justify-between">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Customer</h4>
            <div className="flex justify-between text-xs font-medium text-gray-700">
              <p>{data.coustomerName}</p>
              <p>{data.contactNumber}</p>
            </div>
            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <p>{data.city}</p>
              <p>{data.street}</p>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="text-xs font-semibold text-gray-800">Delivery</h4>
            <p className="text-xs text-gray-600">{data.deliveryDescription}</p>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <p className="text-xs font-semibold">
              Status:{" "}
              <span
                className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${statusColors[status] || "bg-gray-100 text-gray-600"}`}
              >
                {status}
              </span>
            </p>
            {data.status !== 'completed' && (
              <button
                onClick={() => setShowModal(true)}
                className="bg-orange-500 text-white px-3 py-1 rounded-lg hover:bg-orange-600 text-xs"
              >
                Change Status
              </button>
            )}
          </div>
        </div>

        <div className="flex-1 border-l pl-5">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Items</h4>
          <div className="flex justify-between text-xs font-semibold border-b pb-1">
            <span>Name</span>
            <span>Qty</span>
          </div>
          <div className="max-h-40 overflow-y-auto space-y-2 mt-2 pr-2">
            {data.items.map((item, idx) => (
              <div key={idx} className="flex justify-between text-xs text-gray-700">
                <span>{item.itemName}</span>
                <span>{item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="mt-3 flex justify-between text-xs font-semibold text-gray-800">
            <span>Total Amount</span>
            <span className="text-orange-600">Rs. {data.totalAmount}</span>
          </div>
        </div>
      </div>

      {showModal && (
        <OrderStatusModel
          status={status}
          setShowModal={setShowModal}
          setStatus={setStatus}
          id={data._id}
        />
      )}
    </div>
  );
};

export default OrderCard;
